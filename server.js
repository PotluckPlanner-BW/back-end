const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const dotenv = require("dotenv");
const restricted = require("./middleware/restricted");
const potluckRouter = require("./potlucks/router");
const userRouter = require("./users/routing");
dotenv.config();
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.listen(3000, function () {
  console.log("server is running on port 3000");
});
server.use("/potlucks", potluckRouter);
server.use("/users", userRouter);

module.exports = server;
