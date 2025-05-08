
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Coins, ArrowRight, Shield, Zap, Globe, ChartBar } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const TokenDev = () => {
  const technologies = [
    { name: "Solidity", icon: "💎", desc: "Industry standard for token smart contracts" },
    { name: "Hardhat", icon: "🏗️", desc: "Advanced development environment" },
    { name: "OpenZeppelin", icon: "🛡️", desc: "Secure contract libraries" },
    { name: "Web3.js", icon: "🌐", desc: "Blockchain interaction library" },
    { name: "Ramestta", icon: "🔷", desc: "Custom token development framework" },
    { name: "Truffle", icon: "🔧", desc: "Smart contract testing suite" },
    { name: "Ethers.js", icon: "⚡", desc: "Ethereum utilities and wallet tools" },
  ];

  const serviceTypes = [
    {
      title: "ERC-20 Token Development",
      description: "Create standard fungible tokens for cryptocurrency projects",
      image: "https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg",
      features: [
        "Configurable Supply Mechanisms",
        "Transfer Restrictions",
        "Automated Burning",
        "Detailed Transaction Logging"
      ]
    },
    {
      title: "Security Token Development",
      description: "Develop compliant security tokens for asset tokenization",
      image: "https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg",
      features: [
        "KYC/AML Integration",
        "Dividend Distribution",
        "Voting Rights",
        "Transfer Restrictions"
      ]
    },
    {
      title: "DeFi Token Solutions",
      description: "Custom tokens for decentralized finance applications",
      image: "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg",
      features: [
        "Yield Generation",
        "Liquidity Pool Integration",
        "Staking Mechanisms",
        "Reward Distribution"
      ]
    }
  ];

  const tokenFeatures = [
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Advanced Security Features",
      description: "Multi-signature support, time locks, and advanced access controls"
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "High Performance",
      description: "Optimized gas consumption and efficient transaction processing"
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Cross-chain Compatibility",
      description: "Support for multiple blockchain networks and bridges"
    },
    {
      icon: <ChartBar className="w-8 h-8 text-primary" />,
      title: "Advanced Analytics",
      description: "Real-time tracking and detailed transaction analytics"
    }
  ];

  const faqs = [
    {
      question: "What is the typical timeline for token development?",
      answer: "The development timeline varies based on complexity. Basic ERC-20 tokens can be deployed within 1-2 weeks, while complex DeFi tokens may take 4-6 weeks for development and testing."
    },
    {
      question: "How do you ensure token security?",
      answer: "We implement multiple security measures including formal verification, comprehensive testing, third-party audits, and following established security patterns from OpenZeppelin."
    },
    {
      question: "What blockchain networks do you support?",
      answer: "We support all major networks including Ethereum, Binance Smart Chain, Polygon, Avalanche, and custom blockchain networks."
    },
    {
      question: "Can you help with token listing and marketing?",
      answer: "Yes, we provide end-to-end support including exchange listing assistance, marketing strategy, and community building guidance."
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
        className="container mx-auto px-4"
      >
        {/* Hero Section */}
        <motion.div variants={fadeIn("up", "tween", 0.2, 1)} className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-8">
            <Coins className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent mb-8">
            Enterprise Token Development
          </h1>
          <p className="text-gray-400 max-w-4xl mx-auto text-lg md:text-xl mb-12">
            Create secure, scalable, and customizable tokens for your blockchain project with our enterprise-grade development services. From ERC-20 to complex DeFi tokens, we deliver solutions that meet your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
              Start Your Token Project <ArrowRight className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-green-500/30 text-green-400 hover:bg-green-500/10">
              Schedule Consultation
            </Button>
          </div>
        </motion.div>

        {/* Service Types */}
        <motion.div variants={fadeIn("up", "tween", 0.3, 1)} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {serviceTypes.map((service, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl border border-green-500/10 hover:border-green-500/30 transition-all duration-300">
              <div className="absolute inset-0">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-black/40"></div>
              </div>
              <div className="relative p-8">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Technologies */}
        <motion.div variants={fadeIn("up", "tween", 0.4, 1)} className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Technologies We Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="p-6 rounded-lg bg-zinc-900/50 border border-green-500/10 hover:border-green-500/30 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{tech.icon}</span>
                  <span className="text-xl font-medium">{tech.name}</span>
                </div>
                <p className="text-gray-400 text-sm">{tech.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div variants={fadeIn("up", "tween", 0.5, 1)} className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {tokenFeatures.map((feature, index) => (
              <div key={index} className="p-8 rounded-2xl bg-zinc-900/50 border border-green-500/10 hover:border-green-500/30 transition-all duration-300">
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div variants={fadeIn("up", "tween", 0.6, 1)} className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-green-500/10 rounded-lg px-6">
                  <AccordionTrigger className="text-lg font-medium">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-400">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div variants={fadeIn("up", "tween", 0.7, 1)} className="text-center py-20 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl border border-green-500/10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Launch Your Token?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Get started with our expert team and create a token that stands out in the market.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
            Contact Our Team <ArrowRight className="ml-2" />
          </Button>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default TokenDev;
