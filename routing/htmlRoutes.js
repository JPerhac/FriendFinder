// requiring the path
var path = require ("path");

// html routes for home, survey, results, and default of /
module.exports = function (app) {
    app.get("/home", function(req,res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });

    app.get("/survey", function(req,res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });

    app.get("/", function(req,res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
    app.get("/results", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/results.html"));
    })
};