import { Request, Response } from 'express';
import Player from '../models/Player';
import { catchAsync } from '../middleware/catchAsync';

export const createPlayer = catchAsync(async (req: Request, res: Response) => {
    const player = await Player.create(req.body);
    res.status(201).json({ status: 'success', data: { player } });
});

// Add other controller methods as needed
