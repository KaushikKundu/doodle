import mongoose  from "mongoose";

export default async function connectDb(){
    try{
        const mongoURI = process.env.MONGO_URI;
        if (!mongoURI){
            throw new Error("MONGO_URI is not defined in environment variables");
        }
        await mongoose.connect(mongoURI as string)
        console.log('✅ MongoDB connected successfully');
    }catch(err){
        console.error("Error connecting to the database:", err);
        process.exit(1);
    }
}
