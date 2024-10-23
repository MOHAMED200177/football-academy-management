import dotenv from 'dotenv';
import app from './app';
import connectDB from './config/db';

dotenv.config({ path: './.env/config.env' });

const port = process.env.PORT || 5000;

// Connect to database
connectDB();

app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});
