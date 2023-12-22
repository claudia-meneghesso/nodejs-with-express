const path = require("path");
const express = require("express");

const errorController = require("./controllers/error");

const app = express();
// const expressHbs = require("express-handlebars");
// app.engine(
//   "hbs",
//   expressHbs({
//     layoutsDir: "views/layouts/",
//     defaultLayout: "main-layout",
//     extname: "hbs",
//   })
// );

// Set global config values
// For each route use this view engine
// app.set("view engine", "pug");
// app.set("view engine", "hbs");
app.set("view engine", "ejs");

// Set the views directory, although this is the default value
app.set("views", "views");

const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.getNotFoundPage);

app.listen(3000);
