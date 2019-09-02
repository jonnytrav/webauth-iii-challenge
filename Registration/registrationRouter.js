const express = require("express");
const router = express.Router();
const DB = require("./registrationHelpers.js");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  let userInfo = req.body;

  const hashPass = bcrypt.hashSync(userInfo.password, 10);

  userInfo.password = hashPass;

  try {
    const newUser = await DB.createUser(userInfo);
    res.status(201).json(newUser);
  } catch (err) {
    console.error(err);
    res.status(500).json(err.message);
  }
});

//   const user = req.body;
//   try {
//     const newUser = await DB.createUser(user);
//     res.status(201).json(newUser);
//   } catch (err) {
//     res.status(400).json(err);

module.exports = router;
