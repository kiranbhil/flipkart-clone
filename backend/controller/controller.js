import { request } from "express";
import User from "../model/userSchema.js"

export const userSignup=async(req,res)=>{
    try{
        const exists=await User.findOne({username:req.body.username})
        if(exists){
            return res.status(401).json({message:'user alredy exists'})
        }
        const user=req.body;
        const newUser=new User(user)
        await newUser.save();
        res.status(200).json({message:user})
    }catch(err){
        res.status(500).json({message:err.message})
    }
}
export const userLogin=async(req,res)=>{
    try{
        const username=req.body.username;
        const password=req.body.password;
        let user=await User.findOne({username:username,password:password})
        if(user){
            return res.status(200).json({data:user})
        }else{
            return res.status(401).json('Invalid Login')
        }
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}