import express from "express";
import { verifyToken } from "../middleware/verifyToken.js";

import { getChats } from "../controllers/chat.controller.js";
import { getChat } from "../controllers/chat.controller.js";
import { addChat } from "../controllers/chat.controller.js";
import { readChat } from "../controllers/chat.controller.js";

const router = express.Router();

router.get("/", verifyToken, getChats);
router.get("/:id", verifyToken, getChat);
router.post("/", verifyToken, addChat);

router.post("/read/:id", verifyToken, readChat);

export default router;
