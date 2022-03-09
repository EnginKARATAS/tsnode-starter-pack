import express, {Request,Response,Application} from 'express';
import {Cat} from './modal/cat'

const app:Application = express();

const PORT = process.env.PORT || 8000;

app.get("/", (req:Request, res:Response):void => {
    res.send("Hello Typescript with Node.js!")
  });

  
  app.listen(PORT, ():void => {
    let cat = new Cat("pasa");

  
    console.log(`Server Running here 👉 https://localhost:${PORT}`);
});