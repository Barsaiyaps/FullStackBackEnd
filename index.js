const express = require("express")
const mongoose=require("mongoose")
const {productRoute}=require("./route/product.route")
const {userRoute}=require("./route/user.route")
const {auth}=require("./middleWare/auth")
const PORT = 8080
const app=express()
app.use(express.json())


app.use("/products",auth,productRoute)
app.use("/users",userRoute)


app.listen(PORT, async ()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/BEDC")
    console.log(`Connected to the PORT ${PORT}`)
})