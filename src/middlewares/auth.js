const jwt = require("jsonwebtoken");

const verificaToken = (request, response, next) => {
  console.log("Passou no Middleware");

  if (!request.headers.authorization)
    return response.status(403).send("O Token é necessário");

  const [, token] = request.headers.authorization.split(" ");

  console.log(token);

  if (!token) return response.status(403).send("O Token é necessário");

  try {
    const decoded = jwt.verify(token, "curso");

    request.usuario_id = decoded.usuario_id;
  } catch (err) {
    return response.status(403).send("O Token é inválido");
  }

  next();
};

module.exports = verificaToken;
