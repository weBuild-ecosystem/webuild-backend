import express from "express";

import { body, header } from 'express-validator';
import {createUser, getUser, loginUser} from "../services/user.service";
import { authorization } from "../middleware/jwt";

var router = express.Router();

router.post("/create", createUser);
router.post("/get", authorization, getUser);
router.post("/login",
  body('password').isLength({ min: 1 }),
  body('dni'), 
loginUser);
export default router;