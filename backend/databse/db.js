import mongoose from "mongoose";

export const Connection=async (UserName,Password)=>{
    // console.log(UserName,Password)
    const URL =`mongodb+srv://${UserName}:${Password}@cluster0.7rdg6jd.mongodb.net/shopkart?retryWrites=true&w=majority`
    try{
        await mongoose.connect(URL,{useNewUrlParser: true , useUnifiedTopology: true});
        console.log('database connected')
    }catch(err){
        console.log('error while db connection ',err.message)
    }
}

export default Connection;