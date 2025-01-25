const mongoose=require("mongoose")

const productSchema= new mongoose.Schema({
    title:{type:String,required:true},
    brand:{type:String,required:true},
    mrp:{type:Number,required:true},
    },
    {
        versionKey:false
    }
)

const Product=mongoose.model("product",productSchema)

module.exports={Product}