require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const swaggerUi = require("swagger-ui-express");

const errorHandler = require("../middlewares/error");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

const swaggerDocument = require("../doc/swagger.json");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use(require("../routes"));

app.use(errorHandler);

module.exports = app;
