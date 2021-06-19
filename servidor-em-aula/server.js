
const { response } = require("express")
const express = require("express")

const app = express()

const filmes = require("./data/ghibli.json")

app.get("/", (request,response) => {
  response.status(200).send({"mensagem": "Salvo! <3"})
})

app.get("/filmes", (request,response) => {
  response.status(200).send(filmes)
})

app.get("/filmes/:id", (request,response) => {
  const idRequisitado = request.params.id
  console.log(request.params)
  response.status(200).send(filmes.find(filmes => filmes.id == idRequisitado))
})

app.listen(3100,()=> {
  console.log('servidor rodando na porta 3100')
})