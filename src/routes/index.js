const express = require("express");
const usuarioRouter = require("./usuarios");

const Routes = express.Router();

Routes.use("/usuario", usuarioRouter);

module.exports = Routes;
