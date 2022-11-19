const mongoose=require('mongoose')
const jwt = require("jsonwebtoken");
const crypto = require('crypto')

const User=new mongoose.Schema({
    // nom:{
    //     type:String,
    //     required:true,
    // },
    // prenom:{
    //     type:String,
    //     required:true,
    // },
    // telephone:{
    //     type:Number,
    //     required:true,
    // },
    email:
    {
        type:String,
        required:true,
        unique:true
    },
    hash : String,
    salt : String
},
    {collection : "users"},
)

User.methods.setPassword = function(password) {
     
    this.salt = crypto.randomBytes(16).toString('hex'); 
     
    this.hash = crypto.pbkdf2Sync(password, this.salt,  
    1000, 64, `sha512`).toString(`hex`); 
   }; 
     
   // Method to check the entered password is correct or not 
User.methods.validPassword = function(password) {
       let hash = crypto.pbkdf2Sync(password,
       this.salt, 1000, 64, `sha512`).toString(`hex`); 
       return this.hash === hash; 
};

const model = mongoose.model('User',User)
module.exports = {model,User}
