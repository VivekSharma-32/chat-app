import express from "express";
import { loginUser, registerUser } from "../Controllers/authController.js";

const router = express.Router();

//routes
router.post("/register", registerUser);
router.post("/login", loginUser);

export default router;
