const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const fileUpload = require('express-fileupload');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

require('dotenv').config()


// create express app
const app = express();

// port to listen to
const port = process.env.PORT || 4100


// public file to server aA //
app.use(express.static('public'))

// to recognize the incoming Request Object as strings or arrays
app.use(express.urlencoded({ extended: true }));
// what is express-ejs-layout //
app.use(expressLayouts);

// setting main.js as layout
app.set('layout', './layouts/main');
// view m engine here is the ejs aA
app.set('view engine', 'ejs');

// importing routes of app
const routes = require('./server/routes/recipeRoutes.js');

app.use('/', routes)

// listening to the port at
app.listen(port, () => {
    console.log(`listening to port ${port}`)
})







































































