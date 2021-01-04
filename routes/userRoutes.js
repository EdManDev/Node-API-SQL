import express from "express";
const router = express.Router();

import { read } from "../controllers/userController.js";

router.get("/retreive", read);

export default router;
