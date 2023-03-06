const Customer = require('../models/customerModel')
const asyncHandler = require('express-async-handler');
const genarateToken = require('../utils/genarteToken');

const registerCustomer = asyncHandler(async(req,res) =>{
    const { name,email, password,pic }= req.body;

    const customerExistes = await Customer.findOne({ email });// chech the email which was already existes or not

    if(customerExistes){
        res.status(400)
        throw new Error('Customer Allready Exsits');
    }

     //create a obejct called user 
    const customer = await Customer.create({
        name,
        email,
        password,
        pic
    })

    //if user doesn't already inserted create a user
    if(customer){
        res.status(201).json({
            _id:customer._id,
            name:customer.name,
            email: customer.email,
            isAdmin:customer.isCutomer,
            pic:customer.pic,
            token:genarateToken(customer._id)
        })
    }else{
          res.status(400)
          throw new Error('Error Occured')
    }
})



//login
const authCustomer = asyncHandler(async (req,res) =>{
    const {email,password} = req.body;

    const customer = await Customer.findOne({email});

    //match the registered password and the entered passsword
    if(customer && (await customer.matchPassword(password))){
        res.json({
             _id:customer._id,
            name:customer.name,
            email: customer.email,
            isAdmin:customer.isCutomer,
            pic:customer.pic,
            token:genarateToken(customer._id)
        })
    }else{
        res.status(400)
        throw new Error('Invalied Email or Password! ')
    }
});

module.exports = { registerCustomer,authCustomer };