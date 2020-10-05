"use strict";
exports.__esModule = true;
var jsonServer = require("json-server");
var https = require("http");
var server = jsonServer.create();
var router = jsonServer.router('db.json');
var middlewares = jsonServer.defaults();
// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);
// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);
// Use default router
server.use(router);
// var options = {
//     // cert: fs.readFileSync('./../keys/cert.pem'),
//     // key: fs.readFileSync('./../keys/key.pem')
//     cert: fs.readFileSync('./backend/keys/cert.pem'),
//     key: fs.readFileSync('./backend/keys/key.pem')
// };
const port = process.env.PORT || 1337;
https.createServer(server).listen(port, function () {
    console.log('JSON Server is running on https://localhost:3001');
});
// server.listen(3000, () => {
//   console.log('JSON Server is running')
// });
