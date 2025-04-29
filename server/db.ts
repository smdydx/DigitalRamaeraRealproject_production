
import mongoose from 'mongoose';

const MONGODB_URI = 'mongodb+srv://samadalamofficialcampus40:root@cluster0.lifmjzg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};
