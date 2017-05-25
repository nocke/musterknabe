'use strict'

const port = process.env.PORT || 3000;

var express = require('express');
var app = express();
app.use('/', express.static(__dirname + '/public')); // ← adjust
app.listen(port, function() { 
	console.log(`listening on Port ${port}`);
	console.log(`open localhost:${port} in your browser`);
});
