import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Search, ArrowRight, Database, Shield, BarChart, Monitor, PlugZap } from "lucide-react";
import { Calendar } from "lucide-react";


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
    },
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
        className="container mx-auto px-4 mt-12"
      >
        {/* Heading Section */}
        <motion.div variants={fadeIn("up", "tween", 0.2, 1)} className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent mb-6">
            Block Explorer Development
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Build powerful and intuitive blockchain explorers with advanced search capabilities and real-time analytics. Get seamless smart contract verification and data transparency tailored to your needs.
          </p>
        </motion.div>

        {/* Left and Right Split Section */}
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="flex flex-col md:flex-row gap-8 mb-16"
        >
          {/* Left Section - Video */}
          <div className="flex-1">
            <video
              src="/video/blockexpvideo.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Right Section */}
          <div className="flex-1 flex flex-col justify-center text-left">
            <h2 className="text-3xl font-bold text-white mb-4">
              Advanced Blockchain Explorer Features
            </h2>
            <p className="text-gray-400 text-lg mb-6">
              Leverage powerful features such as real-time transaction tracking, smart contract analysis, and a detailed analytics dashboard for enhanced blockchain visibility.
            </p>
            <div className="flex gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
              >
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-500 text-green-500 hover:bg-green-500/10"
              >
                Learn More
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Features Section */}
        <motion.div variants={fadeIn("up", "tween", 0.4, 1)} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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

        {/* 🔥 NEW Important Sections */}
        <motion.div variants={fadeIn("up", "tween", 0.5, 1)} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="p-6 rounded-xl border border-green-500/10 bg-zinc-900/50 hover:border-green-500/30 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <Monitor className="w-6 h-6 text-green-500" />
              <h3 className="text-xl font-semibold text-white">Real-Time Monitoring</h3>
            </div>
            <p className="text-gray-400">
              Instantly visualize blockchain activity with live data updates and intuitive charting. Stay ahead with second-by-second accuracy.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-green-500/10 bg-zinc-900/50 hover:border-green-500/30 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <PlugZap className="w-6 h-6 text-green-500" />
              <h3 className="text-xl font-semibold text-white">Custom Integration Support</h3>
            </div>
            <p className="text-gray-400">
              Seamlessly integrate the explorer with your blockchain, dApp, or business logic. Flexible APIs and modular architecture ensure perfect fit.
            </p>
          </div>
        </motion.div>
        <motion.div
  variants={fadeIn("up", "tween", 0.3, 1)}
  className="mb-16"
>
  <h2 className="text-3xl font-bold text-center mb-8">Roadmap</h2>
  
  <div className="flex flex-col items-center justify-center space-y-8">
    {/* Example Roadmap Point 1 */}
    <div className="text-center p-6 bg-zinc-900/50 border border-green-500/10 rounded-lg">
      <h3 className="text-xl font-bold text-white">Phase 1</h3>
      <p className="text-gray-400">
        Start the development of core features, including transaction tracking and blockchain analytics.
      </p>
    </div>

    {/* Example Roadmap Point 2 */}
    <div className="text-center p-6 bg-zinc-900/50 border border-green-500/10 rounded-lg">
      <h3 className="text-xl font-bold text-white">Phase 2</h3>
      <p className="text-gray-400">
        Integrate advanced tools such as smart contract analysis and decentralized application support.
      </p>
    </div>

    {/* Example Roadmap Point 3 */}
    <div className="text-center p-6 bg-zinc-900/50 border border-green-500/10 rounded-lg">
      <h3 className="text-xl font-bold text-white">Phase 3</h3>
      <p className="text-gray-400">
        Final testing, security audits, and preparation for production release.
      </p>
    </div>
  </div>
</motion.div>



        {/* Technologies Section */}
        <motion.div variants={fadeIn("up", "tween", 0.5, 1)} className="mb-16">
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
        

        {/* FAQs Section */}
        <motion.div variants={fadeIn("up", "tween", 0.6, 1)} className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-zinc-900/50 border border-green-500/10 rounded-lg p-4 transition-all group"
              >
                <summary className="font-semibold text-white cursor-pointer list-none text-lg group-open:text-primary">
                  {faq.question}
                </summary>
                <p className="mt-2 text-gray-400">{faq.answer}</p>
              </details>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div variants={fadeIn("up", "tween", 0.7, 1)} className="text-center">
          <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
            Get Demo <ArrowRight className="ml-2" />
          </Button>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default BlockExplorer;