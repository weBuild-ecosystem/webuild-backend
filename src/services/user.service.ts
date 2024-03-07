import { Request, Response } from "express";
import { validationResult } from "express-validator";
import dealerSchema from "../schema/user";
import bcrypt from 'bcrypt';
import jwt, { JwtPayload } from "jsonwebtoken";
import { User } from "../models/user";
import user from "../schema/user";
import { ObjectId } from "mongoose";

export function createUser(req: Request | any, res: Response) {
  try {  
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const body = req?.body;
    const addingUser = new dealerSchema({
      ...body
    });
    addingUser.markModified("users");
    addingUser.save()
    if (addingUser) {
      return res
        .status(202)
        .json({ message: "User registered", user: addingUser});
    } else return res.status(204).json({ message: "User not registered" });
  } catch (errors) {
    return res.status(505).json({ message: "Invalid body or error" });
  }
}

export function cresateUser(req: Request | any, res: Response) {
  try {  
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const body = req?.body;
    const addingUser = new dealerSchema({
      ...body
    });
    addingUser.markModified("users");
    addingUser.save()
    if (addingUser) {
      return res
        .status(202)
        .json({ message: "User registered", user: addingUser});
    } else return res.status(204).json({ message: "User not registered" });
  } catch (errors) {
    return res.status(505).json({ message: "Invalid body or error" });
  }
}