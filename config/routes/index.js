const express = require("express");
const router = express.Router();
const car = require("./car");
const user = require("./user");

router.use("/api/v1/car", car);
router.use("/api/v1/user", user);

module.exports = router;
