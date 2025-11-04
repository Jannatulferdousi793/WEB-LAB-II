const express = require('express');
const app = express();
const port = 3000;

// Import task routes
const taskRoutes = require('./routes/tasks');

// Use the routes
app.use('/', taskRoutes);

// Health route
app.get('/health', (req, res) => {
  res.json({ status: "healthy", uptime: process.uptime() });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
