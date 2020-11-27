module.exports = {
  env: 'development',
  port: '4000',
  mongoose: {
    url: (MONGODB_URL = 'mongodb://127.0.0.1:27017/simplilearnApi'),
    options: {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  jwt: {
    secret: 'thisisasamplesecret',
    accessExpirationMinutes: 30,
    refreshExpirationDays: 30,
  },
};
