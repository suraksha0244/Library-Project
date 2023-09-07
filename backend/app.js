var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var cors = require("cors");
var app = express();
const connectDb = async () => {
  try {
    mongoose
      .connect("mongodb+srv://Soujanya11:S11@cluster0.rkfggow.mongodb.net/library")
      .then(() => {
        console.log("Connected to database");
      });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

connectDb();
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

module.exports = app;
