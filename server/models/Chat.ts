
import mongoose from 'mongoose';

const chatSchema = new mongoose.Schema({
  message: { type: String, required: true },
  response: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export const Chat = mongoose.model('Chat', chatSchema);
