const express = require("express");
const users = require("./routes/api/users");
const categorie = require("./routes/api/Categories");
const auth = require("./routes/api/auth");
const post = require("./routes/api/posts");
const evenement = require("./routes/api/evenement");
const profile = require ('./routes/api/Profile')
const fileUpload = require("express-fileupload");
const BodyParser = require("body-parser");
const connectDB = require("./config/db");
const app = express();

//connection to data base
// const db = require ('./config/db.js').mongoURI
connectDB();
// init middleware
app.use(express.json({ exntended: false }));
app.use(fileUpload());
app.use(BodyParser.json());
var cors = require("cors");
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

//Use Route
app.use("/api/auth", auth);
app.use("/api/users", users);
app.use("/api/categories", categorie);
app.use("/api/evenement", evenement);
app.use ("/api/profiles",profile)
app.use('/api/posts',post)
app.listen(4000, err => {
  console.log("server is online ");
});
