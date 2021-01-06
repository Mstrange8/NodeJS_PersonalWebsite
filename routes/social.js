const path = require('path');

const express = require('express');

const router = express.Router();

const socialController = require('../controllers/social');

router.post('/', socialController.getSocialPage);

router.get('/', socialController.getSocialPage);

module.exports = router;