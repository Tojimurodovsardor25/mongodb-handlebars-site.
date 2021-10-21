const express = require('express');
const router = express.Router();
const Product = require('../models/Product')

/* GET home page. */
router.get('/', async function (req, res, next) {
    const allProducts = await Product.find()
    // console.log(products); // massiv

    res.render('index', {
        title: 'Create page',
        isHome: true,
        allProducts
    });
});

router.post('/new', async function (req, res, next) {
    // console.log(req.body);
    const {
        name,
        titletxt,
        company,
        situation
    } = req.body
    const allProducts = new Product({
        name,
        titletxt,
        company,
        situation
    })
    await allProducts.save()
    res.redirect('/admin/product')
});

module.exports = router;