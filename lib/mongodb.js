import mongoose from "mongoose";

export const connectMongoDB = async() => {
    try {
        await mongoose.connect(process.env.MONGODBURI)
        console.log("ca marche")
    } catch (err){
        console.log("ca marche pas")
    }
}