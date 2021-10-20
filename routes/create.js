const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('create', {
        title: 'Mahsulot qo`shish',
        isCreate: true
    })
})

module.exports = router;