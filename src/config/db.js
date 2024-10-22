const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASS);

        await mongoose.connect(DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true // استخدم هذا الخيار بدلاً من useCreateIndex وuseFindAndModify
        });

        console.log('DB connection successful');
    } catch (error) {
        console.error('Database connection failed:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;

