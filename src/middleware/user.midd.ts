import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';


export const authorization = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.status(403).json({message: "Invalid token"})
  }
  try {
    const data = jwt.verify(token, "SECRET_EXAMPLE_KEY");
    
    return next();
  } catch {
    return res.status(403).json({message: "Invalid token"})
  }
};