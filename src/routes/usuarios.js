const express = require("express");
const verificaToken = require("../middlewares/auth");
const usuarioController = require("../controllers/usuarios");

const usuarioRouter = express.Router();

usuarioRouter.get("/", verificaToken, usuarioController.getAll);
usuarioRouter.post("/", usuarioController.salvarUsuario);

module.exports = usuarioRouter;
