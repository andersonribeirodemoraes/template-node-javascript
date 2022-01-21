const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Routes = require("./routes");

const app = express();

app.use(express.json());
app.use(Routes);

app.get("/", function (request, response) {
  return response.send("Hello World");
});

app.post("/login", async function (request, response) {
  const { email, senha } = request.body;

  const usuarioEncontrado = usuarios.find((usuario) => {
    if (usuario.email == email) return usuario;
  });

  if (!usuarioEncontrado)
    return response.status(400).send("Usuário não encontrado");

  const senhaCerta = await bcrypt.compare(senha, usuarioEncontrado.senha);

  if (!senhaCerta) return response.status(400).send("Senha incorreta");

  const token = jwt.sign({ usuario_id: usuarioEncontrado.id }, "curso", {
    expiresIn: "1h",
  });

  usuarioEncontrado.token = token;

  return response.send(usuarioEncontrado);
});

app.listen(3000, function () {
  console.log("Rodando na porta 3000");
});
