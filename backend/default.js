import { products } from "./constrants/data.js";
import Product from "./model/productSchema.js";

const DefaultData=async()=>{
    try{
       await Product.insertMany(products);
        console.log('Data imported Successfully')
    }catch(err){
        console.log('error while inserting data ',err.message)
    }
}

export default DefaultData;