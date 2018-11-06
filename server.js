// These are the packages required to set up express, body parser, and to locate the path.

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// activating express and picking a server port
var app = express();

var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// requiring api routes for use in server routes

require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// confirmation log of port listening in node

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});

// gives access to files within the public folder
app.use(express.static(path.join(__dirname , 'public')));