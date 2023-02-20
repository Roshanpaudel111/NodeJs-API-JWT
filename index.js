const express = require("express");
const app = express();
const mongoose = require("mongoose");
//Import routes
const authRoute = require("./routers/auth");

// Dotenv config
require("dotenv").config();

//Mongodb Connection
mongoose.set("strictQuery", true);
const URI = process.env.MONGO_URI;
mongoose.connect(URI);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error!!"));
db.once("open", () => {
  console.log("Connection Open!!");
});

// Extra Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route middlewares
app.use("/api/user", authRoute);

app.listen(3000, () => {
  console.log("App listening to port 3000");
});
