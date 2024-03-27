import express from "express";

import { body, header } from 'express-validator';
import { addVoteVotation, createVotation, getVotations } from "../services/votations.service";
import { authorization } from "../middleware/jwt";

var router = express.Router();

router.post("/create", createVotation);
router.post("/get", body('from_id'), getVotations);
router.post("/updatevotes", body('id'), body('vote'), addVoteVotation);

export default router;