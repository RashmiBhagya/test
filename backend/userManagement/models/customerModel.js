const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const customerSchema = mongoose.Schema(
    {
        name:{
            type:String,
        },
         email:{
            type:String,
            unique: true
        },
         password:{
            type:String,
        },
        isCustomer:{
            type: Boolean,
            default: false,
        },
         pic:{
            type:String,
             default:
            "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
        },
    },
     {
            timestamps: true,
     }
);

//encrypt the user password
customerSchema.pre('save',async function(next){
    if(!this.isModified('password')){
       next();
    }
    const salt = await bcrypt.genSalt(10); //uniqu salt

    this.password = await bcrypt.hash(this.password,salt);
});

//decrypt the password
customerSchema.methods.matchPassword = async function (enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
}


const Customer = mongoose.model("Customers",customerSchema);
module.exports = Customer;
