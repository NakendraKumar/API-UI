const httpStatus = require('http-status');
const handleAsync = require('../utils/handleAsync');
const { authService, userService, tokenService } = require('../services');

const register = handleAsync(async (req, res) => {
  const user = await userService.createUser(req.body);
  const tokens = await tokenService.generateAuthTokens(user);
  res.status(httpStatus.CREATED).send({ user, tokens, message: 'User registration Successful' });
});

const login = handleAsync(async (req, res) => {
  const { email, password } = req.body;
  const user = await authService.loginUserWithEmailAndPassword(email, password);
  const tokens = await tokenService.generateAuthTokens(user);
  res.send({ user, tokens });
});

const logout = handleAsync(async (req, res) => {
  await authService.logout(req.body.refreshToken);
  res.status(httpStatus.CREATED).send('Logged Out');
});

const refreshTokens = handleAsync(async (req, res) => {
  const tokens = await authService.refreshAuth(req.body.refreshToken);
  res.send({ ...tokens });
});

module.exports = {
  register,
  login,
  logout,
  refreshTokens,
};
