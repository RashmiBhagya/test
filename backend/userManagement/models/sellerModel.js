const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const sellerSchema = mongoose.Schema(
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
        isSeller:{
            type: Boolean,
            default: false,
        },
        pic:{
            type:String,
             default:
            "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
        }
    },
     {
            timestamps: true,
     }
);

//encrypt the user password
sellerSchema.pre('save',async function(next){
    if(!this.isModified('password')){
       next();
    }
    const salt = await bcrypt.genSalt(10); //uniqu salt

    this.password = await bcrypt.hash(this.password,salt);
});

//decrypt the password
sellerSchema.methods.matchPassword = async function (enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
}


const Seller = mongoose.model("Sellers",sellerSchema);
module.exports = Seller;
