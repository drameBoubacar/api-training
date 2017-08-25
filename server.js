const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');
const routes = require('./routes');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tasks');

const app = express();

app.set('view engine', 'pug')
app.set('views', path.resolve(__dirname, 'views'));

app.use(express.static(path.resolve(__dirname, 'public')))
app.use(bodyParser.urlencoded({ extended: false}));
app.use(logger('dev'));
app.use(routes);

app.listen(3000, () => {
  console.log('server is running on port 3000');
})
