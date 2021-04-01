var express = require('express');
var app = express();

app.get('/',c_inicio);
app.get('/clientes',c_clientes);
app.get('/productos',c_productos);

function c_inicio(req,res){
    res.send('<h1>Express Inicio</h1>')
}

function c_clientes(req,res){
    res.send('<h1>CLIENTES</h1><br><h3>Luisa Perez</h3><br><h3>Juan Paredes</h3><br><h3>Nicole Cardenas</h3>')
}
function c_productos(req,res){
    res.send('<h1>PRODUCTOS</h1><br><h3>Botas</h3><br><h3>Zapatillas</h3><br><h3>Sandalias</h3>')
}

function c_server(req,res){
   console.log('port:5000');
}

var server=app.listen(5000,c_server);