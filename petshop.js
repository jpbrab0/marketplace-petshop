const fs = require("fs")
const data = require("./data.json")
exports.show = (req, res) => {
    return res.render("petshops", { petshops: data.petshops })
}