import mongoose from "mongoose";

export const Connection=async (UserName,Password)=>{
    // console.log(UserName,Password)
    const URL =`mongodb://${UserName}:${Password}@ac-17hlxfl-shard-00-00.7rdg6jd.mongodb.net:27017,ac-17hlxfl-shard-00-01.7rdg6jd.mongodb.net:27017,ac-17hlxfl-shard-00-02.7rdg6jd.mongodb.net:27017/shopkart?ssl=true&replicaSet=atlas-pjc3ru-shard-0&authSource=admin&retryWrites=true&w=majority`
    try{
        await mongoose.connect(URL,{useNewUrlParser: true , useUnifiedTopology: true});
        console.log('database connected')
    }catch(err){
        console.log('error while db connection ',err.message)
    }
}

export default Connection;