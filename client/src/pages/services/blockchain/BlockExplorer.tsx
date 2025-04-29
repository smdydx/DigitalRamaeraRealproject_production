
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Search, ArrowRight, Database, Shield, Zap, BarChart } from "lucide-react";

const BlockExplorer = () => {
  const technologies = [
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "GraphQL", icon: "◈" },
    { name: "PostgreSQL", icon: "🐘" },
    { name: "Redis", icon: "🔄" },
    { name: "Ramestta", icon: "🔷" },
    { name: "Web3.js", icon: "🌐" },
  ];

  const features = [
    {
      icon: <Database className="w-6 h-6" />,
      title: "Transaction Tracking",
      description: "Real-time transaction monitoring and history with advanced filtering capabilities",
      image: "https://images.pexels.com/photos/8370776/pexels-photo-8370776.jpeg",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Smart Contract Analysis",
      description: "Detailed contract verification, interaction tracking, and code analysis tools",
      image: "https://images.pexels.com/photos/8369651/pexels-photo-8369651.jpeg",
    },
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Analytics Dashboard",
      description: "Comprehensive blockchain network statistics and visual data representation",
      image: "https://images.pexels.com/photos/8369815/pexels-photo-8369815.jpeg",
    }
  ];

  const faqs = [
    {
      question: "What features does your block explorer include?",
      answer: "Our block explorer includes real-time transaction tracking, smart contract verification, address monitoring, token tracking, and advanced analytics dashboard."
    },
    {
      question: "How does the smart contract verification process work?",
      answer: "The verification process involves uploading source code, comparing bytecode, and providing compilation settings to ensure contract authenticity."
    },
    {
      question: "Can I customize the explorer's interface?",
      answer: "Yes, we offer full customization options for UI/UX, branding, and feature sets to match your specific requirements."
    }
  ];

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-zinc-900 to-black overflow-hidden pt-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,_rgba(0,255,0,0.1)_0%,_transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,_rgba(0,128,0,0.1)_0%,_transparent_50%)] pointer-events-none"></div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-4 mt-20"
      >
        <motion.div variants={fadeIn("up", "tween", 0.2, 1)} className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Search className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent mb-6">
            Block Explorer Development
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Build powerful and intuitive blockchain explorers with advanced search capabilities and real-time analytics
          </p>
        </motion.div>

        <motion.div variants={fadeIn("up", "tween", 0.3, 1)} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl border border-green-500/10 hover:border-green-500/30 transition-all duration-300">
              <div className="absolute inset-0">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-black/40"></div>
              </div>
              <div className="relative p-6">
                <div className="flex items-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div variants={fadeIn("up", "tween", 0.4, 1)} className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Technologies We Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="flex items-center justify-center p-4 rounded-lg bg-zinc-900/50 border border-green-500/10 hover:border-green-500/30 transition-all duration-300">
                <span className="text-2xl mr-2">{tech.icon}</span>
                <span className="font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeIn("up", "tween", 0.5, 1)} className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="p-6 rounded-lg bg-zinc-900/50 border border-green-500/10">
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeIn("up", "tween", 0.6, 1)} className="text-center">
          <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
            Get Demo <ArrowRight className="ml-2" />
          </Button>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default BlockExplorer;
