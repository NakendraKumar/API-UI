const httpStatus = require('http-status');
const handleAsync = require('../utils/handleAsync');
const { userService } = require('../services');

const createUser = handleAsync(async (req, res) => {
  const user = await userService.createUser(req.body);
  res.status(httpStatus.CREATED).send(user);
});

const getUser = handleAsync(async (req, res) => {
  console.log('123');
  const user = await userService.getUserById(req.params.userId);
  if (!user) {
    throw new Error('User not found');
  }
  res.send(user);
});

module.exports = {
  createUser,
  getUser,
};
