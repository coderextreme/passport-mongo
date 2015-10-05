var User = require('./models/user');

module.exports = function(req,done) { 
    // check in mongo if a user with username exists or not
    User.find({}, 
                function(err, users) {
                    // In case of any error, return using the done method
                    if (err)
                        return done(err);
                    // Users not exist, log the error and redirect back
                    if (!users){
                        console.log('Users Not Found');
                        return done(null, false, req.flash('message', 'Users Not found.'));                 
                    }
                    return done(null, users);
                }
    );
}
