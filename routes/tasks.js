const express = require('express');
const Task = require('../models/Task');

const router = express.Router();

// Get all tasks
router.get('/', async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

// Create a new task
router.post('/', async (req, res) => {
    const newTask = new Task({ title: req.body.title });
    await newTask.save();
    res.json(newTask);
});

// Update a task
router.put('/:id', async (req, res) => {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, { completed: req.body.completed }, { new: true });
    res.json(updatedTask);
});

// Delete a task
router.delete('/:id', async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: 'Task deleted' });
});

module.exports = router;
