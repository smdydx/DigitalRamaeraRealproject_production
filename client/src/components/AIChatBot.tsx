import React, { useState, useEffect } from 'react';
import { Bot, X, Send, Minimize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';

const AIChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ type: 'user' | 'bot'; text: string }[]>([
    { type: 'bot', text: 'Hello! How can I assist you today?' }
  ]);
  const [input, setInput] = useState('');

  // Removed auto-opening timer

  const handleSend = () => {
    if (!input.trim()) return;

    setMessages(prev => [...prev, { type: 'user', text: input }]);
    // Here you would typically make an API call to your AI backend
    setMessages(prev => [...prev, { type: 'bot', text: 'Thank you for your message. Our team will assist you shortly.' }]);
    setInput('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          className="fixed top-20 right-4 w-80 bg-black border border-green-500/20 rounded-lg shadow-lg overflow-hidden z-50"
        >
          <div className="p-4 bg-green-500/10 flex justify-between items-center border-b border-green-500/20">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5 text-green-400" />
              <h3 className="text-white font-semibold">AI Assistant</h3>
            </div>
            <div className="flex gap-2">
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                <Minimize2 className="h-4 w-4" />
              </button>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="h-80 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-lg ${
                  message.type === 'user' 
                    ? 'bg-green-500/20 text-white' 
                    : 'bg-zinc-800 text-gray-200'
                }`}>
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 border-t border-green-500/20 flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type your message..."
              className="flex-1 bg-zinc-800/50 border-green-500/20 text-white"
            />
            <Button onClick={handleSend} size="icon" className="bg-green-500/20 hover:bg-green-500/30 text-green-400">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      )}

      {!isOpen && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="fixed top-20 right-4 p-4 bg-green-500/20 hover:bg-green-500/30 rounded-full text-green-400 shadow-lg z-50"
          onClick={() => setIsOpen(true)}
        >
          <Bot className="h-6 w-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default AIChatBot;