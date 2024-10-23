import { Router } from 'express';
import { createSchedule } from '../controllers/scheduleController';

const router = Router();

router.post('/', createSchedule);
// Add other routes as necessary

export default router;
