import express from 'express';
import { registerUser } from "../controllers/user.controllers.js"

const router = express();

router.route("/register").post(registerUser)

export default router