import express from 'express';
import 'dotenv/config'
import taskRoutes from './routes/taskRoutes.js';
import connectDB from './connections/connectDB.js';
import errorHandler from './middlewares/errorHandler.js';


const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI
connectDB(MONGO_URI)

const app = express();
app.use(express.json());

app.use('/tasks', taskRoutes);

app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
