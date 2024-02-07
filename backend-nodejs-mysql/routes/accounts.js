const express = require('express');
const router = express.Router();
const { accountListController } = require('../controllers/accounts/accountListController')

router.get('/', accountListController)

module.exports = router