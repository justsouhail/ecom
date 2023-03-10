const mongoose  = require('mongoose');


const schema = new mongoose.Schema ({
    nom : {
        type : String , 
        required : true ,
    },
    email : {
        type : String,
        required : true,
        unique: true,
    },
    password : {
        type : String , 
        required : true 
    },
    role : {
        type : Boolean,
        default: false
    }
,
});

const Usermodel = mongoose.model("user",schema);

module.exports=Usermodel;


