const User = require('./server/models/adminUser'),
      LocalStrategy = require('passport-local').Strategy

module.exports = function (passport) {
  passport.serializeUser(function(user, done) {
    done(null, user)
  })

  passport.deserializeUser(function(user, done) {
    done(null, user)
  })

  
  passport.use(new LocalStrategy({
      usernameField: 'username'
    },
    (username, password, done) => {
      User.findOne({ username: username}, (err, user) => {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        // if (!user.verifyPassword(password)) { return done(null, false); }
        if (user.password != password) { return done(null, false); }
        return done(null, user);
      });
    }
  ))
}
