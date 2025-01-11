import { Router, Router as RouterType } from 'express';
import { userRouter } from './user.js';
import { roomRouter } from './room.js';

export const router: RouterType = Router();

router.use('/user', userRouter);

router.use('/room', roomRouter);
