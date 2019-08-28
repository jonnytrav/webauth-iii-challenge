const express = require("express");
const server = express();
const loginRouter = require("./LoginManagement/loginRouter.js");
const signupRouter = require("./Registration/registrationRouter.js");

server.use(express.json());
server.use("/api/signup", signupRouter);
server.use("/api/login", loginRouter);

const PORT = 4000;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
