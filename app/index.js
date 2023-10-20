require("dotenv").config();
const express = require("express");
const swaggerUi = require("swagger-ui-express");

const errorHandler = require("./middlewares/error");

const app = express();

app.use(express.json());

const swaggerDocument = require("./doc/swagger.json");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(require("../config/routes"));

app.use(errorHandler);

module.exports = app;
