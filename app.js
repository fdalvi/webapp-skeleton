/******************************************************************************\
|******************************* Sample Web App *******************************|
\******************************************************************************/

// Imports
const express = require('express'),
	ejs = require('ejs'),
	path = require('path'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	expressSession = require('express-session'),
	config_loader = require('config');

// Load configuration
var config = config_loader.get('sampleapp');

// App Initialization
var app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to the database
mongoose.connect(config.dbConfig.host);
var db = mongoose.connection;
db.on('error', console.error.bind(console, '[ERROR] '));
db.once('open', function() {
	console.log('[INFO] Connected to database.');
});

// Setup Sessions
const MongoStore = require('connect-mongo')(expressSession);
app.use(expressSession({
	secret: 'some-secret',
	resave: false,
	saveUninitialized: false,
	store: new MongoStore({
		mongooseConnection: mongoose.connection,
		collection: 'sessionstore'
	})
}));

// Routes
var routes = require('./routes/index');
var people_routes = require('./routes/people');

app.get('/', routes.index);
app.get('/people', people_routes.people);

app.listen(config.server.port, function () {
	console.log('[INFO] Server listening on port ' + config.server.port + '.');
});
