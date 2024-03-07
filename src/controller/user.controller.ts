import express from "express";

import { body } from 'express-validator';
import {createUser} from "../services/user.service";

var router = express.Router();

router.post("/create", body('email').isEmail(), body('notifications'), createUser);

export default router;