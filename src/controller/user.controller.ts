import express from "express";

import { body, header } from 'express-validator';
import {createUser, getUser, loginUser} from "../services/user.service";

var router = express.Router();

router.post("/create", body('dni').isEmail(), body('password'), createUser);
router.post("/get", body('id'), getUser);
router.post("/login",
  body('password').isLength({ min: 5 }),
  body('dni').isEmail(), 
loginUser);
export default router;