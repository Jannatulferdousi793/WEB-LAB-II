// src/index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const tasks = [
  { id: 1, title: 'Learn Node.js', completed: false, priority: 'high', createdAt: new Date() },
  { id: 2, title: 'Build REST API', completed: false, priority: 'medium', createdAt: new Date() },
  { id: 3, title: 'Write documentation', completed: false, priority: 'low', createdAt: new Date() },
  { id: 4, title: 'Test API routes', completed: false, priority: 'medium', createdAt: new Date() },
  { id: 5, title: 'Deploy project', completed: false, priority: 'high', createdAt: new Date() }
];

app.get('/', (req, res) => {
  res.send('Task Management API is running!');
});

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', uptime: process.uptime() });
});

app.get('/task/:id', (req, res) => {
  const idStr = req.params.id;
  const id = parseInt(idStr, 10);

  // invalid ID format
  if (isNaN(id) || id <= 0) {
    return res.status(400).json({ error: 'Invalid ID format' });
  }

  const task = tasks.find(t => t.id === id);
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }

  res.json(task);
});






