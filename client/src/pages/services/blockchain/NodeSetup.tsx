import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
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
        "24/7 Monitoring",
      ],
    },
    {
      title: "Security Implementation",
      description: "Military-grade security measures for node protection",
      image: "https://images.pexels.com/photos/8369651/pexels-photo-8369651.jpeg",
      points: [
        "DDoS Protection",
        "SSL/TLS Encryption",
        "IP Whitelisting",
        "Key Management",
      ],
    },
    {
      title: "Performance Optimization",
      description: "Optimized node performance for maximum efficiency",
      image: "https://images.pexels.com/photos/8369815/pexels-photo-8369815.jpeg",
      points: [
        "Resource Optimization",
        "Network Latency Reduction",
        "Caching Strategies",
        "Performance Monitoring",
      ],
    },
    {
      title: "Maintenance & Support",
      description: "Comprehensive maintenance and support services",
      image: "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg",
      points: [
        "Proactive Maintenance",
        "Version Updates",
        "Technical Support",
        "Issue Resolution",
      ],
    },
  ];

  const faqs = [
    {
      question: "What are the hardware requirements for running a blockchain node?",
      answer:
        "Hardware requirements vary by blockchain. Generally, you'll need a minimum of 16GB RAM, 500GB SSD storage, and a reliable internet connection. Enterprise nodes may require more resources based on network traffic and requirements.",
    },
    {
      question: "How do you ensure node security?",
      answer:
        "We implement multiple security layers including firewalls, DDoS protection, SSL/TLS encryption, regular security audits, and automated monitoring systems. We also follow industry best practices for key management and access control.",
    },
    {
      question: "What kind of maintenance is required?",
      answer:
        "Regular maintenance includes software updates, security patches, performance optimization, backup management, and monitoring system health. We provide 24/7 monitoring and proactive maintenance to prevent issues.",
    },
    {
      question: "How long does it take to set up a blockchain node?",
      answer:
        "The time required to set up a blockchain node depends on the network and configuration complexity. Typically, setup can range from a few hours to several days, including testing, security setup, and performance optimization.",
    },
    {
      question: "Can I run multiple nodes for different blockchains?",
      answer:
        "Yes, we provide multi-node setups that allow you to run nodes for different blockchain networks simultaneously. Each node can be configured and managed independently for optimal performance.",
    },
    {
      question: "Do you provide backup solutions for blockchain nodes?",
      answer:
        "Yes, we provide automated backup solutions for blockchain nodes. Backups are taken regularly to ensure data integrity and to avoid potential data loss in case of system failures.",
    },
    {
      question: "Is there any downtime during node upgrades?",
      answer:
        "We aim to minimize downtime during node upgrades by performing them in a staggered manner and ensuring the node’s availability with failover mechanisms in place. Critical updates are applied with minimal disruption.",
    },
    {
      question: "How do I monitor my blockchain node's performance?",
      answer:
        "We offer a comprehensive monitoring system that tracks the health, performance, and security status of your blockchain node. Real-time metrics, alerts, and regular reports are provided to ensure smooth operations.",
    },
  ];

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-zinc-900 to-black overflow-hidden pt-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,_rgba(0,255,0,0.1)_0%,_transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,_rgba(0,128,0,0.1)_0%,_transparent_50%)] pointer-events-none"></div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent mb-6">
            Enterprise Blockchain Node Setup
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg mb-8">
            Deploy and manage high-performance blockchain nodes with enterprise-grade
            security and reliability. Our node infrastructure solutions ensure 99.9%
            uptime and optimal performance.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
            >
              Schedule Demo <ArrowRight className="ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-green-500 text-green-500 hover:bg-green-500/10"
            >
              Contact Us <MessageCircle className="ml-2" />
            </Button>
          </div>
        </motion.div>

        {/* Video and Description Section */}
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="flex flex-col md:flex-row gap-8 mb-16"
        >
          {/* Video Section - Left Side */}
          <div className="flex-1">
            <video
              width="100%"
              height="100%"
              autoPlay
              loop
              muted
              playsInline
              className="rounded-xl shadow-lg"
            >
              <source src="/video/ent-blockvid.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Description Section - Right Side */}
          <div className="flex-1 flex flex-col justify-center text-left">
            <h2 className="text-3xl font-bold text-white mb-4">
              High Performance Blockchain Node Setup
            </h2>
            <p className="text-gray-400 text-lg mb-6">
              Our enterprise-grade blockchain node solutions are designed for
              maximum performance and security. We ensure 24/7 uptime, proactive
              maintenance, and optimal configuration for your blockchain infrastructure.
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

        {/* Other sections (Features, Client Says, Pricing, FAQ) */}
        <motion.div
          variants={fadeIn("up", "tween", 0.4, 1)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-green-500/10 hover:border-green-500/30 transition-all duration-300"
            >
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
          <h2 className="text-3xl font-bold text-center mb-8">
            Supported Blockchain Networks
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
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

       {/* Client Testimonials Section */}
<motion.div variants={fadeIn("up", "tween", 0.5, 1)} className="mb-16">
  <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
  <div className="flex flex-wrap justify-center gap-8">
    <div className="w-full sm:w-80 bg-zinc-900 p-6 rounded-xl shadow-xl">
      <p className="text-gray-300 mb-4">
        "Their team provided exceptional blockchain node solutions for our
        enterprise. Our uptime and performance improved drastically!"
      </p>
      <h3 className="font-bold text-white">John Doe</h3>
      <p className="text-gray-400">CTO, Tech Solutions Inc.</p>
    </div>
    <div className="w-full sm:w-80 bg-zinc-900 p-6 rounded-xl shadow-xl">
      <p className="text-gray-300 mb-4">
        "We were able to implement a secure and high-performing blockchain
        infrastructure thanks to their expert advice and top-notch service."
      </p>
      <h3 className="font-bold text-white">Jane Smith</h3>
      <p className="text-gray-400">Blockchain Architect, FinTech Ltd.</p>
    </div>
    <div className="w-full sm:w-80 bg-zinc-900 p-6 rounded-xl shadow-xl">
      <p className="text-gray-300 mb-4">
        "The blockchain node setup provided by this team helped streamline our
        operations. Their customer service is second to none and the platform is
        very reliable."
      </p>
      <h3 className="font-bold text-white">Mark Taylor</h3>
      <p className="text-gray-400">CEO, Digital Innovations Corp.</p>
    </div>
  </div>
</motion.div>

        {/* Frequently Asked Questions Section */}
        <motion.div variants={fadeIn("up", "tween", 0.7, 1)} className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default NodeSetup;
