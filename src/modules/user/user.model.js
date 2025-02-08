import { Schema, model } from "mongoose";

const OTPSchema = new Schema({
  code: { type: String, required: false, default: undefined },
  expiresIn: { type: Number, required: false, default: 0 },
});

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    mobile: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    otp: { type: OTPSchema },
    verifiedMobile: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

export default User;
