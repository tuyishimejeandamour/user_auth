const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const UserModel = require('../models/users.model');
const jwtStrategy = require('passport-jwt').Strategy;
const jwtExtract = require('passport-jwt').ExtractJwt


passport.use('signup', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, async (email, password, done) => {
    console.log("hello")
    const user = await UserModel.findOne({ email });
    if (user) {
        return done(null, false, { message: 'Email is already in use.' });
    }
    const newUser = new UserModel({ email, password });
    await newUser.save();
    return done(null, newUser);
}
));

passport.use('login', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
},
    function (username, password, done) {
        UserModel.findOne({ email: username }, function (err, user) {
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            if (!user.comparePassword(password)) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
        });
    }
));

passport.use('jwt',new jwtStrategy({
    secretOrKey:'TopSecret',
    jwtFromRequest: jwtExtract.fromUrlQueryParameter('secret_token')
},(payload,done)=>{
    try {
        done(null,payload.user);
    } catch (error) {
       done(error)   
    }
}
))