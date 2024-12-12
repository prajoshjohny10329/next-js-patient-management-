import mongoose from 'mongoose';

export const connectDB = async () => {
    try {
        mongoose.connect(process.env.DB_URI as string)
        console.log('db connected');
    } catch (error) {
        console.log('error at db');
        console.log(error);
    }
}