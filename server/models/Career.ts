
import mongoose from 'mongoose';

// Schema for job postings created by admin
const jobPostingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  department: { type: String, required: true },
  location: { type: String, required: true },
  type: { type: String, required: true },
  description: { type: String, required: true },
  requirements: [String],
  createdAt: { type: Date, default: Date.now }
});

// Schema for job applications
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
  photo: { type: String, required: true }, // URL for candidate photo
  createdAt: { type: Date, default: Date.now }
});

export const Career = mongoose.model('Career', careerSchema);
export const JobPosting = mongoose.model('JobPosting', jobPostingSchema);
