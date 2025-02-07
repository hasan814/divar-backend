import { connectDB } from "./src/config/db.js";

import express from "express";
import dotenv from "dotenv";

const main = async () => {
  const app = express();

  dotenv.config();
  connectDB();

  app.listen(3000, () => {
    console.log("Server run On:http://localhost:3000");
  });
};

main();
