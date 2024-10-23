import { Request, Response } from 'express';
import Schedule from '../models/Schedule';
import { catchAsync } from '../middleware/catchAsync';

export const createSchedule = catchAsync(async (req: Request, res: Response) => {
    const schedule = await Schedule.create(req.body);
    res.status(201).json({ status: 'success', data: { schedule } });
});

// Add other controller methods as needed
