import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const DB = process.env.DATABASE!.replace('<PASSWORD>', process.env.DATABASE_PASS!);
        await mongoose.connect(DB);
        console.log('DB connection successful');
    } catch (error: any) {
        console.error('Database connection failed:', error.message);
        process.exit(1);
    }
};

export default connectDB;
