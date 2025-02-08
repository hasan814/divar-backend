import { AuthMessage } from "./auth.message.js";

import authService from "./auth.services.js";
import autoBind from "auto-bind";

class AuthController {
  #service;
  constructor() {
    autoBind(this);
    this.#service = authService;
  }
  async sendOTP(req, res, next) {
    try {
      const { mobile } = req.body;
      await this.#service.sendOTP(mobile);
      return { message: AuthMessage.SendOtpSuccessfully };
    } catch (error) {
      next(error);
    }
  }
  async checkOTP(req, res, next) {
    try {
    } catch (error) {
      next(error);
    }
  }

  async logout(req, res, next) {
    try {
    } catch (error) {
      next(error);
    }
  }
}

const authController = new AuthController();
export default authController;
