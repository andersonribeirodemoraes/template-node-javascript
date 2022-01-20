const express = require("express")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const verificaToken = require("./auth")

const app = express()

app.use(express.json())

app.get("/", function(request, response){
    return response.send("Hello World")
})

const usuarios = [];

app.get("/usuario", verificaToken, function(request, response){
    return response.send(usuarios)
})

app.post("/usuario", async function(request, response){
    const { nome, email, senha } = request.body

    const usuarioEncontrado = usuarios.find(usuario => {
        if(usuario.email == email) return usuario
    })

    if(usuarioEncontrado) return response.status(400).send("Já tem um usuário com esse email")

    const senhaCriptografada = await bcrypt.hash(senha, 10)

    const usuario_id = usuarios.length + 1

    const token = jwt.sign({usuario_id: usuario_id}, "curso", {
        expiresIn: "1h"
    })

    const usuario = {
        id: usuario_id,
        nome,
        email,
        senha: senhaCriptografada,
        token
    }

    usuarios.push(usuario)
    
    return response.send(usuario)
})

app.post("/login", async function(request, response){
    const { email, senha } = request.body

    const usuarioEncontrado = usuarios.find(usuario => {
        if(usuario.email == email) return usuario
    })

    if(!usuarioEncontrado) return response.status(400).send("Usuário não encontrado")

    const senhaCerta = await bcrypt.compare(senha, usuarioEncontrado.senha)

    if(!senhaCerta) return response.status(400).send("Senha incorreta")

    const token = jwt.sign({usuario_id: usuarioEncontrado.id}, "curso", {
        expiresIn: "1h"
    })

    usuarioEncontrado.token = token    

    return response.send(usuarioEncontrado)
})

app.listen(3000, function(){
    console.log("Rodando na porta 3000")
})