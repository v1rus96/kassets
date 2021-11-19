const express = require('express');
const expressLayouts = require('express-ejs-layouts');
var path = require("path");
const mongoose = require('mongoose');
const request = require('request');
const fs = require('fs');

const app = express();

mongoose
  .connect(
    'mongodb+srv://admin:admin@ktrialinfo.kbp1y.mongodb.net/kassets?retryWrites=true&w=majority',
    { useNewUrlParser: true ,useUnifiedTopology: true}
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

app.use(express.static(path.join(__dirname, "assets")));
app.use(expressLayouts);
app.set('view engine', 'ejs');

// Express body parser
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', require('./routes/index.js'));
app.use('/assets', require('./routes/assets.js'));

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server running on  ${PORT}`));

