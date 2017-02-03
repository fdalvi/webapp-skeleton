// Load config
const config = require('config');
var serverConfig = config.get('sampleapp.server');

exports.index = function (req, res) {
	console.log("[INFO] /index");
	res.render('index', {help_text: serverConfig.help_text});
};
