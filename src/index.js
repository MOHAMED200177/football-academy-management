const dotenv = require('dotenv');
const connectDB = require('./config/db');
dotenv.config({ path: './.env/config.env' });

const app = require('./app');

connectDB();

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});