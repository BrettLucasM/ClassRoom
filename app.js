const express = require('express');
const session = require('express-session')
const bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const app = express();
app.set('view engine', 'ejs');
fs = require('fs');
app.use('/assets', express.static('assets'));

app.get('/', function (req, res) {

    res.render('home');
    console.log('Request was made: ' + req.url);
});



app.listen(8085, function(){

    console.log("Listening to Port 8085")
    console.log("Running...")
});