
const express = require('express');
const { registerCustomer, authCustomer } = require('../controllers/customerControllers');

const router  = express.Router();

//create user routes
router.route('/customerregister').post(registerCustomer);
router.route('/customerlogin').post(authCustomer);

module.exports = router;
