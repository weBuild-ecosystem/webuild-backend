import { model, Schema } from "mongoose";
import { User } from "../models/user";

const userSchema = new Schema({
  
  email: {
    type: String,
    require: true
  },
  notifications: {
    type: Object,
    require: true
  }
},
  { timestamps: true }
);


export default model<User>("users", userSchema);
