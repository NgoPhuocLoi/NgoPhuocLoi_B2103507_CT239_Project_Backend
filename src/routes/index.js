const router = require("express").Router();

router.use("/access", require("./access.route"));
router.use("/user", require("./user.route"));

module.exports = router;
