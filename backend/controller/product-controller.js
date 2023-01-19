import Product from "../model/productSchema.js"

export const getProducts=async(req,res)=>{
    try{
        const products=await Product.find({})
        res.status(200).json(products);
    }catch(err){
    res.status(500).json({message:err.message})
    }
}
export const getProductById=async(req,res)=>{
    try{
        const id=req.params.id;
        const product=await Product.findOne({'id':id})
        res.status(200).json(product)
    }catch(err){
        res.status(500).json({message:err.message})
    }
}

export const addProduct=async(req,res)=>{
    try{
        const product=req.body;
        const newProduct=new Product(product)
        await newProduct.save();
        res.status(200).json({message:product})
    }catch(err){
        res.status(500).json({message:err.message})
    }
}

export const updateProduct=async(req,res)=>{
    try {
        const data = req.body;
        const pid = req.params.id;
        await Product.findByIdAndUpdate({ _id: pid }, data);
        res.status(200).json({message:"Updated"})
      } catch (err) {
        console.log(err);
        res.send({ massage:err.massage});
      }
}

export const deleteProduct=async(req,res)=>{
    try {
        const data = req.body;
        const pid = req.params.id;
        await Product.findByIdAndDelete({ _id: pid }, data);
        res.status(200).json({message:"Deleted "})
      } catch (err) {
        console.log(err);
        res.send({ massage:err.massage});
      }
}