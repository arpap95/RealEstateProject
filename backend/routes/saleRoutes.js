const express = require('express');
const { getSaleProperties } = require('../controllers/saleController');
const router = express.Router();

router.get('/', getSaleProperties);

module.exports = router;
