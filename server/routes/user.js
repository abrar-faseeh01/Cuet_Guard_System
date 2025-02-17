const express = require('express');
const router = express.Router();

const { getAllUsers, makeUserAdmin } = require('../controllers/userController');

router.get('/', getAllUsers); 
router.put('/:id', makeUserAdmin)

module.exports = router;
