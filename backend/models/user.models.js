const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:{type:String},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    profilePic:{type:String, default:"https://static.vecteezy.com/system/resources/previews/012/850/918/original/line-icon-for-avtar-vector.jpg"}
},{
    timestamps:true,
});

const User = mongoose.model("user", userSchema);

module.exports = User;