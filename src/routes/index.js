const db = require("../models");

const router = require("express").Router();

router.get("/", async (req, res) => {
  await db.User.create({ firstName: "Jane", lastName: "Doe" });
  res.send("Hello");
});

module.exports = router;
