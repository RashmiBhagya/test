const Admin = require('../models/adminModel');
const Seller = require('../models/sellerModel')
const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');
const genarateToken = require('../utils/genarteToken');



// Admin Register
const registerAdmin = asyncHandler(async(req,res) =>{
    const { name,email, password,pic }= req.body;

    const adminExistes = await Admin.findOne({ email });// chech the email which was already existes or not

    if(adminExistes){
        res.status(400)
        throw new Error('User Allready Exsits');
    }

     //create a obejct called admin 
    const admin = await Admin.create({
        name,
        email,
        password,
        pic
    })

    //if user doesn't already inserted create a user
    if(admin){
        res.status(201).json({
            _id:admin._id,
            name:admin.name,
            email: admin.email,
            isUser:admin.isUser,
            pic: admin.pic,
            token:genarateToken(admin._id)
        })
    }else{
          res.status(400)
          throw new Error('Error Occured')
    }
})


//Admin Login
const authAdmin = asyncHandler(async (req,res) =>{
    const {email,password} = req.body;

    let type;

    const admin = await Admin.findOne({email});
    const user = await User.findOne({email});
    const seller = await Seller.findOne({email});

    //match the registered password and the entered passsword
    if(admin && (await admin.matchPassword(password))){
        type = "admin";
        res.json({
            _id:admin._id,
            name:admin.name,
            email:admin.email,
            isUser: admin.isUser,
            pic:admin.pic,
            token: genarateToken(admin._id),
            type: type,
        })
    }else if(user && (await user.matchPassword(password))){
        type = "user";
        res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isUser: user.isUser,
            pic:user.pic,
            token: genarateToken(user._id),
            type: type,
        })
    }else if(seller && (await seller.matchPassword(password)) ){
        type = "seller";
        res.status(201).json({
            _id:seller._id,
            name:seller.name,
            email:seller.email,
            isUser:seller.isUser,
            pic:seller.pic,
            token:genarateToken(seller._id),
            type: type,
        })
    }else{
        res.status(400)
        throw new Error('Invalied Email or Password! ')
    }
});

module.exports = { registerAdmin,authAdmin };


