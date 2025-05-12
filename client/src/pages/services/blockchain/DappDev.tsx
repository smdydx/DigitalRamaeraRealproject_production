
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Code, ArrowRight, Shield, Zap, Globe, CheckCircle2, Users, Cpu, Server } from "lucide-react";

const DappDev = () => {
  const technologies = [
    { name: "Ethereum", icon: "🌐", description: "Leading smart contract platform" },
    { name: "Solana", icon: "☀️", description: "High-performance blockchain" },
    { name: "Polygon", icon: "⬡", description: "Ethereum scaling solution" },
    { name: "Ramestta", icon: "🔷", description: "Next-gen blockchain platform" },
    { name: "React.js", icon: "⚛️", description: "Frontend framework" },
    { name: "Solidity", icon: "💎", description: "Smart contract language" },
    { name: "IPFS", icon: "📦", description: "Decentralized storage" },
  ];

  const services = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Custom dApp Development",
      description: "End-to-end dApp solutions tailored for your specific industry needs. We handle everything from smart contract development to frontend implementation.",
      features: ["Industry-specific solutions", "Full-stack development", "Custom UI/UX design"],
      image: "https://images.pexels.com/photos/8370776/pexels-photo-8370776.jpeg"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Smart Contract Development",
      description: "Secure, audited, and optimized smart contracts for various blockchain platforms. Our contracts undergo rigorous testing and security audits.",
      features: ["Security audits", "Gas optimization", "Multi-chain support"],
      image: "https://images.pexels.com/photos/8369651/pexels-photo-8369651.jpeg"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "DeFi Solutions",
      description: "Complete DeFi platform development including DEXs, lending protocols, and yield farming solutions with advanced features.",
      features: ["Automated market makers", "Yield optimization", "Cross-chain bridges"],
      image: "https://images.pexels.com/photos/8369815/pexels-photo-8369815.jpeg"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "NFT Marketplaces",
      description: "Feature-rich NFT marketplace development with minting, trading, and auction capabilities across multiple chains.",
      features: ["Multi-chain support", "Auction system", "Royalty management"],
      image: "https://images.pexels.com/photos/8369813/pexels-photo-8369813.jpeg"
    },
  ];

  const features = [
    {
      icon: <CheckCircle2 className="w-6 h-6 text-green-500" />,
      title: "Security First",
      description: "Built-in security measures and regular audits ensure your dApp remains secure and trustworthy."
    },
    {
      icon: <Users className="w-6 h-6 text-green-500" />,
      title: "Scalable Architecture",
      description: "Future-proof solutions that can handle growing user bases and increasing transaction volumes."
    },
    {
      icon: <Cpu className="w-6 h-6 text-green-500" />,
      title: "High Performance",
      description: "Optimized code and efficient smart contracts for minimal gas fees and fast transactions."
    },
    {
      icon: <Server className="w-6 h-6 text-green-500" />,
      title: "Cross-chain Compatible",
      description: "Support for multiple blockchain networks and seamless cross-chain interactions."
    },
  ];

  const testimonials = [
    {
      name: "John Smith",
      role: "CTO, DeFi Protocol",
      content: "Their dApp development expertise helped us launch our DeFi platform ahead of schedule. The team's technical knowledge and attention to security were impressive.",
      company: "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg"
    },
    {
      name: "Sarah Johnson",
      role: "Founder, NFT Marketplace",
      content: "Working with them was a game-changer for our NFT marketplace. Their understanding of both technical and business aspects made the development process smooth.",
      company: "https://images.pexels.com/photos/8370776/pexels-photo-8370776.jpeg"
    }
  ];

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-zinc-900 to-black overflow-hidden pt-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,_rgba(0,255,0,0.1)_0%,_transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,_rgba(0,128,0,0.1)_0%,_transparent_50%)] pointer-events-none" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        {/* Hero Section */}
        <motion.div variants={fadeIn("up", "tween", 0.2, 1)} className="text-center mb-20">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent leading-tight">
              Transform Your Vision into a Decentralized Reality
            </h1>
            <p className="text-gray-400 max-w-4xl mx-auto text-lg md:text-xl">
              We specialize in building enterprise-grade decentralized applications that combine cutting-edge blockchain technology with seamless user experiences. From DeFi protocols to NFT marketplaces, we bring your blockchain vision to life.
            </p>
            <div className="flex justify-center gap-4 mt-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
              >
                Start Your Project <ArrowRight className="ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-500 text-green-500 hover:bg-green-500/10"
              >
                View Case Studies
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div variants={fadeIn("up", "tween", 0.3, 1)} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl border border-green-500/10 hover:border-green-500/30 transition-all duration-300 bg-black/20"
            >
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-48 object-cover rounded-xl mb-6"
              />
              <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Features */}
        <motion.div variants={fadeIn("up", "tween", 0.4, 1)} className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our dApp Development</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border border-green-500/10 hover:border-green-500/30 transition-all duration-300 bg-black/20"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Technologies */}
        <motion.div variants={fadeIn("up", "tween", 0.5, 1)} className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Technologies We Master</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-zinc-900/50 border border-green-500/10 hover:border-green-500/30 transition-all duration-300"
              >
                <div className="text-2xl mb-2">{tech.icon}</div>
                <div className="font-medium text-white">{tech.name}</div>
                <div className="text-sm text-gray-400">{tech.description}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <motion.div variants={fadeIn("up", "tween", 0.6, 1)} className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Client Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl border border-green-500/10 hover:border-green-500/30 transition-all duration-300 bg-black/20"
              >
                <img
                  src={testimonial.company}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mb-4"
                />
                <p className="text-gray-400 italic mb-4">"{testimonial.content}"</p>
                <div>
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-gray-400">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div variants={fadeIn("up", "tween", 0.7, 1)} className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {[
              {
                question: "What is a dApp and how does it differ from traditional applications?",
                answer: "A dApp (decentralized application) runs on a blockchain network instead of centralized servers. This provides benefits like transparency, immutability, and user ownership of data. Unlike traditional apps, dApps operate on peer-to-peer networks without central authorities."
              },
              {
                question: "How long does it take to develop a dApp?",
                answer: "Development timeline varies based on complexity, typically ranging from 2-6 months. A basic dApp might take 2-3 months, while complex platforms could take 4-6 months or more. Factors include blockchain platform selection, smart contract complexity, UI/UX requirements, and testing needs."
              },
              {
                question: "What blockchains do you support?",
                answer: "We develop dApps across multiple blockchain platforms including Ethereum, Binance Smart Chain, Polygon, Solana, and other EVM-compatible chains. We help choose the best platform based on your specific needs for speed, cost, and security."
              },
              {
                question: "How do you ensure dApp security?",
                answer: "We implement multiple security measures including smart contract audits, penetration testing, and formal verification. Our development process follows blockchain security best practices, and we regularly update our security protocols to address new threats."
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl border border-green-500/10 hover:border-green-500/30 transition-all duration-300 bg-black/20"
              >
                <h3 className="text-xl font-bold text-white mb-4">{faq.question}</h3>
                <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div variants={fadeIn("up", "tween", 0.8, 1)} className="text-center mb-20">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Your dApp?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a roadmap for your decentralized application development.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
          >
            Schedule a Consultation <ArrowRight className="ml-2" />
          </Button>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default DappDev;