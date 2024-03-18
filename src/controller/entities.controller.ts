import express from "express";

import { body, header } from 'express-validator';
import {createEntitie, getEntitie, getMyEntities} from "../services/entities.service";

var router = express.Router();

router.post("/create", body('type').isNumeric(),body('nies'), body('fullname'), createEntitie);
router.post("/get", body('id'), getEntitie);
router.post("/getmyentities", body('id'), getMyEntities);

export default router;