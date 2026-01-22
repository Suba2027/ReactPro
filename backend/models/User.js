const mongoose = require('mongoose');
const userSchema=mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    }
});
module.exports=mongoose.model('User',userSchema);
// normall export can be multiple but module.exports can export only one thing 
// one file has one module.exports
