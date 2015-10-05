var dbConfig = require('./db');
var mongoose = require('mongoose');
// Connect to DB
mongoose.connect(dbConfig.url);

var User = require('./models/user');

User.remove({}, function(err) {
	if (err) throw err;
});
