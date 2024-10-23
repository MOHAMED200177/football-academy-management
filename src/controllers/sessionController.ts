import { Request, Response } from 'express';
import Session from '../models/Session';
import { catchAsync } from '../middleware/catchAsync';

export const createSession = catchAsync(async (req: Request, res: Response) => {
    const session = await Session.create(req.body);
    res.status(201).json({ status: 'success', data: { session } });
});

// Add other controller methods as needed
