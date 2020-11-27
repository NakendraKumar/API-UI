const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
const compression = require('compression');
const cors = require('cors');

const passport = require('passport');
require('./config/passport');
const router = express.Router();
const { errorConverter, errorHandler } = require('./middlewares/error');
const authController = require('./controllers/auth.controller');
const indexRouter = require('./routes/index');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// set security HTTP headers
app.use(helmet());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// sanitize request data
app.use(xss());
app.use(mongoSanitize());

// gzip compression
app.use(compression());

// enable cors
app.use(cors());
app.options('*', cors());

// api routes
app.use(router.post('/register', authController.register));
app.use(router.post('/login', authController.login));

// jwt authentication
app.use('/v1', passport.authenticate('jwt', { session: false }), indexRouter);

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new Error('Not found'));
});

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

module.exports = app;
