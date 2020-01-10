const express = require('express');
const app = express();
const morgan = require('morgan');
require('dotenv').config();

const citiesRoutes = require('./routes/cities');

const allowCors = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
    res.header('Access-Control-Allow-Headers', 'Content-Type, authorization');
    res.header('Access-Control-Allow-Credendials', 'true');
  
    next();
  };
  
app.use(allowCors);
app.use(express.json());

if(process.env.NODE_ENV == 'DEV')
  app.use(morgan('dev'));

app.use(citiesRoutes);

var PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

module.exports = app