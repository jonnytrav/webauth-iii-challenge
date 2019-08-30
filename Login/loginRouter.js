const express = require("express");
const router = express.Router();
const DB = require("./loginHelper.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const secret = require("../secret.js");

// **** BELOW IMPLEMENTED IN USERS ROUTER ****
// router.get("/", async (req, res) => {
//   try {
//     const users = await DB.getUsers();
//     res.status(200).json(users);
//   } catch (err) {
//     res.status(400).json({ success: false, err });
//   }
// });

router.post("/", (req, res) => {
  let { username, password } = req.body;
  DB.findUser(username).then(user => {
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = generateToken(user);
      console.log(token);
      res.status(200).json({ message: `Welcome, ${user.username}!`, token });
    } else {
      res
        .status(500)
        .json({ success: false, message: "User does not exist..." });
    }
  });
});

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };
  const options = {
    expiresIn: "1h"
  };

  return jwt.sign(payload, secret.jwtSecret, options);
}

// router.get("/user", async (req, res) => {
//   const userInfo = req.body;
//   try {
//     const user = await DB.findUser(userInfo.username);
//     res.status(200).json(user);
//   } catch (err) {
//     res.status(500).json(err.message);
//   }
// });

module.exports = router;
