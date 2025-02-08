import { connectDB } from "./src/config/db.js";

import SwaggerConfig from "./src/config/swagger.config.js";
import mainRouter from "./src/app.routes.js";
import express from "express";
import dotenv from "dotenv";
import { NotFoundHandler } from "./src/common/exception/not-found.handler.js";
import { AllExceptionHandler } from "./src/common/exception/all-exception.handler.js";

const main = async () => {
  const app = express();

  dotenv.config();
  connectDB();
  SwaggerConfig(app);

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(mainRouter);

  NotFoundHandler(app);
  AllExceptionHandler(app);

  app.listen(3000, () => {
    console.log("Server run On:http://localhost:3000");
  });
};

main();
