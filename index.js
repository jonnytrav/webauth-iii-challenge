const express = require("express");
const server = express();
const loginRouter = require("./Login/loginRouter.js");
const signupRouter = require("./Registration/registrationRouter.js");
const userRouter = require("./Users/userRouter.js");

server.use(express.json());
server.use("/api/register", signupRouter);
server.use("/api/login", loginRouter);
server.use("/api/users", userRouter);

const PORT = 4000;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
