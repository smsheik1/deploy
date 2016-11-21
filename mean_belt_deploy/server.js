'use strict';

var bodyParser = require('body-parser'),
	path = require('path'),
	express = require('express'),
	app = express(),
	port = 8000;

app.use(express.static(path.join(__dirname, 'client')));
app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./server/config/mongoose');
require('./server/config/routes')(app);
	
app.listen(port, function() {
	console.log('listening on port', port);
});
