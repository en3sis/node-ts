import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (_: Request, res: Response) => {
  return res.send('Hello World!');
})

export default router;
