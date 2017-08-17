var express = require("express");

var router = express.Router();

//Import the model (burger.js) to use its database function

var burger = require("../models/burger.js");

//Create all our routes and set up logic


router.get("/", function(req, res) {
  burger.show(function(data){
    res.render("index", { burger: data });
    console.log("This should work");
  })
});

router.post("/", function(req, res) {
    burger.add(req.body.burger, req.body.devoured, function(){
      console.log("trying to post burger");
      res.redirect("/");      
    })
});

router.put("/:id", function(req, res) {
  burger.update(req.body.id, function(){
    console.log("updated");
     res.redirect("/");
    
  })
});

router.delete("/:id", function(req, res) {
  burger.delete(req.body.id, function(){
    console.log("deleted");
     res.redirect("/");
    
  })
});


module.exports = router;