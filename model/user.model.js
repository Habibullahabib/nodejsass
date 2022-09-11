const mongoose = require("mongoose");


 

const userSchema= new mongoose.Schema({
   
    name:{
        type:String,
        require:"this fil is required",

    },
    
});

module.exports=mongoose.model("user",userSchema);