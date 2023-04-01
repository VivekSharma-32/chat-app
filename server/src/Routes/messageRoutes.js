import express from "express";
import {
  addMessageController,
  getMessages,
} from "../Controllers/messageController.js";

const router = express.Router();

router.post("/", addMessageController);
router.get("/:chatId", getMessages);

export default router;
