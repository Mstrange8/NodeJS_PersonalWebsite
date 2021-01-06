const path = require('path');

const express = require('express');

const router = express.Router();

const socialController = require('../controllers/social');

router.post('/social', socialController.getSocialPage);

router.get('/social', socialController.getSocialPage);

module.exports = router;