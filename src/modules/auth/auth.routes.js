import { Router } from "express";

import authController from "./auth.controller";

const router = Router();

router.post("/send-otp", authController.sendOTP);
router.post("/check-otp", authController.checkOTP);

export { router as authRouter };
