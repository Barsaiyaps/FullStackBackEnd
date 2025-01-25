const express=require("express")
const {Product}=require("../model/product.model")
const productRoute=express.Router()


productRoute.post("/", async(req,res)=>{
  try {
      const data=req.body
      const product=new Product(data)
      await product.save()
      res.send(data)
  } catch (error) {
    res.send(error)
  }
})

productRoute.get("/", async(req,res)=>{
    try {

        const product= await Product.find()
        res.send(product)
    } catch (error) {
      res.send(error)
    }
  })

  productRoute.put("/:id", async(req,res)=>{
    const id=req.params.id
    const data=req.body
    try {
        const product= await Product.updateOne({_id:id},data)
        res.send(product)
    } catch (error) {
      res.send(error)
    }
  })

  productRoute.delete("/:id", async(req,res)=>{
    const id=req.params.id
    const data=req.body
    try {
        const product= await Product.deleteOne({_id:id})
        res.send(product)
    } catch (error) {
      res.send(error)
    }
  })


module.exports={productRoute}