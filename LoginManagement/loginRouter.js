const express = require("express");
const router = express.Router();
const DB = require("./loginHelper.js");

router.get("/", async (req, res) => {
  try {
    const users = await DB.getUsers();
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json({ success: false, err });
  }
});

module.exports = router;
