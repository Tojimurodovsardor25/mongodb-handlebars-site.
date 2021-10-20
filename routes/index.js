const express = require('express');
const router = express.Router();
const Product = require('../models/Product')

/* GET home page. */
router.get('/', async function (req, res, next) {
  const allProducts = await Product.find()
  // console.log(products); // massiv

  res.render('index', {
    title: 'Express',
    isHome: true,
    allProducts
  });
});

router.post('/new', async function (req, res, next) {
  // console.log(req.body);

  const {
    name,
    price
  } = req.body
  const allProducts = new Product({
    name,
    price
  })

  await allProducts.save()
  res.redirect('/')
});

module.exports = router;