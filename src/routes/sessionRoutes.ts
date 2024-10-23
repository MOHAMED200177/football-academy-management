import { Router } from 'express';
import { createSession } from '../controllers/sessionController';

const router = Router();

router.post('/', createSession);
// Add other routes as necessary

export default router;
