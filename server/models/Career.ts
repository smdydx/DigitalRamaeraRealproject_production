
import mongoose from 'mongoose';

const careerSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  position: { type: String, required: true },
  experience: { type: String, required: true },
  currentSalary: { type: String, required: true },
  expectedSalary: { type: String, required: true },
  comments: String,
  resumeUrl: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export const Career = mongoose.model('Career', careerSchema);
