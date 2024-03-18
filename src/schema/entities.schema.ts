import { model, Schema } from "mongoose";
import { Entities } from "../models/entities.model";

const entitiesSchema = new Schema({
  
  type: {
    type: Number,
    require: true
  },
  nies: {
    type: Array,
    require: true
  },
  fullname: {
    type: String,
    require: true
  }
},
  { timestamps: true }
);


export default model<Entities>("entities", entitiesSchema);
