const express = require ("express");
const loginController = require("../controllers/usuarios");

const loginRouter = express.Router();

loginRouter.post("/", loginController.localizarLogin);

module.exports = loginRouter;