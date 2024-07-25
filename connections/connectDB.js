import mongoose from 'mongoose';

const connectDB = () => {
    // MongoDB connection
    mongoose.connect('mongodb://localhost:27017/taskdb')
        .then(() => console.log('MongoDB connected'))
        .catch(err => console.error('MongoDB connection error:', err));

}

export default connectDB