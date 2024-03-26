import { Request, Response } from "express";
import { validationResult } from "express-validator";
import entitiesSchema from "../schema/entities.schema";
import { Entities } from "../models/entities.model";

export function createEntitie(req: Request | any, res: Response) {
  try {  
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const body = req?.body;
    const addingEntitie = new entitiesSchema({
      ...body
    });
    addingEntitie.markModified("entities");
    addingEntitie.save()
    if (addingEntitie) {
      return res
        .status(202)
        .json({ message: "Entitie registered", entitie: addingEntitie});
    } else return res.status(204).json({ message: "Entitie not registered" });
  } catch (errors) {
    return res.status(505).json({ message: "Invalid body or error" });
  }
}
export async function getEntitie( req: Request | any, res: Response ) {
  try {
    const auth = req.body?._id;
    if(auth !== null){
      const response = await entitiesSchema.findOne({_id: auth});
      return res.status(202).json({ message: "Entitie found", entitie: response});
    }
    return res.status(202).json({ message: "Entitie not found"});
  } catch (error) {
    return res.status(505).json({ message: "Invalid body or error" });
  }
}

export async function getMyEntities( req: Request | any, res: Response ) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    
    const auth = req.body?.entities;
    if(auth?.length > 0){
      var entities: Entities[] = [];
      auth?.map(async (e) => {
        const response: any = await entitiesSchema.findOne({_id: e});
        if(response !== null){
          entities.push(response);
        }
      })
      return res.status(202).json({ message: "Entitites found", entities});
      
    }
    return res.status(202).json({ message: "Entitie not found"});
  } catch (error) {
    return res.status(505).json({ message: "Invalid body or error" });
  }
}