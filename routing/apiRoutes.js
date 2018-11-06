

var friends = require("../app/friends.js");


module.exports = function (app) {
    app.get("/api/friends", function(req,res) {
        res.json(friends);
    });

    app.post("/api/friends", function(req, res) {
        console.log(req.body);
        var array = [];
        friends.forEach(function(obj){
            var total = 0;
            obj.scores.forEach(function(i){
                total += i
            })
            console.log(total);
            var difference = Math.abs(req.body.userScore - total);
            console.log(difference);
            if (difference <= 5) {
                array.push(obj);
            }
            });
            res.send(array);
        });
    
}

