let express = require('express');
let app = express();
let db = require('./db');
let phoneController = require('./phoneController');
app.use('/phones', phoneController);
module.exports = app;