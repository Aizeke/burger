var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    console.log("getting stuff")
    burger.all(function (data) {
        var stuff = {
            burgers: data
        };
        console.log(stuff);
        res.render("index", stuff);
    })

});

router.post("/api/burger", function (req, res) {
    burger.create(
        req.body.burger_name
        , function (res) {
            console.log(res)
        });
});

router.delete("/api/burger/:id", function (req, res) {
    var condition = `id = ${req.params.id}`;

    burger.delete(condition, function (res) {
        if (res.affectedRows == 0) {
            return res.status(404).end()
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;