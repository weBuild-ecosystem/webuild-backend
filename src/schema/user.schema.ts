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
  },
  email: {
    type: String,
    require: true
  },
  fullname: {
    type: String,
    require: true
  },
  phone: {
    type: String,
    require: true
  },
  entities: {
    type: Array,
    require: true
  }
},
  { timestamps: true }
);


export default model<User>("users", userSchema);
