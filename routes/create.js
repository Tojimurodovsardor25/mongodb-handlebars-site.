const express = require('express');
const router = express.Router();
const Product = require('../models/Product')

/* GET home page. */
router.get('/', async function (req, res, next) {
    const products = await Product.find()
    console.log(products + 'Salom'); // massiv

    res.render('admin/create', {
        title: 'Create page',
        isCreate: true,
    });
});



router.post('/', async function (req, res, next) {
    const {
        name,
        titletxt,
        company,
        situation,
        img
    } = req.body
    const products = new Product({
        name,
        titletxt,
        company,
        situation,
        img
    })
    console.log(products);
    await products.save()
    res.redirect('/admin/product')
});

module.exports = router;