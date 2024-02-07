const express = require('express');
const router = express.Router();
const {userListController} = require('../controllers/users/userListController.js')

router.get('/', userListController);

module.exports = router