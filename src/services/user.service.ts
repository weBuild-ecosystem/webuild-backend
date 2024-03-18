import { Request, Response } from "express";
import { validationResult } from "express-validator";
import dealerSchema from "../schema/user.schema";
import bcrypt from 'bcrypt';
import jwt, { JwtPayload } from "jsonwebtoken";
import { User } from "../models/user.model";
import user from "../schema/user.schema";
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

export async function loginUser (req: Request, res: Response) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const body = req.body as Pick<User, "dni" | "password">
    const account = await dealerSchema.findOne({ dni: body.dni });
    if(account){
      if (bcrypt.compareSync(body.password.toString(), account.password.toString())) {
        const token = jwt.sign({ _id: account._id.toString() }, "SECRET_EXAMPLE_KEY", {
          expiresIn: '2 days',
        });
        return res.cookie("access_token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
        }).status(202).json({message: "Account loggin", user: account, token});
      } else return res.status(404).json({message: "Invalid password"});
    } else return res.status(404).json({message: "Account not found", account})
  } catch (error) {
    return res.status(505).json({message: "Invalid body or error"});
  }
}


export async function getUser( req: Request | any, res: Response ) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const auth = req.body?.id;
    if(auth !== null){
      const response = await dealerSchema.findOne({_id: auth});
      return res.status(202).json({ message: "User found", user: response});
    }
    return res.status(202).json({ message: "User not found"});
  } catch (error) {
    return res.status(505).json({ message: "Invalid body or error" });
  }
}