const httpStatus = require('http-status');
const { User } = require('../models');

/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createUser = async userBody => {
  if (await User.isEmailTaken(userBody.email)) {
    throw new Error('Email already taken');
  }
  const user = await User.create(userBody);
  return user;
};

/**
 * Get user by id
 * @param {ObjectId} id
 * @returns {Promise<User>}
 */
const getUserById = async id => {
  return User.findById(id);
};

/**
 * Get user by email
 * @param {string} email
 * @returns {Promise<User>}
 */
const getUserByEmail = async email => {
  return User.findOne({ email });
};

module.exports = {
  createUser,
  getUserById,
  getUserByEmail,
};
