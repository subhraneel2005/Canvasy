import { Router, Router as RouterType } from 'express';

export const roomRouter: RouterType = Router();

roomRouter.post('/create', (req,res) => {
    //create the room and send the token in url query parameters

    //like this:-> http://localhost:3000/api/ws/token?=371873bcjb
    //if no token then close websocket server then and there
})
