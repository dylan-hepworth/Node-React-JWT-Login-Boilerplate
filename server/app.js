require('rootpath')();

const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const jwt = require('helpers/jwt');
const errorHandler = require('helpers/error-handler');

const users = require('./routes/users');

app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200
}));

app.use(jwt());

// routes
app.use('/users', users);

// global error handler
app.use(errorHandler);

// start server
const port = process.env.NODE_ENV === 'production' ? 80 : 3000;

app.listen(port, function () {
    console.log(`Server listening on port ${port}`);
});
