const express = require("express"); //imports the express package

const userRoutes = require("./users/routing");

const server = express(); // creates the server
// server.use("/", (req, res) => res.send("Hello from the server"));
server.use("/users", userRoutes);

server.listen(3000, () => console.log("API running on port 3000"));
