const express = require("express");
const morgan = require("morgan");
const path = require("path");
const exphbs = require("express-handlebars");
const app = express();
const port = 3000;

// HTTP Loggers
app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "resource/public")));

// Template engine
app.engine("hbs", exphbs.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "/resource/views"));

// console.log(path.join(__dirname, "/resource/views"));

app.get("/", (req, res) => {
  return res.render("home");
});

app.get("/tin-tuc", (req, res) => {
  return res.render("news");
});

app.listen(port, () => console.log(`listening on port ${port}`));
