const { Task } = require('../models/Task.js');

 const getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll({ where: { UserId: req.userId } });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve tasks' });
  }
};

 const createTask = async (req, res) => {
  try {
    const task = await Task.create({ ...req.body, UserId: req.userId });
    res.json(task);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create task' });
  }
};

 const updateTask = async (req, res) => {
  try {
    await Task.update(req.body, { where: { id: req.params.id, UserId: req.userId } });
    res.json({ message: 'Task updated' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update task' });
  }
};

const deleteTask = async (req, res) => {
  try {
    await Task.destroy({ where: { id: req.params.id, UserId: req.userId } });
    res.json({ message: 'Task deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete task' });
  }
};


module.exports = { getTasks, createTask, updateTask, deleteTask }