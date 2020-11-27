// const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
// const config = require('./config');
// const { tokenTypes } = require('./tokens');
// const { User } = require('../models');

// const jwtOptions = {
//   secretOrKey: config.jwt.secret,
//   jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
// };

// const jwtVerify = async (payload, done) => {
//   try {
//     console.log(`payloadd`, payload);
//     logger.info(`jwtVerify`);
//     if (payload.type !== tokenTypes.ACCESS) {
//       throw new Error('Invalid token type');
//     }
//     console.log(`111payload`, payload);
//     const user = await User.findById(payload.sub);
//     console.log(`user`, user);
//     if (!user) {
//       console.log(`inside`);
//       return done(null, false);
//     }
//     done(null, user);
//   } catch (error) {
//     done(error, false);
//   }
// };

// const jwtStrategy = new JwtStrategy(jwtOptions, jwtVerify);
// console.log(`rgergr`);
// module.exports = {
//   jwtStrategy,
// };

//passport.js

const passportJWT = require('passport-jwt');
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const passport = require('passport');
const config = require('./config');
const { User } = require('../models');
passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.jwt.secret,
    },
    function (jwtPayload, cb) {
      //find the user in db if needed. This functionality may be omitted if you store everything you'll need in JWT payload.
      console.log(`payload`, jwtPayload);
      return User.findById(jwtPayload.sub)
        .then(user => {
          console.log(`user`, user);
          return cb(null, user);
        })
        .catch(err => {
          console.log(`err`, err);
          return cb(err);
        });
    },
  ),
);
