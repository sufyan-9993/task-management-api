import express from 'express';
import { createTask, deleteTask, getTask, getTasks, updateTask } from '../controllers/taskController.js';
import { validateTaskCreation, validateTaskUpdate } from '../middlewares/validationMiddleware.js';

const taskRouter = express.Router();

taskRouter.get('/', getTasks);
taskRouter.get('/:id', getTask);
taskRouter.post('/',validateTaskCreation , createTask);
taskRouter.put('/:id',validateTaskUpdate, updateTask);
taskRouter.delete('/:id', deleteTask);

export default taskRouter;
