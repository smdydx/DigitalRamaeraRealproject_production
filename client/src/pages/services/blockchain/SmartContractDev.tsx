import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Code, ArrowRight } from "lucide-react";

const SmartContractDev = () => {
  const technologies = [
    { name: "Solidity", icon: "💎" },
    { name: "Rust", icon: "⚙️" },
    { name: "Vyper", icon: "🐍" },
    { name: "Web3.js", icon: "🌐" },
    { name: "Hardhat", icon: "🏗️" },
    { name: "Truffle", icon: "🔧" },
  ];

  const features = [
    {
      title: "Custom Smart Contract Development",
      description: "We design and develop smart contracts tailored to your specific business requirements, ensuring functionality, efficiency, and scalability.",
      image: "/images/smartcontract.jpg",
    },
    {
      title: "Smart Contract Auditing",
      description: "We thoroughly review smart contracts to detect vulnerabilities, optimize performance, and guarantee security before deployment",
      image: "/images/SmartContractAudit.jpg",
    },
    {
      title: "DeFi Protocol Development",
      description: "We build secure and scalable decentralized finance (DeFi) protocols to help you launch innovative financial products on blockchain.",
      image: "/images/DeFiProtocol.jpg",
    },
  ];

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-zinc-900 to-black overflow-hidden pt-24">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,_rgba(0,255,0,0.1)_0%,_transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,_rgba(0,128,0,0.1)_0%,_transparent_50%)] pointer-events-none" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-4 md:px-6 lg:px-8"
      >
        {/* Hero Section */}
        <motion.div 
          variants={fadeIn("up", "tween", 0.2, 1)} 
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Code className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent mb-6">
            Smart Contract Development
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg md:text-xl">
            Expert smart contract development services with a focus on security, efficiency, and scalability.
          </p>
        </motion.div>

        {/* Hero Content Section */}
        <motion.div 
          variants={fadeIn("up", "tween", 0.3, 1)} 
          className="flex flex-col lg:flex-row gap-8 md:gap-12 mb-16 md:mb-24"
        >
          <div className="w-full lg:w-1/2 h-64 md:h-96 overflow-hidden rounded-xl shadow-lg">
            <img
              src="/images/smartcontract.jpg"
              alt="Smart Contract Banner"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="w-full lg:w-1/2 lg:pl-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
              Comprehensive Smart Contract Solutions
            </h2>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
              "Smart contracts are the backbone of decentralized applications and blockchain solutions. Our team specializes in crafting highly secure, efficient, and tailored smart contracts that meet your unique business needs."
            </p>
            <div className="mt-6 md:mt-8">
              <Button className="w-full md:w-auto">
                Get Started <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          variants={fadeIn("up", "tween", 0.4, 1)} 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24"
        >
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl border border-green-500/10 hover:border-green-500/30 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-black/40" />
              <div className="relative p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base">{feature.description}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Technologies Section */}
        <motion.div 
          variants={fadeIn("up", "tween", 0.5, 1)} 
          className="mb-16 md:mb-24"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
            Technologies We Use
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
            {technologies.map((tech, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center p-4 md:p-6 rounded-xl bg-zinc-900/50 border border-green-500/10 hover:border-green-500/30 transition-all duration-300"
              >
                <span className="text-3xl md:text-4xl mb-2 md:mb-3">{tech.icon}</span>
                <span className="font-medium text-sm md:text-base text-center">{tech.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Our Approach Section */}
        <motion.div 
          variants={fadeIn("up", "tween", 0.6, 1)} 
          className="mb-16 md:mb-24"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
            Our Approach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Approach Cards */}
            {[
              {
                icon: "💡",
                title: "Consultation",
                content: "Expert guidance through every phase of development",
                quote: "Helping you turn ideas into reality."
              },
              {
                icon: "🚀",
                title: "Development",
                content: "Secure, scalable, and robust blockchain solutions",
                quote: "Building the future of decentralized systems."
              },
              {
                icon: "🔒",
                title: "Security & Audits",
                content: "Comprehensive security checks and optimizations",
                quote: "Your safety is our priority."
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="p-6 md:p-8 bg-zinc-900/50 border border-green-500/10 hover:border-green-500/30 rounded-2xl transition-all duration-300"
              >
                <div className="text-4xl md:text-5xl mb-4 md:mb-6 text-center">{item.icon}</div>
                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 md:mb-4 text-center">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base mb-4 text-center">
                  {item.content}
                </p>
                <p className="text-green-400/80 text-sm italic text-center">
                  "{item.quote}"
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div 
          variants={fadeIn("up", "tween", 0.7, 1)} 
          className="mb-16 md:mb-24"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: "👨💻",
                title: "Expert Team",
                content: "Certified blockchain developers with 5+ years experience"
              },
              {
                icon: "🛡️",
                title: "Security First",
                content: "Multiple audit layers and penetration testing"
              },
              {
                icon: "⚡",
                title: "Fast Delivery",
                content: "Agile development process with quick iterations"
              },
              {
                icon: "🔁",
                title: "Lifetime Support",
                content: "24/7 maintenance and upgrade support"
              }
            ].map((item, index) => (
              <div 
                key={index}
                className="p-6 md:p-8 bg-zinc-900/50 border border-green-500/10 hover:border-green-500/30 rounded-2xl transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg md:text-xl font-semibold text-white mb-2 md:mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div 
          variants={fadeIn("up", "tween", 0.8, 1)} 
          className="mb-16 md:mb-24"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6 md:space-y-8 max-w-3xl mx-auto">
            {[
              {
                question: "What is a Smart Contract?",
                answer: "Self-executing contracts with terms written in code, running on blockchain for automated transactions."
              },
              {
                question: "How do you ensure security?",
                answer: "Through multi-layered audits, formal verification, and continuous monitoring."
              },
              {
                question: "Development timeline?",
                answer: "Typically 2-6 weeks depending on complexity, with agile delivery milestones."
              }
            ].map((faq, index) => (
              <div 
                key={index}
                className="p-6 md:p-8 bg-zinc-900/50 border border-green-500/10 rounded-xl"
              >
                <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-400 text-sm md:text-base">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div 
          variants={fadeIn("up", "tween", 0.9, 1)} 
          className="text-center py-12 md:py-16 bg-zinc-900/50 rounded-2xl border border-green-500/10"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
            Start Your Blockchain Journey
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8 md:mb-10 text-sm md:text-base">
            Ready to implement secure, efficient smart contracts? Let's discuss your project.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button className="w-full md:w-auto bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
              Schedule Consultation
            </Button>
            <Button variant="outline" className="w-full md:w-auto border-green-500/30 text-green-400 hover:bg-green-500/10">
              Contact Sales
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default SmartContractDev;