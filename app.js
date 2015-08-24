var Express = require("express");
var Mongoose = require("mongoose");
var bodyParser = require("body-parser");
var port = process.env.PORT || 7000;
var app = Express();

function cors(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
};
Mongoose.connect("localhost", "b-shop");

app.use(cors);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", Express.static(__dirname + "/public"));

// Connected or Connecting
if (Mongoose.connection.readyState == 1 || Mongoose.connection.readyState == 2) {
     var modules = ["User", "List", "Group"];


    modules.forEach(function(module) {
        require("./models/" + module + "Model")(Mongoose);
        require("./routers/" + module + "Router")(app, Mongoose);
    });
}

app.listen(port);
console.log("Started on port", port);