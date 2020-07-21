const fs = require("fs")
const data = require("./data.json")
exports.show = (req, res) => {
    return res.render("petshops", { petshops: data.petshops })
}

exports.post = (req, res) => {
    const keys = Object.keys(req.body)

    for (key of keys) {
        if (req.body[key] == '') {
            return res.send("Please, fill all fields")
        }
    }
    let { name, avatar_url, description, address, uf, city, email, hour } = req.body

    const id = Number(data.petshops.length + 1)

    data.petshops.push({
        id,
        name,
        avatar_url,
        description,
        address,
        uf,
        city,
        email,
        hour
    })
    fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
        if (err) {
            return res.send("White file error... :(")
        }
        return res.redirect("/petshops")
    })
}
