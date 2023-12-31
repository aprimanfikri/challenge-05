const express = require("express");
const router = express.Router();
const { car } = require("../controllers");
const auth = require("../middlewares/auth");
const role = require("../middlewares/role");
const upload = require("../middlewares/upload");

router
  .route("/")
  .get(auth, role(["superadmin", "admin"]), car.getAll)
  .post(
    auth,
    role(["superadmin", "admin"]),
    upload.single("image"),
    car.create
  );

router.get("/list", car.get);

router
  .route("/:carId")
  .put(auth, role(["superadmin", "admin"]), upload.single("image"), car.update)
  .delete(auth, role(["superadmin", "admin"]), car.remove);

module.exports = router;
