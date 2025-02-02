const express = require('express');
const Task = require('../models/Task');
const router = express.Router();

// Middleware to extract user ID from request
const requireUser = (req, res, next) => {
  if (!req.user || !req.user.sub) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  req.userId = req.user.sub;
  next();
};

// Get or create today's tasks for the logged-in user
router.get('/', requireUser, async (req, res) => {
  const today = new Date().toISOString().split('T')[0];
  const userId = req.userId; // Extracted from Auth0

  try {
    let task = await Task.findOne({ userId, date: today });

    if (!task) {
      const defaultTasks = [
        { description: 'Drink water', completed: false },
        { description: 'Exercise', completed: false },
        { description: 'Meditate', completed: false },
        { description: 'Eat healthy', completed: false },
        { description: 'Sleep 8 hours', completed: false },
        { description: 'Talk to a friend', completed: false },
        { description: 'Read a book', completed: false },
        { description: 'Take a break', completed: false },
        { description: 'Practice gratitude', completed: false },
        { description: 'Avoid negative thoughts', completed: false },
      ];

      task = new Task({ userId, date: today, tasks: defaultTasks });
      await task.save();
    }

    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update task completion status
router.put('/:taskId', requireUser, async (req, res) => {
  const { taskIndex, completed } = req.body;
  const userId = req.userId;

  try {
    let task = await Task.findOne({ _id: req.params.taskId, userId });

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    task.tasks[taskIndex].completed = completed;

    // Recalculate completion percentage
    const completedTasks = task.tasks.filter((t) => t.completed).length;
    task.completionPercentage = (completedTasks / task.tasks.length) * 100;

    await task.save();
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
