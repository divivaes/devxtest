const { json, urlencoded } = require('express');
const cors = require("cors");

const app = require('express')();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));

module.exports = app;