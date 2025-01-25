const mongoose=require("mongoose")

const userSchema= new mongoose.Schema({

    name:{type:String,require:true,unique:true},
    email:{type:String,require:true,unique:true},
    password:{type:String,require:true}
    },
    {
        versionKey:false
    }
)

const User=mongoose.model("user",userSchema)

module.exports={User}