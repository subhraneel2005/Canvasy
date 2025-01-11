import { Router, Router as RouterType } from 'express';
import { SignupSchema } from '../../types/index.js';
import bcrypt from "bcrypt";
import prisma from "@repo/db/prisma"

export const userRouter: RouterType = Router();

userRouter.post('/signup', async(req, res) => {
    const {username,password} = SignupSchema.parse(req.body);

    if(!username || !password){
        res.status(400).json({
            message: "Insufficient Credentials"
        })
    };
    const hashedPass = await bcrypt.hash(password, 10);
    //db call here
})

userRouter.post('/signin', async(req, res) => {
    const {username,password} = SignupSchema.parse(req.body);

    if(!username || !password){
        res.status(400).json({
            message: "Insufficient Credentials"
        })
    };
    //compare hasged pass with pass in db
    //sign jwt
    //send the token 
})