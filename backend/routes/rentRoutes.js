const express = require('express');
const { getRentProperties } = require('../controllers/rentController');
const router = express.Router();

router.get('/', getRentProperties);

module.exports = router;
