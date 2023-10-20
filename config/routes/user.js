const express = require("express");
const router = express.Router();
const controllers = require("../../app/controllers");
const auth = require("../../app/middlewares/auth");
const role = require("../../app/middlewares/role");

router.post("/register", controllers.api.v1.userController.register);
router.post("/login", controllers.api.v1.userController.login);
router.get("/check", auth, controllers.api.v1.userController.check);
router.post(
  "/add-admin",
  auth,
  role(["superadmin"]),
  controllers.api.v1.userController.addAdmin
);

module.exports = router;
