require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
const session      = require('express-session');
const passport     = require('passport');
const cors         = require('cors');

const User= require("./models/user");
const passportSetup = require('./configs/passport/passport-setup');



// ====================== Mongoose configuration
//mongoose.Promise = Promise;
//                        KEY 
//                         |
mongoose
  //.connect('mongodb://localhost/elcateo', {useNewUrlParser: true})
  .connect(process.env.MONGODB_URI, {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup

// app.use(require('node-sass-middleware')({
//   src:  path.join(__dirname, 'public'),
//   dest: path.join(__dirname, 'public'),
//   sourceMap: true
// }));
      

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));



// default value for title local
app.locals.title = 'Express - Generated with IronGenerator';


// ============= SESSION
//****** configure the middleware ****** */
//****** first of all we have to configure */
// ***  the express-session *****/
app.use(session({
  //secret key it will use to be generated
  secret: "our-passport-local-strategy-app",
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:3000'], // <== this will be the URL of our React app (it will be running on port 3000)
  })
);


// ============== MUST COME AFTER THE SESSION
passportSetup(app)


// ROUTES MIDDLEWARE STARTS HERE
app.use('/api', require('./routes/index'));
app.use('/api', require('./routes/auth-routes'));
app.use('/api', require('./routes/tree-routes'));
app.use('/api', require('./routes/tree-record-routes'));
app.use('/api', require('./routes/illness-routes'));
app.use('/api', require('./routes/group-routes'));

app.use((req, res, next) => {
  // If no routes match, send them the React HTML.
  res.sendFile(__dirname + "/public/index.html");
})
module.exports = app;
