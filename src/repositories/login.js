exports.salvar = (usuario, logins) => {
    logins.push(usuario);
  
    return `Login salvo com sucesso. Bem Vindo ${usuario.nome}!`;
  };
  