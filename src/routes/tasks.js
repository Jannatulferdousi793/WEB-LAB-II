const express = require('express');
const router = express.Router();

// Sample tasks data
const tasks = [
  { id: 1, title: "Learn Node.js", completed: false, priority: "high", createdAt: new Date() },
  { id: 2, title: "Build REST API", completed: false, priority: "medium", createdAt: new Date() },
  { id: 3, title: "Write documentation", completed: false, priority: "low", createdAt: new Date() },
  { id: 4, title: "Test API routes", completed: false, priority: "medium", createdAt: new Date() },
  { id: 5, title: "Deploy project", completed: false, priority: "high", createdAt: new Date() }
];

// GET /tasks - returns all tasks
router.get('/tasks', (req, res) => {
  res.json(tasks);
});

// GET /task/:id - returns a specific task
router.get('/task/:id', (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ error: "Invalid ID format" });
  }

  const task = tasks.find(t => t.id === id);

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  res.json(task);
});

module.exports = router;
