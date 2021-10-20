const express = require('express');
const router = express.Router();
// const Product = require('../models/Product')

/* GET home page. */
router.get('/', function (req, res, next) {
    // console.log(products); // massiv

    res.render('product', {
        title: 'Product page',
        isProduct: true
    });
});

module.exports = router;
