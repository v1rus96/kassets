const express = require('express');
const expressLayouts = require('express-ejs-layouts');
var path = require("path");
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('connect-flash');

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

// Express session
app.use(
  session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
  })
);

// Connect flash
app.use(flash());

// Global variables
app.use(function(req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
});

// Routes
app.use('/', require('./routes/index.js'));
app.use('/assets', require('./routes/assets.js'));

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server running on  ${PORT}`));

