const express = require('express');
const router = express.Router();
const Product = require('../models/Product')

/* GET home page. */
router.get('/', async function (req, res, next) {
    const products = await Product.find()
    console.log(products + 'Salom'); // massiv

    res.render('admin/product', {
        title: 'Product page',
        isHome: true,
        products
    });
});

module.exports = router;