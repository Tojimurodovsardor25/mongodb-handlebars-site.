const express = require('express');
const router = express.Router();
const Product = require("../models/Product");

router.get('/:id', async function (req, res, next) {
    const product = await Product.findById(req.params.id);

    res.render('viewIndex', {
        title: 'viewIndex',
        img: product.img,
        name: product.name,
        price: product.price,
        context: product.context
    });
});

module.exports = router;