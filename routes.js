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
routes.get("/cadastro", (req, res) => {
    return res.render("cadastro")
})
routes.post("/home", (req, res) => {
    const keys = Object.keys(req.body)
    //req.body.objeto
    for(key of keys){
        if(req.body[key] == '')
            return res.send("Please, fill all fields!!! >:(")
    }

    let {name, avatar_url, uf, city, description, email} = req.body

    const id = Number(data.petshops.length + 1)


    data.petshops.push({
        id,
        name,
        avatar_url,
        uf,
        city,
        description,
        email,
    })
    fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
        if(err){
            return res.send("White file error")
        }
        return res.redirect("/home")
    })
})

module.exports = routes