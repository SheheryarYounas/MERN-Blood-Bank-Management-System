const express = require('express');
const router = express.Router();
const DonorController = require('../Controllers/DonorController')

router.post('/signup', DonorController.signup)
router.post('/login', DonorController.login)
router.get('/retrieveDonors', DonorController.retrieveAllDonors) //This is a test route. 

module.exports = router