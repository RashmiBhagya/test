
const express = require('express');
const { registerUser, authUser } = require('../controllers/userControllers');

const router  = express.Router();

//create user routes
router.route('/').post(registerUser);
router.route('/login').post(authUser);

module.exports = router;
