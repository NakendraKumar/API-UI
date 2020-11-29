const express = require('express');
const authController = require('../controllers/auth.controller');
const router = express.Router();

router.post('/logout', authController.logout);
router.post('/refresh-tokens', authController.refreshTokens);

module.exports = router;
