const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // Store unique user ID from Auth0
  date: { type: String, required: true },
  tasks: [
    {
      description: { type: String, required: true },
      completed: { type: Boolean, default: false },
    },
  ],
  completionPercentage: { type: Number, default: 0 },
});

module.exports = mongoose.model('Task', taskSchema);
