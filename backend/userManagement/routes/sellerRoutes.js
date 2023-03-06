const express = require('express');
const { registerSeller, authSeller } = require('../controllers/sellerController');
const router  = express.Router();

//create user routes
router.route('/sellerregister').post(registerSeller);
router.route('/sellerlogin').post(authSeller);

module.exports = router;
