'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const cors = require('./middlewares/cors');
const morgan = require('morgan');
const app = express();

app.use(cors);
app.use(morgan('dev'));
app.use(bodyParser.json());
//app.use(express.static(__dirname + "/public")); // load UI from public folder

app.use('/api', routes);

module.exports = app;