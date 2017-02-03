const mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var personSchema = new Schema({
	name: String,
	age: Number
});

module.exports = mongoose.model('People', personSchema);