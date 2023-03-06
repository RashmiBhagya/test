const Seller  = require('../models/sellerModel')
const asyncHandler = require('express-async-handler');
const genarateToken = require('../utils/genarteToken');

const registerSeller = asyncHandler(async(req,res) =>{
    const { name,email, password,pic }= req.body;

    const sellerExistes = await Seller.findOne({ email });// chech the email which was already existes or not

    if(sellerExistes){
        res.status(400)
        throw new Error('User Allready Exsits');
    }

     //create a obejct called user 
    const seller = await Seller.create({
        name,
        email,
        password,
        pic
    })

    //if user doesn't already inserted create a user
    if(seller){
        res.status(201).json({
            _id:seller._id,
            name:seller.name,
            email:seller.email,
            isUser:seller.isUser,
            pic:seller.pic,
            token:genarateToken(seller._id)
        })
    }else{
          res.status(400)
          throw new Error('Error Occured')
    }
})



//login
const authSeller = asyncHandler(async (req,res) =>{
    const {email,password} = req.body;

    const seller = await Seller.findOne({email});

    //match the registered password and the entered passsword
    if(seller && (await seller.matchPassword(password))){
        res.json({
            _id:seller._id,
            name:seller.name,
            email:seller.email,
            isUser:seller.isUser,
            pic:seller.pic,
            token: genarateToken(seller._id),
        })
    }else{
        res.status(400)
        throw new Error('Invalied Email or Password! ')
    }
});

module.exports = { registerSeller,authSeller };