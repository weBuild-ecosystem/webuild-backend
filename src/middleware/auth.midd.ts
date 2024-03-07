import { Request, Response, NextFunction } from 'express';

export const globalAuthorization = (req: Request, res: Response, next: NextFunction) => {
    const auth = req.headers.authorization;
    console.log(auth);
    if (auth === 'authKey') {
      return next();
    } else return res.status(403).json({message: "Invalid authorization"})
};