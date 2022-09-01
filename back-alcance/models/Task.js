const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  kanbanId: {
    type: String,
    required: true,
  },
  userId: {
    type: Array,
    required: true,
  },
  difficulty: {
    type: String,
    enum: ["Simple", "Media", "Compleja"],
    default: "Simple",
    required: true,
  },
  taskState: {
    type: String,
    required: true,
    enum: ["Pendiente", "En progreso", "Finalizada"],
    default: "Pendiente",
  },
});

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
