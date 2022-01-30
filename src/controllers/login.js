const loginServices = require("../services/login");

const usuarios = [];

exports.localizarLogin = async function (request, response) {
  const { email, senha } = request.body;

  const loginEncontrado = await loginServices.localizarLogin (email, senha, usuarios) 

  return response.send(loginEncontrado);
};
