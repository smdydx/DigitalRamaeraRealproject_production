
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Server, ArrowRight, MessageCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const NodeSetup = () => {
  const technologies = [
    { name: "Ethereum", icon: "🌐" },
    { name: "Bitcoin", icon: "₿" },
    { name: "Polkadot", icon: "⚛️" },
    { name: "Solana", icon: "☀️" },
    { name: "Ramestta", icon: "🔷" },
    { name: "Hyperledger", icon: "🔗" },
    { name: "Cosmos", icon: "✨" },
    { name: "Avalanche", icon: "△" },
  ];

  const features = [
    {
      title: "Node Infrastructure",
      description: "Enterprise-grade blockchain node setup and configuration",
      image: "https://images.pexels.com/photos/8370776/pexels-photo-8370776.jpeg",
      points: [
        "High-Availability Architecture",
        "Load Balancing",
        "Automated Failover",
        "24/7 Monitoring"
      ]
    },
    {
      title: "Security Implementation",
      description: "Military-grade security measures for node protection",
      image: "https://images.pexels.com/photos/8369651/pexels-photo-8369651.jpeg",
      points: [
        "DDoS Protection",
        "SSL/TLS Encryption",
        "IP Whitelisting",
        "Key Management"
      ]
    },
    {
      title: "Performance Optimization",
      description: "Optimized node performance for maximum efficiency",
      image: "https://images.pexels.com/photos/8369815/pexels-photo-8369815.jpeg",
      points: [
        "Resource Optimization",
        "Network Latency Reduction",
        "Caching Strategies",
        "Performance Monitoring"
      ]
    },
    {
      title: "Maintenance & Support",
      description: "Comprehensive maintenance and support services",
      image: "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg",
      points: [
        "Proactive Maintenance",
        "Version Updates",
        "Technical Support",
        "Issue Resolution"
      ]
    }
  ];

  const faqs = [
    {
      question: "What are the hardware requirements for running a blockchain node?",
      answer: "Hardware requirements vary by blockchain. Generally, you'll need a minimum of 16GB RAM, 500GB SSD storage, and a reliable internet connection. Enterprise nodes may require more resources based on network traffic and requirements."
    },
    {
      question: "How do you ensure node security?",
      answer: "We implement multiple security layers including firewalls, DDoS protection, SSL/TLS encryption, regular security audits, and automated monitoring systems. We also follow industry best practices for key management and access control."
    },
    {
      question: "What kind of maintenance is required?",
      answer: "Regular maintenance includes software updates, security patches, performance optimization, backup management, and monitoring system health. We provide 24/7 monitoring and proactive maintenance to prevent issues."
    },
    {
      question: "Can you help with custom blockchain node setup?",
      answer: "Yes, we specialize in custom node configurations for private blockchains, consortium networks, and specialized use cases. Our team can design and implement solutions tailored to your specific requirements."
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
            <Server className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent mb-6">
            Enterprise Blockchain Node Setup
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg mb-8">
            Deploy and manage high-performance blockchain nodes with enterprise-grade security and reliability. Our node infrastructure solutions ensure 99.9% uptime and optimal performance.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
              Schedule Demo <ArrowRight className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-green-500 text-green-500 hover:bg-green-500/10">
              Contact Us <MessageCircle className="ml-2" />
            </Button>
          </div>
        </motion.div>

        <motion.div variants={fadeIn("up", "tween", 0.3, 1)} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.points.map((point, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div variants={fadeIn("up", "tween", 0.4, 1)} className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Supported Blockchain Networks</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
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
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-green-500/10 rounded-lg bg-zinc-900/50">
                  <AccordionTrigger className="px-6 py-4 text-left hover:bg-green-500/5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-400">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>

        <motion.div variants={fadeIn("up", "tween", 0.6, 1)} className="text-center">
          <div className="max-w-2xl mx-auto mb-8">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-gray-400 mb-8">
              Contact our team to discuss your node infrastructure requirements and get a personalized solution.
            </p>
          </div>
          <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
            Schedule Consultation <ArrowRight className="ml-2" />
          </Button>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default NodeSetup;
