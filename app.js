const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./src/routes');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/', routes);

module.exports = app;