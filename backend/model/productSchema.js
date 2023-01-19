import mongoose from "mongoose";

const productSchema=new mongoose.Schema({
    id:{
        type: String,
        required:true,
        unique:true
    },
    url:String,
    detailurl:String,
    price:Object,
    title:Object,
    quantity:Number,
    description:String,
    tagline:String
})

const Product = mongoose.model('product',productSchema);
export default Product