const express = require("express");
const router = express.Router();
const controllers = require("../../app/controllers");
const auth = require("../../app/middlewares/auth");
const role = require("../../app/middlewares/role");

router
  .route("/")
  .get(
    auth,
    role(["superadmin", "admin"]),
    controllers.api.v1.carController.getAll
  )
  .post(
    auth,
    role(["superadmin", "admin"]),
    controllers.api.v1.carController.create
  );

router.get("/list", controllers.api.v1.carController.get);

router
  .route("/:carId")
  .put(
    auth,
    role(["superadmin", "admin"]),
    controllers.api.v1.carController.update
  )
  .delete(
    auth,
    role(["superadmin", "admin"]),
    controllers.api.v1.carController.remove
  );

module.exports = router;
