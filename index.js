var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname + '/public'));
const port = process.env.PORT || 8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(port,()=>{
    console.log("listen to port 8080")
});