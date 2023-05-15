const express = require('express');
const router = express.Router();
const DonorController = require('../Controllers/DonorController')

router.post('/signup', DonorController.signup)

module.exports = router