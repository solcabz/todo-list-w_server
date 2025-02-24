const express = require("express");
const router = express.Router();
const { register, login, logout } = require('../controllers/userController.js');
const { isAdmin, authenticate } = require('../middleware/authMiddleware.js');

router.post('/register', authenticate, isAdmin, register);
router.post('/login', authenticate, login);
router.post('/logout',  authenticate, logout);

module.exports = router;
