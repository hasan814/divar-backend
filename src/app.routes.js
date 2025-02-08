import { authRouter } from "./modules/auth/auth.routes.js";
import { Router } from "express";

const mainRouter = Router();
mainRouter.use("/auth", authRouter);

export default mainRouter;
