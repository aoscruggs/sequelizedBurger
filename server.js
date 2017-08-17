var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var connection = require("./config/connection");

const router = require("./controllers/burgers_controller");

var app = express();
const PORT = process.env.PORT || 3000;

var db = require("./models");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(__dirname + "/public"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main", layoutDir: __dirname + '/views/layouts/'}));

app.set("view engine", "handlebars");

app.use('/', router);

db.sequelize.sync().then(function(){
	app.listen(PORT, function () {
		console.log("Listening on ", PORT);
	});
});

