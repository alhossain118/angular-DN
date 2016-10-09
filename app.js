'use strict';

const PORT            = process.env.PORT || 8080;
const MONGO_URL       = process.env.MONGO_URI || 'mongodb://localhost/dnClone';

const express         = require('express');
const path            = require('path');
const http            = require('http');
const favicon         = require('favicon');
const morgan          = require('morgan');
const cookieParser    = require('cookie-parser');
const bodyParser      = require('body-parser');
const mongoose        = require('mongoose');

mongoose.connect(MONGO_URL, err => {
  console.log(`MongoDB connected to ${MONGO_URL}`);
});

let app = express();
let server = http.createServer(app);

server.listen(PORT, err => {
  console.log(err || `Server listening on PORT ${PORT}`);
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use( cookieParser() );
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', require('./routes/api'))
app.get('/', (req, res) => {
  res.render('index', {title: 'DN CLONE'});
});
