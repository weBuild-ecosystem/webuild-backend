import { model, Schema } from "mongoose";
import { User } from "../models/user.model";

const userSchema = new Schema({
  
  dni: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  }
},
  { timestamps: true }
);


export default model<User>("users", userSchema);
