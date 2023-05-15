const express = require('express');
const router = express.Router();
const DonorController = require('../Controllers/DonorController')

router.post('/signup', DonorController.signup)
router.post('/login', DonorController.login)

module.exports = router