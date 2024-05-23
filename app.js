const express = require('express')
const app = express()
const data = require("./travels.json")

const PORT = 4001

app.set('view engine', 'ejs')

app.set('views', __dirname + '/views')

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {

    let menu = ""
    data.forEach((viaje) => {
        menu += `<a href="${viaje.id}">${viaje.lugar}</a>`
    })


    let title = ""
    let h2 = ""
    let descripcion = ""
    let precio = ""
    let img = ""

    data.forEach((viaje) => {
        if (viaje.lugar == "🏠") {
            title = viaje.lugar
            h2 = viaje.nombre
            descripcion = viaje.descripcion
            precio = viaje.precio
            img = viaje.img
            id = viaje.id
            lugar = viaje.lugar
        }
    })
    // res.sendFile(`index.html`, {root: __dirname + '/public'})
    res.render('index', {titulo: title, subtitulo: h2, descripcion: descripcion, precio: precio, imagen: img, menu: menu})
})

app.get('/maldivas', (req, res) => {
    let menu = ""
    data.forEach((viaje) => {
        menu += `<a href="${viaje.id}">${viaje.lugar}</a>`
    })

    let title = ""
    let h2 = ""
    let descripcion = ""
    let precio = ""
    let img = ""

    data.forEach((viaje) => {
        if (viaje.lugar == "Maldivas") {
            title = viaje.lugar
            h2 = viaje.nombre
            descripcion = viaje.descripcion
            precio = viaje.precio +"€"
            img = viaje.img
            id = viaje.id
            lugar = viaje.lugar
        }
    })
    // res.sendFile(`index.html`, {root: __dirname + '/public'})
    res.render('index', {titulo: title, subtitulo: h2, descripcion: descripcion, precio: precio, imagen: img, menu: menu})
})


app.get('/egipto', (req, res) => {
    let menu = ""
    data.forEach((viaje) => {
        menu += `<a href="${viaje.id}">${viaje.lugar}</a>`
    })

    let title = ""
    let h2 = ""
    let descripcion = ""
    let precio = ""
    let img = ""

    data.forEach((viaje) => {
        if (viaje.lugar == "Egipto") {
            title = viaje.lugar
            h2 = viaje.nombre
            descripcion = viaje.descripcion
            precio = viaje.precio +"€"
            img = viaje.img
            id = viaje.id
            lugar = viaje.lugar
        }
    })
    // res.sendFile(`index.html`, {root: __dirname + '/public'})
    res.render('index', {titulo: title, subtitulo: h2, descripcion: descripcion, precio: precio, imagen: img, menu: menu})
})

app.get('/nuevayork', (req, res) => {
    let menu = ""
    data.forEach((viaje) => {
        menu += `<a href="${viaje.id}">${viaje.lugar}</a>`
    })

    let title = ""
    let h2 = ""
    let descripcion = ""
    let precio = ""
    let img = ""

    data.forEach((viaje) => {
        if (viaje.lugar == "Nueva York") {
            title = viaje.lugar
            h2 = viaje.nombre
            descripcion = viaje.descripcion
            precio = viaje.precio +"€"
            img = viaje.img
            id = viaje.id
            lugar = viaje.lugar
        }
    })
    // res.sendFile(`index.html`, {root: __dirname + '/public'})
    res.render('index', {titulo: title, subtitulo: h2, descripcion: descripcion, precio: precio, imagen: img, menu: menu})
})


app.get('/venecia', (req, res) => {
    let menu = ""
    data.forEach((viaje) => {
        menu += `<a href="${viaje.id}">${viaje.lugar}</a>`
    })

    let title = ""
    let h2 = ""
    let descripcion = ""
    let precio = ""
    let img = ""

    data.forEach((viaje) => {
        if (viaje.lugar == "Venecia") {
            title = viaje.lugar
            h2 = viaje.nombre
            descripcion = viaje.descripcion
            precio = viaje.precio +"€"
            img = viaje.img
            id = viaje.id
            lugar = viaje.lugar
        }
    })
    // res.sendFile(`index.html`, {root: __dirname + '/public'})
    res.render('index', {titulo: title, subtitulo: h2, descripcion: descripcion, precio: precio, imagen: img, menu: menu})
})


app.get('/vietnam', (req, res) => {
    let menu = ""
    data.forEach((viaje) => {
        menu += `<a href="${viaje.id}">${viaje.lugar}</a>`
    })

    let title = ""
    let h2 = ""
    let descripcion = ""
    let precio = ""
    let img = ""

    data.forEach((viaje) => {
        if (viaje.lugar == "Vietnam") {
            title = viaje.lugar
            h2 = viaje.nombre
            descripcion = viaje.descripcion
            precio = viaje.precio +"€"
            img = viaje.img
            id = viaje.id
            lugar = viaje.lugar
        }
    })
    // res.sendFile(`index.html`, {root: __dirname + '/public'})
    res.render('index', {titulo: title, subtitulo: h2, descripcion: descripcion, precio: precio, imagen: img, menu: menu})
})

app.listen(PORT, () => {
    console.log(`Servidor en http://localhost:${PORT}`)
})