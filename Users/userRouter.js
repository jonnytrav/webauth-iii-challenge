const express = require("express");
const router = express.Router();
const DB = require("./userHelpers.js");
const verify = require("../middleware");

router.get("/", verify, async (req, res) => {
  try {
    const users = await DB.getUsers();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
