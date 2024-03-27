import { Request, Response } from "express";
import { validationResult } from "express-validator";
import votationSchema from "../schema/votations.schema";

export function createVotation(req: Request | any, res: Response) {
  try {  
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const body = req?.body;
    const addingVotation = new votationSchema({
      ...body
    });
    addingVotation.markModified("votations");
    addingVotation.save()
    if (addingVotation) {
      return res
        .status(202)
        .json({ message: "Votation registered", votation: addingVotation});
    } else return res.status(204).json({ message: "Votation not registered" });
  } catch (errors) {
    return res.status(505).json({ message: "Invalid body or error" });
  }
}
export async function getVotations( req: Request | any, res: Response ) {
  try {
    const auth = req.body?.from_id;
    if(auth !== null){
      const response = await votationSchema.find({from_id: auth});
      return res.status(202).json({ message: "Votation found", votations: response});
    }
    return res.status(202).json({ message: "Votation not found"});
  } catch (error) {
    return res.status(505).json({ message: "Invalid body or error" });
  }
}

export async function addVoteVotation( req: Request | any, res: Response ) {
  try {
    const auth = req.body?.id;
    const auth2 = req.body?.from_id;
    const votes = req.body?.vote;
    if(auth !== null && votes !== null && auth2 !== null){
      const response: any = await votationSchema.findOne({_id: auth});
      const responseUpdate = await votationSchema.findOneAndUpdate({_id: auth}, {votes : [...response?.votes, {from_id: auth2, value: votes}]} )
      console.log(responseUpdate);

      if(responseUpdate) return res.status(202).json({ message: "Votation update", votation: response});
    }
    return res.status(202).json({ message: "Votation not update"});
  } catch (error) {
    return res.status(505).json({ message: "Invalid body or error" });
  }
}