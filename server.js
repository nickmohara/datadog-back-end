import app from './app';
// const app = require('./app');

const port = process.env.PORT || '3001'; app.listen(port);

console.log(`Listening on port ${port}`);
//
// var express = require("express");
// var app = express();
//
// app.get("/url", (req, res, next) => {
//  res.json(["Tony","Lisa","Michael","Ginger","Food"]);
// });
//
// app.listen(3001, () => {
//  console.log("Server running on port 3001");
// });
