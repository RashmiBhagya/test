const express = require('express');
const { registerSeller, authSeller } = require('../controllers/sellerController');
const {createProduct,getSellerProductForEachSeller,getSellerProductById,updateSellerProduct,deleteSellerProduct } = require('../controllers/sellerProductController')
const { protect } = require("../middlewares/authSellerMiddleware");
const router  = express.Router();

//create user routes
router.route('/sellerregister').post(registerSeller);
router.route('/sellerlogin').post(authSeller);

module.exports = router;
