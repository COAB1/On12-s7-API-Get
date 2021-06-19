//npm init -y
//npm install
//npm install express
//npm start
//npm i nodemon
//trocar o node pelo nodemon no package json 'start'


const { response } = require("express")
const express = require("express")

const app = express()

app.get("/", (request,response) => {
  console.log('uma requisição foi realizada')
  response.status(200).json('Salvo! <3')
})

app.get("/juju", (request,response) => {
  console.log('requisição juju foi realizada')
  response.status(200).json([
    {
      "nome":"carol",
      "idade":"25",
    },
    {
      "nome":"jade",
      "idade":"36",
    }
  ])
})

app.listen(8000,()=> {
  console.log('meu primeiro servidor rodando na porta 8000')
})