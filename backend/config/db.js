import mongoose from "mongoose";

export const connectDB =  async ()=>{
    await mongoose.connect('mongodb+srv://as4589259:NhjR2Q0g7TGbQTU4@cluster0.gzgr2ej.mongodb.net/food--del').then(()=>console.log("DB Connected"));
}