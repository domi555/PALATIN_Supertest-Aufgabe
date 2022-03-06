const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const path = require('path');
const cors = require('cors');

require('colors');
require('dotenv').config();

const routes = require('./routes');

const app = express();

app.use(morgan('dev'));

app.use(helmet());

app.use(cors());

app.use(express.static(path.join(__dirname, '/public')));
app.use(express.json());

app.use('/birds', routes);

app.get('/test', (req, res) => res.send('Yeah, you reached the test route!'));

const PORT = process.env.PORT ?? 5000;

// app.listen(PORT);
module.exports = app;
