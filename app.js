import express from 'express';
import taskRoutes from './routes/taskRoutes.js';
import connectDB from './connections/connectDB.js';
import errorHandler from './middlewares/errorHandler.js';


connectDB()
const PORT = 5000;

const app = express();
app.use(express.json());

app.use('/tasks', taskRoutes);

app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
