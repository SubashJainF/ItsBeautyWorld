/**
 * Created by subash on 3/2/17.
 */
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var morgan = require('morgan');
var fs = require('fs');
var path = require('path');

app.use(express.static(__dirname + '/public/client'));

app.get('/',function(req,res){
    res.sendfile(__dirname+'/public/client/index.html');
})

app.listen(4000,function(){
    console.log("Welcome to MySite")
})

exports = module.exports = app;