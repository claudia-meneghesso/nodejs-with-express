const path = require("path");

const express = require("express");

const app = express();

// Set global config values
// For each route use this view engine
app.set("view engine", "pug");
// Set the views directory, although this is the default value
app.set("views", "views");

const bodyParser = require("body-parser");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));

  res.status(404).render("404", { docTile: "Page Not Found" });
});

app.listen(3000);
