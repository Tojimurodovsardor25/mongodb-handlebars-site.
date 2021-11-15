const { Router } = require('express')
const router = Router()
const Category = require('../models/Category')
const fileUpload = require('../middleware/fileUpload')
const Product = require('../models/Product')
const auth = require('../middleware/auth')

router.get('/view', auth, async (req, res) => {
    const products = await Product.find()

    res.render('admin/products', {
        header: 'Mahsulotlarni ko`rish',
        title: 'Mahsulotlar',
        layout: 'main',
        products
    })
})

router.get('/add', auth, async (req, res) => {
    const categories = await Category.find()
    res.render('admin/productCreate', {
        header: 'Mahsulot yaratish',
        layout: 'main',
        categories
    })
})

router.post('/add', auth, fileUpload.single('img'), async (req, res) => {
    const { name, price, context, categoryId } = req.body
    console.log(req.file);
    const img = req.file.filename

    const product = new Product({
        name,
        price,
        img,
        context,
        categoryId
    })

    await product.save()
    res.redirect('/admin/product/view')
})

module.exports = router