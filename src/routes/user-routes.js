import express from "express";

import { registerUser, signInUser } from "../controllers/user-controller.js";

const router = express.Router();

router.post("/registerUser", registerUser);

router.post("/signInUser", signInUser);

export default router;
