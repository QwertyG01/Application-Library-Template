var express = require("express");
var server = express();

server.use("/", express.static("dist"));
//server.use(express.static(__dirname));

server.listen(3000);

console.log("Server is listening on port 3000");
