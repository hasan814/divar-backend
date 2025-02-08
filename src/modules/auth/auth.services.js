import { AuthMessage } from "./auth.message.js";
import { randomInt } from "crypto";

import createHttpError from "http-errors";
import autoBind from "auto-bind";
import User from "../user/user.model.js";

class AuthService {
  #model;
  constructor() {
    autoBind(this);
    this.#model = User;
  }
  async sendOTP(mobile) {
    const user = await this.#model.findOne({ mobile });
    const now = new Date().getTime();
    const otp = {
      code: randomInt(10000, 99999),
      expiresIn: (expiresIn = now + 1000 * 60 * 2),
    };
    if (!user) {
      const newUser = await this.#model.create({ mobile, otp });
      return newUser;
    }
    if (user.otp && user.otp.expiresIn > now)
      throw new createHttpError.BadRequest(AuthMessage.OtpCodeNotExpired);
    user.otp = otp;
    await user.save();
    return user;
  }
  async checkOTP(mobile, code) {}
  async logout() {}
  async checkExistByMobile(mobile) {
    const user = await this.#model.findOne({ mobile });
    if (!user) throw new createHttpError.NotFound(AuthMessage.NotFound);
    return user;
  }
}

const authService = new AuthService();
export default authService;
