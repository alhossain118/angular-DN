'use strict';

const PORT = process.env.PORT || 8080;
const MONGO_URL = process.env.MONGO_URI || 'mongodb://localhost/dnClone';

const express = require('express');
const path = require('path');
const http = require('http');
const favicon = require('favicon');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect(MONGO_URL, err => {
  console.log(`MongoDB connected to ${MONGO_URL}`);
});

let app = express();
let server = http.createServer(app);

server.listen(PORT, err => {
  console.log(err || `Server listening on PORT ${PORT}`);
});
