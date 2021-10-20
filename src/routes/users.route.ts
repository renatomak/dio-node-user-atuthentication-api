import { NextFunction, Request, Response, Router } from "express";

const usersRoute = Router();

usersRoute.get('/status', (req: Request, res: Response, next: NextFunction) => {
    const users = [{ userName: "Renato"}];
    res.status(200).send(users);
  });
usersRoute.get('/users/:uuid', (req: Request, res: Response, next: NextFunction) => {
    
    res.status(200);
  });


export default usersRoute;
