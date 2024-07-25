import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  status: { type: String, required: true, enum: ['pending', 'in progress', 'completed'] }
}, { timestamps: true }); // This adds `createdAt` and `updatedAt` fields


const TaskModel = mongoose.model('Task', taskSchema);

export default TaskModel;
