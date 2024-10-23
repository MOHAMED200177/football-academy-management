import { Request, Response } from 'express';
import Coach from '../models/Coach';
import { catchAsync } from '../middleware/catchAsync';

export const createCoach = catchAsync(async (req: Request, res: Response) => {
    const coach = await Coach.create(req.body);
    res.status(201).json({ status: 'success', data: { coach } });
});

// Add other controller methods as needed
