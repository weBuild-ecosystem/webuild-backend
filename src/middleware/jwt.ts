import jwt, { JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export const authorization = (req: Request | any, res: Response, next: NextFunction) => {
  const token = req.cookies.access_token;
  if (!token) {
    return res.status(403).json({message: "Invalid token"})
  }
  try {
    const { _id } = jwt.verify(token, "SECRET_EXAMPLE_KEY") as JwtPayload;
    req._id = _id;
    return next();
  } catch {
    return res.status(403).json({message: "Invalid token"})
  }
};