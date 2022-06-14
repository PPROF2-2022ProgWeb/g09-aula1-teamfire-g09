const express = require('express')
const sequelize = require('sequelize')
const app = express()

var initModels = require("./models/init-models");

//ss 


//models.registro.findAll({ where: { nombre: "" } }).then(console.log(res));
/*
const jane = User.build({ name: "Jane" });
console.log(jane instanceof User); // true
console.log(jane.name); */ // "Jane"
//alta de usuario
app.post('/crearregistro', async(req, res) => {
        const creado = await initModels.registro.create(req.body)

        await creado.reload();
        console.log(creado.nombre);
    })
    //------
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
})