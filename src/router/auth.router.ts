import express from "express";
import AuthController from "../controllers/auth.controller.js";

const router = express.Router();
// api/auth/..
router.post("/registration", AuthController.registration);
router.post("/login", AuthController.login);

export default router;