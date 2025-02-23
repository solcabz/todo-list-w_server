const express = require('express');
const { getTasks, createTask, updateTask, deleteTask } = require('../controllers/taskController.js');
const { authenticate } = require('../middleware/authMiddleware.js');

const router = express.Router();

router.get('/', authenticate, getTasks);
router.post('/', authenticate, createTask);
router.put('/:id', authenticate, updateTask);
router.delete('/:id', authenticate, deleteTask);

module.exports = router;