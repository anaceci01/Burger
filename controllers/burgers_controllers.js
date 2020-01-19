var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        res.render("index", { burger: data });
    })
});

router.get("/api/burgers", function(req, res) {
    burger.selectAll(function(data) {
        console.log(data);
        res.json(data);
    });
});

router.post("/api/burgers", function(req, res) {
    if (req.body.burger_name === undefined || req.body.devoured === undefined || req.body.burger_name.length < 1 || req.body.burger_name.length > 30) {
        return res.status(400).end();
    }
    burger.insertOne(req.body.burger_name, req.body.devoured, function(err, data) {
        if (err) return res.status(400).end();
        res.json({ id: data.insertId });
    });
});

router.put("/api/burgers/:id ", function(req, res) {
    let hdbrsObj = {};
    req.body.burger_name ? hdbrsObj["burger_name"] = req.body.burger_name : null;
    if (req.body.devoured != undefined) {
        req.body.devoured === "true" ? hdbrsObj["devoured"] = true : hdbrsObj["devoured"] = false;
    };
});

router.delete("/api/burgers/:id", function(req, res) {
    burger.deleteOne(req.params.id, function(err, data) {
        if (err) return res.status(400).end();
        else if (data.changedRows === 0) return res.status(404).end();
        else res.status(200).end();
    });
});

module.exports = router;