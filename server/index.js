const express = require('express');
const bodyParser  = require('body-parser');
const morgan = require('morgan');
const expressServer = express();
const router = require('routes');
const http = require('http');
const mongoose =require('mongoose');

mongoose.connect("mongodb+srv://nella:nella@cluster0-rtwgb.mongodb.net/test?retryWrites=true&w=majority", {useNewUrlParser:true});
mongoose.connection
    .once('open', () => console.log("connecté a Mongo"))
    .on('erreur', error => console.log("Erreur de coneexion ", error));

expressServer.use(morgan('combined'));
expressServer.use(bodyParser.json({type: '*/'}));

const port = 3090;
const server = http.createServer(expressServer);
router(expressServer);
server.listen(port);

console.log("le serveur ecoute sur le port: ", port);
