exports.salvar = (usuario, usuarios) => {
  usuarios.push(usuario);

  return `Cadastro salvo com sucesso. Bem Vindo ${usuario.nome}!`;
};
