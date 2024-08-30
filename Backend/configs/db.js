const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config({path: path.resolve(__dirname, '../local.env')});

const connection = mongoose.connect(process.env.dbURL);

module.exports = { connection };
