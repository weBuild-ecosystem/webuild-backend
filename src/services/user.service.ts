import { Request, Response } from "express";
import { validationResult } from "express-validator";
import bcrypt from 'bcrypt';
import jwt, { JwtPayload } from "jsonwebtoken";
import { User } from "../models/user.model";
import user from "../schema/user.schema";
import { ObjectId } from "mongoose";
import entitiesSchema from "../schema/entities.schema";
import userSchema from "../schema/user.schema";

export async function createUser(req: Request | any, res: Response) {
  try {  
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const body = req?.body;
    var response = await entitiesSchema.find({ nies: {$regex: body?.nie, $options: 'i'}});
    if(response !== null){
      var entities: String[] = [];
      response?.map((e) => {
        entities.push(String(e._id));
      });
      const addingUser = new userSchema({
        entities,
        ...body
      });
      addingUser.markModified("users");
      addingUser.save()
      if (addingUser) {
        return res
          .status(202)
          .json({ message: "User registered", user: addingUser});
      }
    }
    return res.status(204).json({ message: "User not registered" });
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
    const account = await userSchema.findOne({ dni: body.dni });
    if(account){
      if (bcrypt.compareSync(body.password.toString(), account.password.toString())) {
        const token = jwt.sign({ _id: account._id.toString() }, "SECRET_EXAMPLE_KEY", {
          expiresIn: '2 days',
        });
        return res.cookie("access_token", token, {
          httpOnly: true,
          
        }).status(202).json({message: "Account loggin", user: account, token});
      } else return res.status(404).json({message: "Invalid password"});
    } else return res.status(404).json({message: "Account not found", account})
  } catch (error) {
    return res.status(505).json({message: "Invalid body or error"});
  }
}


export async function getUser( req: Request | any, res: Response ) {
  try {
    const auth = req._id;
    if(auth !== null){
      const response = await userSchema.findOne({_id: auth});
      return res.status(202).json({ message: "User found", user: response});
    }
    return res.status(202).json({ message: "User not found"});
  } catch (error) {
    return res.status(505).json({ message: "Invalid body or error" });
  }
}