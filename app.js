var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const cors = require("cors");
const ejs = require("ejs");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const studiosRouter = require("./routes/studios");
var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());
app.engine("ejs", ejs.renderFile);
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use("/", indexRouter);
app.use("/users", usersRouter);

app.use("/studios", studiosRouter);

var listener = app.listen(8080, function () {
  console.log("Listening on port " + listener.address().port);
});
