const express = require('express');
const router = express.Router();
const { renderHandler } = require('../controllers/renderController');

router.post('/', renderHandler);

module.exports = router;
