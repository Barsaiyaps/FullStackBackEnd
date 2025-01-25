const express=require("express")
const {User}=require("../model/user.model")
const userRoute=express.Router()
const jwt=require("jsonwebtoken")
const bcrypt = require("bcrypt");
const {auth}=require("../middleWare/auth")



userRoute.post("/signup", async(req,res)=>{
    const {name,email,password}=req.body
    const hashed= await bcrypt.hash(password,6)
    try {
      const user=new User({name,email,password:hashed})
      await user.save()
      res.send(user)
  } catch (error) {
    res.send("error")
  }
})


userRoute.post("/login",auth,async(req,res)=>{
    const {email,password}=req.body
    const user= await User.findOne({email})
    const unhashed =await bcrypt.compare(password,user.password)
    try {
      console.log(unhashed)
      if(unhashed){
        let token = await jwt.sign({ id: user._id, email: user.email },"PSB")
        // console.log(token)
        res.send({msg:"Successfully Login",token})
      }else{
        res.send({msg:"Error"})
      }
    } catch (error) {
      res.send(error)
    }
  })


module.exports={userRoute}