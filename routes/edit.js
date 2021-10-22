const express = require('express');
const router = express.Router();
const Product = require('../models/Product')

/* GET home page. */
router.get('/:id', async function (req, res, next) {
    const products = await Product.findById(req.params.id)
    console.log(products);
    res.render('admin/edit', {
        title: 'Edit page',
        isEdit: true,
        products
    });
});



router.post('/:id', async function (req, res) {
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

    await products.findByIdAndUpdate(req.params.id, req.body, (err) => {
        console.log(req.body + 'edit');
        if (err) {
            console.log(err);
        } else {
            res.redirect('/admin/product')
        }
    })

});


// router.get('admin/edit/:id', async (req, res) => {
//     const products = await Product.findById(req.params.id)

//     res.render('/admin/edit', {
//         name: products.name,
//         titletxt: products.titletxt,
//         img: products.img,
//         id: products.id,
//         company: products.company,
//         situation: products.situation,
//     })
// })

router.post('/admin/edit', async (req, res) => {
    await Product.findById(req.params.id)
    console.log(req.body + 'edit page');
    res.redirect('admin/product')
})


router.get('/admin/product/:id', async (req, res) => {
    const products = await Product.findById(req.params.id)

    res.render('admin/products', {
        layout: 'products',
        titletxt: products.titletxt,
        company: products.company,
        img: products.img,
        id: products.id,
        situation: products.id
    })
})


module.exports = router;