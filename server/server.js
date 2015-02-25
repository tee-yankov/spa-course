'use strict';

var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    path = require('path');

app.use(express.static(path.normalize(__dirname + '/../client')));
app.use('/bower_components', express.static(path.normalize(__dirname + '/../bower_components')));
app.use('/assets', express.static(path.normalize(__dirname + '/../assets')));

app.route('/*')
.get(function(req, res) {
     res.sendFile(path.normalize(__dirname + '/../client/index.html'));
});

server.listen(3000, function() {
    console.log('Server started at port 3000');
});
