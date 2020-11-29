module.exports = {
  env: 'development',
  port: '4000',
  mongoose: {
    url: process.env.MONGO_URL,
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
