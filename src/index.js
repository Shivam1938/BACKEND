// require('dotenv').config({path:'./env'})
import dotenv from "dotenv";

dotenv.config({
    path:'./env'
})

import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/db.js";




connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(`server is running at port : ${process.env,PORT}`);
    })
})
.catch((err) => {
    console.log("MONGODB connection error!!!", err);
    

})






























/*

import express from "express";
const app = express()



( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/
            ${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("errr:",error);
            throw error
            
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port $(process.env.PORT)`);
            
        })
    } catch (error);{
        console.error("ERROR",error);
        throw err
    }
})()

*/