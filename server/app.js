const express = require("express");
const app = express();

app.use(express.json());

const testRoute = require("./routes/testRoute");
app.use("/", testRoute);

module.exports = app;