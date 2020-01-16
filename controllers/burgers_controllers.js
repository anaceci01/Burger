const express = require("express");
const burger = require("../models/burger");

const router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hdbrsObj = {
            burgers: data
        };
        console.log(hdbrsObj);
        res.render("index", hdbrsObj);
    });
    router.post("/api/burgers", function(req, res) {
        burger.instertOne(
            ["burger_name", "devoured"], [req.body.burger_name, req.body.devoured],
            function(result) {
                //Send back he ID of the burger
                res.json({ id: result.insertId });
            }
        );
    });
});






module.exports = router;