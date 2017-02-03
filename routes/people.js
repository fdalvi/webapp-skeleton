// Load config
const config = require('config');
var serverConfig = config.get('sampleapp.server');

// Load Schemas
var People = require('../models/people.js');

exports.people = function (req, res) {
	console.log("[INFO] /people");
	People.find({}, function(err, all_people) {
		// Add some fake people because db is probably empty
		all_people.push({name: 'John Doe', age: 29});
		all_people.push({name: 'Jane Doe', age: 28});
		res.render('people', {help_text: serverConfig.help_text, all_people: all_people});
	});
};
