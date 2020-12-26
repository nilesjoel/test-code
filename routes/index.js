const quoteContext = require("../data/QuoteContext");
var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("", function (req, res, next) {
  res.redirect("/ejs");
});

/* GET home page. */
router.get("/ejs", function (req, res, next) {
  res.render("pages/index", {
    brand: { name: "EJS FUN" },
    menu: ["Home", "Info"],
    jumbo: "This string",
    title: "Express And the like",
    welcome: "Welcome to templating 101"
  });
});

router.get("/quoteBox", function (req, res, next) {
  res.status(200).json({ context: quoteContext });
});

router.get("/html", function (req, res, next) {
  res.render("index", { title: "Express" });
});
module.exports = router;
