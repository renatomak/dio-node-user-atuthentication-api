import express, {Request, Response, NextFunction } from 'express';

const app = express()
const port = 3000


app.get('/status', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ foo: 'bar'});
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
  });