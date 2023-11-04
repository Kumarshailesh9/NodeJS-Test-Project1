const express = require('express');
const myController = require('../controller/review-controller');

const router = express.Router();

router.get('/review', myController.getReview);

router.post('/review', myController.postReview);

module.exports = router;
