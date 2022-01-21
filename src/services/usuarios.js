const usuarioRepositories = require("../repositories/usuarios");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.salvar = async (nome, email, senha, usuarios) => {
  const usuarioEncontrado = usuarios.find((usuario) => {
    if (usuario.email == email) return usuario;
  });

  if (usuarioEncontrado) return "Já tem um usuário com esse email";

  const senhaCriptografada = await bcrypt.hash(senha, 10);

  const usuario_id = usuarios.length + 1;

  const token = jwt.sign({ usuario_id: usuario_id }, "curso", {
    expiresIn: "1h",
  });

  const usuario = {
    id: usuario_id,
    nome,
    email,
    senha: senhaCriptografada,
    token,
  };

  return usuarioRepositories.salvar(usuario, usuarios);
};
