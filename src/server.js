const express = require("express");
const cors = require("cors");

const section = require("./routes/sectionRoute");

const app = express();

app.use(cors());
app.use(express.json());

const apiRoute = "/api/v1";

app.use(`${apiRoute}/section`, section);

module.exports = app;