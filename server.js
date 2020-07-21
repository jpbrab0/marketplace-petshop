const porta = 837
const express = require("express")
const nunjucks = require("nunjucks")
const server = express()
const routes = require("./routes")
server.use(express.static("public"))
server.use(express.urlencoded({extended:true}))
server.use(express.json());
server.set("view engine", "njk")
nunjucks.configure("views", {
    express:server,
    autoescape:false,
    noCache:true,
})
server.use(routes)

server.listen(porta, () => {
    console.log(`O servidor está rodando na porta ${porta}!`)
})