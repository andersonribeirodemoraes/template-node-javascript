const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.localizarLogin = async (email, senha, usuarios) => { 
    const usuarioEncontrado = usuarios.find((usuario) => {
      if (usuario.email == email) return usuario;
    });
  
    if (!usuarioEncontrado)
      return "Usuário não encontrado";
  
    const senhaCerta = await bcrypt.compare(senha, usuarioEncontrado.senha);
  
    if (!senhaCerta) return "Senha incorreta";
  
    const token = jwt.sign({ usuario_id: usuarioEncontrado.id }, "curso", {
      expiresIn: "1h",
    });
  
    usuarioEncontrado.token = token;
      
    return usuarioEncontrado;
  };