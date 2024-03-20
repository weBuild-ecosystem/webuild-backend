import { model, Schema } from "mongoose";
import { Votations } from "../models/votations.model";

const votationSchema = new Schema({
    image: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    options: {
        type: Array,
        require: true
    },
    timeStart: {
        type: String,
        require: true
    },
    timeEnd: {
        type: String,
        require: true
    },
    votes: {
        type: Array,
        require: true
    },
    from_id: {
        type: String,
        require: true
    },
  
},
  { timestamps: true }
);


export default model<Votations>("votations", votationSchema);
