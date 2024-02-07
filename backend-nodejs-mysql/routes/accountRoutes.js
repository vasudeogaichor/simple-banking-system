const express = require('express');
const router = express.Router();
const { accountListController, accountCreateController } = require('../controllers/accounts')

router.get('/', accountListController)
router.post('/', accountCreateController)

module.exports = router