import express from 'express';
import { router } from './routes';
import usersRoute from './routes/users.route';

const app = express()



app.use(router);



  export { app }