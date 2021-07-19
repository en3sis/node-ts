import { Router } from 'express';

// Routes imports
import hello from './hello'

const router = Router();

router.use('/hello', hello);

export default router;
