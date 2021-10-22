const express = require('express');
const router = express.Router();
const Product = require('../models/Product')

/* GET home page. */
router.get('/', async function (req, res, next) {
    const products = await Product.find()
    
    res.render('admin/product', {
        title: 'Product page',
        isProduct: true,
        products
    });
});

module.exports = router;