require('babel-register');
require("node-jsx").install({
    extension: '.jsx'
    , harmony: true
});
var express = require('express');
var app = express();

var path = require('path');

app.set('views', path.join(__dirname, 'layouts'));
app.set('view engine', 'hbs');

app.use(express.static(path.join(__dirname, 'client')));

app.use('/', require("./routes/viewRoute.js"));

app.listen(4000, function(){
    console.log('Server listening at 4000')
});