const express = require("express");
const router = express.Router();
const  { register, login } = require('../controllers/userController.js');

router.post('/register', register);
router.post('/login', login);
router.post('/logout', login);

module.exports = router;
