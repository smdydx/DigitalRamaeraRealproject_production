
import React, { useState, useEffect } from 'react';
import { Bot, X, Send, Minimize2, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { servicesData } from '@/data/services';

const AIChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ type: 'user' | 'bot'; text: string }[]>([
    { type: 'bot', text: 'Hello! Welcome to Softbeem. How can I assist you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const getServiceInfo = (query: string) => {
    const services = [...servicesData.tech, ...servicesData.legal];
    const relevantServices = services.filter(service => 
      service.title.toLowerCase().includes(query.toLowerCase()) ||
      service.features?.some(feature => 
        feature.toLowerCase().includes(query.toLowerCase())
      )
    );

    if (relevantServices.length > 0) {
      return relevantServices.map(service => `
${service.title}:
${service.features?.join('\n')}
      `).join('\n\n');
    }
    return null;
  };

  const getContactInfo = () => {
    return "To speak with a specialist, please call: +91-XXXXXXXXXX\nOr schedule a meeting through our website.";
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim().toLowerCase();
    setMessages(prev => [...prev, { type: 'user', text: userMessage }]);
    setIsTyping(true);

    try {
      // Initial service inquiry
      if (userMessage.includes('service') || userMessage.includes('services')) {
        const serviceOptions = `What type of service are you looking for? Please select an option:

1️⃣ Technology Services
2️⃣ Legal & Compliance Services

Please type the number (1 or 2) to learn more about specific services.`;

        setMessages(prev => [...prev, { type: 'bot', text: serviceOptions }]);
        setIsTyping(false);
        setInput('');
        return;
      }

      // Handle numeric selections for service categories
      if (userMessage === '1') {
        const techServices = `Here are our Technology Services:

🔷 Blockchain Development:
   1. Smart Contract Development
   2. NFT Marketplace
   3. Crypto Exchange
   4. DApp Development

🔷 IT Solutions:
   5. Web Development
   6. Mobile Apps
   7. Cloud Services
   8. Game Development

🔷 Digital Marketing:
   9. Digital Marketing Services

Please type a number (1-9) to get detailed information about any service.`;

        setMessages(prev => [...prev, { type: 'bot', text: techServices }]);
        setIsTyping(false);
        setInput('');
        return;
      }

      if (userMessage === '2') {
        const legalServices = `Here are our Legal & Compliance Services:

🔷 Company Setup:
   1. Private Limited Registration
   2. Public Limited Registration
   3. LLP Registration
   4. OPC Registration

🔷 Compliance:
   5. ROC Compliance
   6. Corporate Governance
   7. SEBI Compliance
   8. Annual Returns Filing

🔷 Advisory:
   9. Legal Documentation
   10. Corporate Advisory

Please type a number (1-10) to get detailed information about any service.`;

        setMessages(prev => [...prev, { type: 'bot', text: legalServices }]);
        setIsTyping(false);
        setInput('');
        return;
      }

      // Check for specific service-related queries
      const serviceInfo = getServiceInfo(userMessage);
      if (serviceInfo) {
        setMessages(prev => [...prev, { 
          type: 'bot', 
          text: `Here's what I found about our services:\n\n${serviceInfo}\n\nWould you like to speak with a specialist about these services?` 
        }]);
        setIsTyping(false);
        setInput('');
        return;
      }

      // Check for contact-related queries
      if (userMessage.toLowerCase().includes('contact') || 
          userMessage.toLowerCase().includes('specialist') || 
          userMessage.toLowerCase().includes('talk')) {
        setMessages(prev => [...prev, { 
          type: 'bot', 
          text: getContactInfo() 
        }]);
        setIsTyping(false);
        setInput('');
        return;
      }

      // Default API call for other queries
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();
      setMessages(prev => [...prev, { type: 'bot', text: data.response }]);
    } catch (error) {
      setMessages(prev => [...prev, { 
        type: 'bot', 
        text: 'Sorry, I encountered an error. Please try again.' 
      }]);
    }

    setIsTyping(false);
    setInput('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          className="fixed right-4 bottom-4 w-80 bg-black border border-green-500/20 rounded-lg shadow-lg overflow-hidden z-50"
        >
          <div className="p-4 bg-green-500/10 flex justify-between items-center border-b border-green-500/20">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5 text-green-400" />
              <h3 className="text-white font-semibold">Softbeem Assistant</h3>
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
                <div className={`max-w-[80%] p-3 rounded-lg whitespace-pre-wrap ${
                  message.type === 'user' 
                    ? 'bg-green-500/20 text-white' 
                    : 'bg-zinc-800 text-gray-200'
                }`}>
                  {message.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-zinc-800 text-gray-200 p-3 rounded-lg">
                  Typing...
                </div>
              </div>
            )}
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
          className="fixed bottom-4 right-4 p-4 bg-green-500/20 hover:bg-green-500/30 rounded-full text-green-400 shadow-lg z-50"
          onClick={() => setIsOpen(true)}
        >
          <Bot className="h-6 w-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default AIChatBot;
