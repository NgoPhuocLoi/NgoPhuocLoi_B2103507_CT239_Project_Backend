const express = require("express");
const cors = require("cors");
const { handleNotFound, handleErrors } = require("./middlewares/handleError");
const mysql = require("./dbs/mysql");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mysql.connect();

app.use("/", require("./routes"));

app.use(handleNotFound);
app.use(handleErrors);

module.exports = app;
