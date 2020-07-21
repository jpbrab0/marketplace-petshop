const express = require("express")
const routes = express.Router()
const petshops = require("./petshop")
const fs = require("fs")
const data = require("./data.json")

routes.get("/", (req, res) => {
    return res.redirect("/home")
})
routes.get("/home", (req, res) => {
    return res.render("home")
})
routes.get("/petshops", petshops.show)
routes.get("/petshops/:id", (req, res) => {
    const { id } = req.params

    const foundPetshop = data.petshops.find( (petshops) => {
        return petshops.id == id
    })
    const petshop = {
        ...foundPetshop,
        
    }
    if(!foundPetshop) return res.send("Petshop not found")

    return res.render("show", { petshop })
})
routes.get("/cadastro", (req, res) => {
    return res.render("cadastro")
})
routes.get("/contato/:id", (req, res) => {
    const { id } = req.params

    const foundPetshop = data.petshops.find( (petshops) => {
        return petshops.id == id
    })
    const petshop = {
        ...foundPetshop,
        
    }
    if(!foundPetshop) return res.send("Petshop not found")

    return res.render("contato", { petshop })
})
routes.post("/petshops", petshops.post)

module.exports = routes