import { Router } from 'express';
import { createCoach } from '../controllers/coachController';

const router = Router();

router.post('/', createCoach);
// Add other routes as necessary

export default router;
