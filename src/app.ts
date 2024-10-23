import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';

const app = express();

// Middleware
app.use(helmet());
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
    res.send('Football Academy Management API');
});

export default app;
