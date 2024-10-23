import { Router } from 'express';
import { createPlayer } from '../controllers/playerController';

const router = Router();

router.post('/', createPlayer);
// Add other routes as necessary

export default router;
