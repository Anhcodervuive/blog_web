const express = require("express");
const morgan = require("morgan");
const path = require("path");
const exphbs = require("express-handlebars");
const app = express();
const port = 3000;

const route = require("./routes");

// HTTP Loggers
app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, "/public")));

// Template engine
app.engine("hbs", exphbs.engine({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "/resource/views"));

route(app);

app.listen(port, () => console.log(`listening on localhost:${port}`));
