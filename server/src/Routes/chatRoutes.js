import express from "express";
import {
  createChatController,
  findChats,
  userChats,
} from "../Controllers/chatsController.js";

const router = express.Router();

router.post("/", createChatController);
router.get("/:userId", userChats);
router.get("/find/:firstId/:secondId", findChats);

export default router;
