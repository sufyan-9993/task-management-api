import mongoose from 'mongoose';

const connectDB = (URI) => {
    // MongoDB connection
    mongoose.connect(URI)
        .then(() => console.log('MongoDB connected'))
        .catch(err => console.error('MongoDB connection error:', err));

}

export default connectDB