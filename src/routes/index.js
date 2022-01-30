const express = require("express");
const usuarioRouter = require("./usuarios");
const loginRouter = require("./login");

const Routes = express.Router();

Routes.use("/usuario", usuarioRouter);
Routes.use("/login", loginRouter);

module.exports = Routes;
