
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Code, ArrowRight, Shield, Zap, Globe } from "lucide-react";

const DappDev = () => {
  const technologies = [
    { name: "Ethereum", icon: "🌐" },
    { name: "Solana", icon: "☀️" },
    { name: "Polygon", icon: "⬡" },
    { name: "Ramestta", icon: "🔷" },
    { name: "React.js", icon: "⚛️" },
    { name: "Solidity", icon: "💎" },
    { name: "IPFS", icon: "📦" },
  ];

  const services = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Custom dApp Development",
      description: "End-to-end dApp solutions across industries",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Smart Contract Development",
      description: "Secure and optimized contracts for various chains",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "DeFi Solutions",
      description: "Lending platforms, DEXs, and yield farming solutions",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "NFT Marketplaces",
      description: "End-to-end NFT platform design and deployment",
    },
  ];

  const whyChooseUs = [
    {
      title: "Fast Deployment",
      description: "Quick turnaround with efficient development processes",
    },
    {
      title: "Secure Architecture",
      description: "Built with security-first approach and best practices",
    },
    {
      title: "Scalable Solutions",
      description: "Future-ready applications that grow with your needs",
    },
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
        className="container mx-auto px-4 mt-20"
      >
        {/* Hero Section */}
        <motion.div variants={fadeIn("up", "tween", 0.2, 1)} className="text-center mb-20">
          <div className="space-y-2">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              Building Future-Ready dApps for a Decentralized World
            </h1>
          </div>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg mb-8">
            We specialize in developing secure, scalable, and innovative decentralized applications across multiple blockchain platforms including Ethereum, Solana, and Polygon. Our expertise ensures your vision comes to life with cutting-edge technology.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
          >
            Request a Demo <ArrowRight className="ml-2" />
          </Button>
        </motion.div>

        {/* Services */}
        <motion.div variants={fadeIn("up", "tween", 0.3, 1)} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border border-green-500/10 hover:border-green-500/30 transition-all duration-300 bg-black/20"
            >
              <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Why Choose Us */}
        <motion.div variants={fadeIn("up", "tween", 0.4, 1)} className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border border-green-500/10 hover:border-green-500/30 transition-all duration-300 bg-black/20 text-center"
              >
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div variants={fadeIn("up", "tween", 0.5, 1)} className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {[
              {
                question: "What is a dApp?",
                answer: "A dApp (decentralized application) is a software application that runs on a distributed computing system - typically blockchain networks. Unlike traditional apps, dApps operate on peer-to-peer networks without central authorities, offering enhanced security, transparency, and user control. They commonly integrate with digital wallets and smart contracts to provide trustless interactions and automated functionality."
              },
              {
                question: "How long does it take to develop a dApp?",
                answer: "The development timeline for a dApp typically ranges from 2-6 months, depending on complexity. A basic dApp might take 2-3 months, while complex platforms with multiple smart contracts and advanced features could take 4-6 months or more. Factors affecting timeline include: blockchain platform selection, smart contract complexity, UI/UX requirements, integration needs, and testing/auditing processes."
              },
              {
                question: "Which blockchains do you support?",
                answer: "We provide comprehensive development services across multiple blockchain platforms including: Ethereum (most popular for dApps and DeFi), Binance Smart Chain (high performance, low fees), Polygon (scalable Ethereum sidechain), Solana (high-speed, low-cost transactions), Avalanche (fast finality, subnet support), and other EVM-compatible chains. We help choose the best platform based on your specific needs for speed, cost, and security."
              },
              {
                question: "Do you provide smart contract auditing?",
                answer: "Yes, we offer comprehensive smart contract auditing services as part of our dApp development process. Our audit includes: automated vulnerability scanning, manual code review, gas optimization analysis, business logic verification, security best practices assessment, and formal verification for critical contracts. We partner with leading audit firms for additional security assurance on high-value contracts."
              },
              {
                question: "How much does it cost to build a dApp?",
                answer: "dApp development costs vary based on several factors: project complexity (simple dApp: $20,000-50,000, complex platform: $50,000-200,000+), features required (smart contracts, user interface, integrations), blockchain platform chosen (gas fees, deployment costs), team size and expertise needed, and ongoing maintenance requirements. We provide detailed cost breakdowns during consultation and offer flexible engagement models to suit different budgets."
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

        {/* Technologies */}
        <motion.div variants={fadeIn("up", "tween", 0.6, 1)} className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Technologies We Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 rounded-lg bg-zinc-900/50 border border-green-500/10 hover:border-green-500/30 transition-all duration-300"
              >
                <span className="text-2xl mr-2">{tech.icon}</span>
                <span className="font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default DappDev;
