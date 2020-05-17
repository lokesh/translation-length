const path = require('path');
const ejs = require('ejs');
const express = require('express');

// --------------
// Init and configure app
// --------------

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// --------------
// Use middleware
// --------------

// Custom logger
app.use(function(req, res, next) {
  console.log(`${new Date().toLocaleTimeString()} ${req.method} ${req.url}`);
  next();
});

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json()); // For parsing application/json

// --------------
// Routing
// --------------

const router = require('./router');
const api = require('./api');
app.use('/api', api);
app.use('/', router);

const port = process.env.PORT || 3000

app.listen(port, () => {
	console.log(`Listening on port ${port}...`)
});
