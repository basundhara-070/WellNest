// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const authRoutes = require('./routes/authRoutes');
// require('dotenv').config();

// const app = express();
// app.use(cors());
// app.use(express.json());

// // Connect to MongoDB
// mongoose.connect(process.env.MONGODB_URI)
//   .then(() => console.log('Connected to MongoDB'))
//   .catch((err) => console.error('MongoDB connection error:', err));

// // Routes
// app.use('/api', authRoutes);
// app.get('/', (req, res) => {
//     res.send('Hello, World!');
//   });
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Backend running on http://localhost:${PORT}`);
// });

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/tasks', taskRoutes);

// Start server
app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));