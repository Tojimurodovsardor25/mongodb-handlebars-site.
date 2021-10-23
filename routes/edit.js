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




router.post('/:id', async (req, res) => {
    const DbUpdate = {}
    DbUpdate.name = req.body.name,
        DbUpdate.img = req.body.img,
        DbUpdate.company = req.body.company,
        DbUpdate.situation = req.body.situation
    console.log("asdasd");
    await Product.findByIdAndUpdate(req.params.id, DbUpdate, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect("/")
        }
    })

})



module.exports = router;