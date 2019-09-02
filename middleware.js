const jwt = require("jsonwebtoken");
const secret = require("./secret.js");

function verify(req, res, next) {
  const token = req.headers.authorization;
  //   console.log(req.headers.authorization);
  jwt.verify(token, secret.jwtSecret, (err, decodedToken) => {
    if (err) {
      // console.error(err.message);
      res
        .status(401)
        .json({ error: err.message, message: "You shall not pass!" });
    } else {
      req.decodedToken = decodedToken;
      next();
    }
  });
}

module.exports = verify;
