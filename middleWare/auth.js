const jwt=require("jsonwebtoken")
const {User}=require("../model/user.model")

const auth=(req,res,next)=>{
const token=req.headers.authorization.split(" ")[1]
console.log(token)
if(token){
    jwt.verify(token,"PSB",async (err,decoded)=>{
        if(decoded){
            const {id}=decoded
            const userMakingReq= await User.findOne({_id:id})
            console.log(userMakingReq)
            const requireRole=userMakingReq?.role
            req.role=requireRole
            next()
        }else{
            res.json({err})
        }
    })
}else{
    res.json({msg:"Please login first"})
}    
}


module.exports={auth}