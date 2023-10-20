const express = require("express");
const router = express.Router();
const { user } = require("../controllers");
const auth = require("../middlewares/auth");
const role = require("../middlewares/role");

router.post("/register", user.register);
router.post("/login", user.login);
router.get("/check", auth, user.check);
router.post("/add-admin", auth, role(["superadmin"]), user.addAdmin);

module.exports = router;
