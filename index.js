const express = require("express");
const path = require("path");

const server = express();

server.use(express.static(path.join(__dirname, "public")));

server.get("/", (req, res, next) => {
  res.status(200).sendFile("index.html");
});

const { PORT = 8000 } = process.env;
server.listen(PORT, (error) => {
  if (error) {
    console.log(error.message);
  } else {
    console.log("server is running on port " + PORT);
  }
});
