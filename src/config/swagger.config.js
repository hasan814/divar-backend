import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const SwaggerConfig = (app) => {
  const swaggerDocument = swaggerJsDoc({
    swaggerDefinition: {
      openapi: "3.0.0",
      info: {
        title: "Divar-Backend",
        description: "Nodejs course",
        version: "1.0.0",
      },
    },
    apis: [process.cwd() + "/src/modules/**/*.swagger.js"],
  });

  const swagger = swaggerUi.setup(swaggerDocument, {});
  app.use("/", swaggerUi.serve, swagger);
};

export default SwaggerConfig;
