const express = require('express');
const router = express.Router();
const { userListController } = require('../controllers/users')

router.get('/', userListController);

module.exports = router