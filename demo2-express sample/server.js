var express = require('express');
var app = express();

app.get('/index.html', function (req, res) {
    res.sendFile( __dirname + "/" + "index.html" );
});

app.get('/process_get', function (req, res) {
    var response = {
        first_name:req.query.first_name,
        last_name:req.query.last_name
    };
    res.end(JSON.stringify(response));
});

app.listen(8081);