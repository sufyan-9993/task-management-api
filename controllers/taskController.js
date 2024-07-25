import AppError from "../AppError.js";
import tryCatchHandler from "../middlewares/tryCatchHandler.js";
import TaskModel from "../models/taskModel.js";
import { isMongoDbId } from "../utils/methods.js";

export const getTasks = tryCatchHandler(
  async (req, res) => {
    const { title, status, sortBy, page = 1, limit = 10 } = req.query;
    const filters = {};
    if (title) filters.title = { $regex: title, $options: 'i' };
    if (status) filters.status = status;

    const sort = {};
    if (sortBy) sort[sortBy] = 1;
    const count = await TaskModel.find(filters).countDocuments()
    const tasks = await TaskModel.find(filters)
      .sort(sort)
      .skip((page - 1) * limit)
      .limit(Number(limit));

    res.status(200).json({
      success: true,
      tasks,
      count
    })

  }
)
export const getTask = tryCatchHandler(
  async (req, res) => {
    const id = req.params.id
    isMongoDbId(id)
    const task = await TaskModel.findById(id);
    if (!task) {
      throw new AppError('The server can not find the requested resource.', 404)
    }
    res.status(200).json({
      success: true,
      task
    })
  }
)
export const createTask = tryCatchHandler(
  async (req, res) => {
    const { title, description, status } = req.body;
    const task = await TaskModel.create({
      title, description, status
    })
    res.status(200).json({
      success: true,
      message: "Task Added successfully",
      task
    })
  }
)
export const updateTask = tryCatchHandler(
  async (req, res) => {
    const id = req.params.id
    isMongoDbId(id)
    const task = await TaskModel.findByIdAndUpdate(id, req.body, { new: true })
    if (!task) {
      throw new AppError('The server can not find the requested resource.', 404)
    }
    res.status(200).json({
      success: true,
      message: 'Task Updated successfully!',
      task
    })
  }
)
export const deleteTask = tryCatchHandler(
  async (req, res) => {
    const id = req.params.id
    isMongoDbId(id)
    const task = await TaskModel.findByIdAndDelete(id)
    if (!task) {
      throw new AppError('The server can not find the requested resource.', 404)
    }
    res.status(200).json({
      success: true,
      message: 'Task Deleted successfully!',
      task
    })
  }
)