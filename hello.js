const express = require("express")

const app = express()

app.get("/", function(request, response){
    return response.send("Hello World")
})

app.get("/bruno", function(request, response){
    return response.send("Rota para o aluno Bruno Mendes")
})

app.get("/anderson", function(request, response){
    return response.send("Rota para Anderson")
})

app.listen(3000, function(){
    console.log("Rodando na porta 3000")
})