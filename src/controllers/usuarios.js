const usuarioServices = require("../services/usuarios");

const usuarios = [];

exports.getAll = function (request, response) {
  return response.send(usuarios);
};

exports.salvarUsuario = async function (request, response) {
  const { nome, email, senha } = request.body;

  const usuarioSalvo = await usuarioServices.salvar(
    nome,
    email,
    senha,
    usuarios
  );

  return response.json(usuarioSalvo);
};
