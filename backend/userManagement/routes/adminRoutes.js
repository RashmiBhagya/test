const express = require('express');
const { registerAdmin, authAdmin } = require('../controllers/adminControllers');

const router  = express.Router();

//create user routes
router.route('/adminregister').post(registerAdmin);
router.route('/adminlogin').post(authAdmin);

module.exports = router;
