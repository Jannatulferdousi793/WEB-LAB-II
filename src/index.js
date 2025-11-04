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





