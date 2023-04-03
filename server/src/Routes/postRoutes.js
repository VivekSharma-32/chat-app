import express from "express";
import {
  createNewPost,
  deletePost,
  getPost,
  getTimelinePosts,
  likePost,
  updatePost,
} from "../Controllers/postController.js";

const router = express.Router();

router.post("/", createNewPost);
router.get("/:id", getPost);
router.put("/:id", updatePost);
router.delete("/:id", deletePost);
router.put("/:id/like", likePost);
router.get("/:id/timeline", getTimelinePosts);

export default router;
