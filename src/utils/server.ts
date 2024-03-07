import bodyParser from "body-parser";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const corsOptions ={
  
  origin:'http://localhost:3000', 
  credentials:true, 
  optionSuccessStatus:200,
  
}
function createServer() {
  const app = express();
  app.use(express.json());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(cookieParser());
  app.use(cors(corsOptions))
  return app;
}

export default createServer;
