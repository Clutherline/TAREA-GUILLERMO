const express = require ('express');
const bodyParser = require ('body-parser')
const app = express();
const port = process.env.port || 8574; 

//midellware import express
app.use(express.json());

app.get ('/', function (req, res){
    res.send ("esto es una ruta virtual index")
});

app.get ('/lunes', function (req, res){
    res.send (" JAVA-HTML-NODE")
});

app.get ('/martes', function (req, res){
    res.send ("MATEMATICAS")
});

app.get ('/miercoles', function (req, res){
    res.send ("BASES DE DATOS")
});

app.get ('/jueves', function (req, res){
    res.send ("INGLES")
});

app.get ('/viernes', function (req, res){
    res.send ("COMUNICACIONES")
});

app.get ('/login', function (req, res){
    res.send ("<h1> login </h1>")
});

// iniciar el servidor 
app.listen(port,() =>{
    console.log(`servidor corriendo en http://localhost:${port}`)
});