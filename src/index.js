const express = require('express');
const bodyParser = require('body-parse');
const routes = require('./routes');
const app = express();

const port = 3333;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Hello FoM'));

app.use('/api', routes);

app.listen(port);