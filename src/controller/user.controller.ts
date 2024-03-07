import express from "express";

import { body, header } from 'express-validator';
import {createUser, getUser} from "../services/user.service";

var router = express.Router();

router.post("/create", body('email').isEmail(), body('notifications'), createUser);
router.post("/get", body('id'), getUser);

export default router;