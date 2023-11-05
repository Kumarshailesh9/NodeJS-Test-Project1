const express = require('express');
const myController = require('../controller/product-controller');

const router = express.Router();

router.get('/product', myController.getProduct);

router.post('/product', myController.postProduct);

router.put('/product/:id', myController.putProduct);

module.exports = router;
