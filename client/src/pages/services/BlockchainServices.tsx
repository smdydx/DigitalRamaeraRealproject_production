import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { ArrowRight } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import TechPricing from "@/pages/pricing/TechPricing";

const BlockchainServices = () => {
  const services = [
    {
      title: "Blockchain Consultation & Integration",
      description:
        "From strategy development to implementation, our custom blockchain software development experts will guide you through every stage of your blockchain application development journey.",
      features: [
        "Strategy Development",
        "Implementation Planning",
        "Custom Integration",
        "Expert Guidance",
      ],
      image:
        "https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg",
    },
    {
      title: "Centralized/Decentralized Exchange Development",
      description:
        "We create secure, scalable, and user-friendly trading platforms that facilitate seamless cryptocurrency transactions. With a focus on high performance and regulatory compliance, we develop customized solutions for both centralized and decentralized exchanges.",
      features: [
        "High Performance Trading",
        "Security Implementation",
        "Regulatory Compliance",
        "Custom Order Types",
      ],
      image:
        "https://images.pexels.com/photos/8370776/pexels-photo-8370776.jpeg",
    },
    {
      title: "Decentralized App (dApp) Development",
      description:
        "Our custom Blockchain software development services encompass the entire dApp development lifecycle from ideation to post-launch support. Our deep technical expertise and commitment to innovation ensure the delivery of high-quality dApps that drive value.",
      features: [
        "Smart Contract Integration",
        "Web3 Infrastructure",
        "Post-launch Support",
        "Technical Innovation",
      ],
      image:
        "https://images.pexels.com/photos/8369651/pexels-photo-8369651.jpeg",
    },
    {
      title: "Crypto Wallet Development",
      description:
        "We offer specialized crypto wallet development services designed to provide secure and efficient solutions for managing digital assets. We prioritize security through advanced encryption protocols, multi-signature authentication, and comprehensive security audits.",
      features: [
        "Advanced Encryption",
        "Multi-sig Support",
        "Security Audits",
        "Asset Management",
      ],
      image:
        "https://images.pexels.com/photos/8369815/pexels-photo-8369815.jpeg",
    },
    {
      title: "Layer 2 Development",
      description:
        "We specialize in creating innovative Layer 2 solutions that address the limitations of base-layer blockchains. Our team develops robust Layer 2 protocols that seamlessly integrate with existing blockchain networks.",
      features: [
        "Rollup Implementation",
        "State Channels",
        "Protocol Development",
        "Network Integration",
      ],
      image:
        "https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg",
    },
    {
      title: "Blockchain Protocol Development",
      description:
        "Our expertise spans the entire protocol development lifecycle, from consensus mechanism selection to governance structures. We specialize in designing and implementing scalable blockchain protocols.",
      features: [
        "Consensus Mechanisms",
        "Protocol Design",
        "Network Architecture",
        "Governance Systems",
      ],
      image:
        "https://images.pexels.com/photos/8369648/pexels-photo-8369648.jpeg",
    },
    {
      title: "NFT Marketplace Development",
      description:
        "We focus on creating customizable NFT marketplaces with robust features such as multi-chain support, smart contract integration, and secure payment gateways.",
      features: [
        "Multi-chain Support",
        "Smart Contracts",
        "Payment Integration",
        "Security Features",
      ],
      image:
        "https://images.pexels.com/photos/8369650/pexels-photo-8369650.jpeg",
    },
    {
      title: "Smart Contract Development & Audit",
      description:
        "With rigorous testing and security audits, we ensure your smart contracts are robust and compliant with industry standards.",
      features: [
        "Contract Development",
        "Security Audits",
        "Testing",
        "Compliance",
      ],
      image:
        "https://images.pexels.com/photos/8369653/pexels-photo-8369653.jpeg",
    },
    {
      title: "Metaverse Development",
      description:
        "We specialize in creating immersive metaverse experiences that blur the lines between the physical and digital worlds.",
      features: [
        "AR/VR Integration",
        "Digital Assets",
        "Virtual Worlds",
        "User Experience",
      ],
      image:
        "https://images.pexels.com/photos/8369655/pexels-photo-8369655.jpeg",
    },
  ];

  return (
    <main className="relative min-h-screen bg-zinc-900 overflow-hidden blockchain-services">

      {/* Main content container with safe spacing for header */}
      <div className="container mx-auto px-4 pt-24 sm:pt-28 md:pt-32 pb-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={fadeIn("up", "tween", 0.2, 1)} className="text-center mb-16">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Blockchain Solutions</span>
            <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              Decentralized Project Development
            </h1>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              We specialize in developing robust, scalable, and secure blockchain solutions. From DeFi to NFTs, 
              we build decentralized applications that transform industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-2xl border border-green-500/10 hover:border-green-500/30 transition-all duration-300 backdrop-blur-sm shadow-xl min-h-[400px] flex flex-col hover:scale-[1.02]"
              >
                <div className="absolute inset-0">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-black/40"></div>
                </div>

                <div className="relative p-6 md:p-8 flex-1 flex flex-col">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6 text-sm md:text-base">{service.description}</p>
                  <ul className="space-y-3 mt-auto">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300 text-sm md:text-base">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <motion.div variants={fadeIn("up", "tween", 0.8, 1)} className="text-center mt-16">
            <div className="inline-flex flex-col items-center">
              <p className="text-gray-400 mb-6 text-lg">Ready to start your blockchain journey?</p>
              <Button asChild size="lg" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold text-lg py-6 px-12">
                <Link to="#contact">Get Started</Link>
              </Button>
            </div>
          </motion.div>

          {/* Industries Section */}
          <motion.div variants={fadeIn("up", "tween", 0.9, 1)} className="mt-32">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Industries We Serve</h2>
              <p className="text-gray-400 max-w-3xl mx-auto">
                Our commitment to excellence ensures robust, future-ready solutions that meet industry-specific demands.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {[
                { icon: "🏥", name: "Healthcare" },
                { icon: "🏢", name: "Real Estate" },
                { icon: "🏦", name: "BFSI" },
                { icon: "🌾", name: "Agriculture" },
                { icon: "🚛", name: "Logistics" },
                { icon: "🏪", name: "Retail" },
                { icon: "🎬", name: "Entertainment" },
                { icon: "✈️", name: "Travel And Tourism" },
                { icon: "🎓", name: "Education" },
                { icon: "⚡", name: "Energy" },
              ].map((industry) => (
                <div key={industry.name} className="flex flex-col items-center p-6 rounded-2xl bg-zinc-900/50 border border-green-500/10 hover:border-green-500/30 transition-all duration-300">
                  <span className="text-4xl mb-4">{industry.icon}</span>
                  <h3 className="text-lg font-medium text-center">{industry.name}</h3>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Frameworks Section */}
          <motion.div variants={fadeIn("up", "tween", 1.0, 1)} className="mt-32">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Blockchain Frameworks We Utilize</h2>
              <p className="text-gray-400 max-w-3xl mx-auto">
                Our team of experienced blockchain developers has a deep understanding of L2 and L3 blockchains and their underlying frameworks.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Polygon zkEVM",
                  description: "First zero-knowledge scaling solution compatible with Ethereum Virtual Machine for smart contracts.",
                  icon: "⬡"
                },
                {
                  name: "zkSync Hyperchains",
                  description: "Advanced blockchain architecture with parallel zkEVM instances achieving consensus on Ethereum's Layer 1.",
                  icon: "⟷"
                },
                {
                  name: "Avalanche Subnets",
                  description: "Custom blockchains enabling infinite scalability with sovereign networks defining their own rules.",
                  icon: "△"
                },
                {
                  name: "Cosmos SDK",
                  description: "Open-source toolkit for building multi-asset public PoS and permissioned PoA blockchains.",
                  icon: "◎"
                },
                {
                  name: "Polkadot Parachains",
                  description: "Permissionless platform for launching custom chains, supporting both Layer 2 and Layer 3.",
                  icon: "◉"
                },
                {
                  name: "Arbitrum Orbit",
                  description: "Permissionless platform for launching custom chains, supporting both Layer 2 and Layer 3.",
                  icon: "◈"
                },
                {
                  name: "Parity Substrate",
                  description: "Open-source framework for building efficient, flexible, and modular blockchains by Parity Technologies.",
                  icon: "⬢"
                },
                {
                  name: "OP Stack",
                  description: "Standardized development stack for creating production-ready Layer 2 blockchains, similar to OP Mainnet.",
                  icon: "⬡"
                }
              ].map((framework) => (
                <div key={framework.name} className="relative p-8 rounded-2xl bg-zinc-900/50 border border-green-500/10 hover:border-green-500/30 transition-all duration-300 group">
                  <div className="text-3xl mb-4 text-primary">{framework.icon}</div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{framework.name}</h3>
                  <p className="text-gray-400 text-sm">{framework.description}</p>
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="h-5 w-5 text-primary" />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Technology Stack */}
          <motion.div variants={fadeIn("up", "tween", 1.1, 1)} className="mt-32">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Technology Stack</h2>
              <p className="text-gray-400 max-w-3xl mx-auto">
                We leverage cutting-edge technologies and platforms being practiced in the global market.
              </p>
            </div>

            <div className="space-y-8">
              {[
                { 
                  name: "Mobile", 
                  icon: "📱",
                  techs: [
                    { name: "Kotlin", icon: "🤖" },
                    { name: "Ionic", icon: "⚡" },
                    { name: "Swift", icon: "🍎" },
                    { name: "iOS", icon: "📱" },
                    { name: "Windows", icon: "🪟" },
                    { name: "AR", icon: "👓" },
                    { name: "VR", icon: "🥽" },
                    { name: "Beacon", icon: "📍" },
                    { name: "Wearables", icon: "⌚" }
                  ]
                },
                { 
                  name: "Frontend",
                  icon: "🎨",
                  techs: [
                    { name: "HTML", icon: "📄" },
                    { name: "React", icon: "⚛️" },
                    { name: "Angular", icon: "🅰️" },
                    { name: "TypeScript", icon: "📘" },
                    { name: "CSS", icon: "🎨" }
                  ]
                },
                { 
                  name: "Backend",
                  icon: "⚙️",
                  techs: [
                    { name: "Express.js", icon: "🚂" },
                    { name: "Node.js", icon: "💚" },
                    { name: "Nest.js", icon: "🪺" },
                    { name: "Rust", icon: "⚙️" }
                  ]
                },
                { 
                  name: "Smart Contract",
                  icon: "📜",
                  techs: [
                    { name: "Solidity", icon: "💎" },
                    { name: "Move", icon: "🔄" }
                  ]
                },
                { 
                  name: "CMS",
                  icon: "📝",
                  techs: [
                    { name: "WordPress", icon: "📰" }
                  ]
                }
              ].map((category) => (
                <div key={category.name} className="rounded-xl overflow-hidden bg-zinc-900/50 border border-green-500/10">
                  <div className="bg-primary/10 p-4">
                    <h3 className="font-medium text-primary">{category.name}</h3>
                  </div>
                  <div className="p-6 flex flex-wrap gap-4">
                    {category.techs.map((tech) => (
                      <span key={tech.name} className="px-4 py-2 rounded-full bg-zinc-800 text-sm flex items-center gap-2 hover:bg-zinc-700 transition-colors">
                        <span>{tech.icon}</span>
                        <span>{tech.name}</span>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div variants={fadeIn("up", "tween", 1.2, 1)} className="mt-32">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            </div>

            <div className="space-y-4 max-w-3xl mx-auto">
              {[
                {
                  question: "What are the key considerations when choosing a blockchain framework for enterprise solutions?",
                  answer: "Enterprise blockchain selection requires careful evaluation of multiple factors:",
                  points: [
                    "Scalability & Performance - TPS capacity and network latency",
                    "Security Architecture - Consensus mechanisms and encryption standards",
                    "Integration Capabilities - APIs and compatibility with existing systems",
                    "Smart Contract Functionality - Programming flexibility and security features",
                    "Maintenance & Support - Long-term viability and community support"
                  ]
                },
                {
                  question: "What are the cost implications of implementing blockchain technology in existing business infrastructure?",
                  answer: "The cost structure for blockchain implementation includes:",
                  points: [
                    "Initial Development - Smart contract and DApp development costs",
                    "Integration Expenses - System adaptation and API development",
                    "Infrastructure Costs - Node operation and network maintenance",
                    "Training & Support - Team education and ongoing technical support",
                    "Scaling Costs - Network expansion and performance optimization"
                  ]
                },
                {
                  question: "How does blockchain technology ensure data security and privacy for enterprises?",
                  answer: "Enterprise blockchain security is maintained through multiple layers:",
                  points: [
                    "Advanced Cryptography - State-of-the-art encryption protocols",
                    "Consensus Mechanisms - Distributed validation and verification",
                    "Access Control - Role-based permissions and identity management",
                    "Immutable Ledger - Tamper-proof transaction records",
                    "Network Security - Protected node communication and firewall systems"
                  ]
                },
                {
                  question: "How do you ensure the scalability of your blockchain solutions when dealing with high transaction volumes?",
                  answer: "Our scalability approach encompasses multiple strategies:",
                  points: [
                    "Layer 2 Solutions - Off-chain processing for faster transactions",
                    "Sharding Implementation - Parallel processing capabilities",
                    "Optimized Consensus - Efficient transaction validation",
                    "Network Architecture - Distributed node structure",
                    "Performance Monitoring - Real-time optimization and adjustment"
                  ]
                },
                {
                  question: "Is Blockchain Hackable or Not Hackable?",
                  answer: "Blockchain security is multi-faceted:",
                  points: [
                    "Cryptographic Protection - Military-grade encryption protocols",
                    "Distributed Nature - No single point of failure",
                    "Consensus Security - Multiple validation layers",
                    "Continuous Monitoring - Real-time threat detection",
                    "Regular Auditing - Proactive vulnerability assessment"
                  ]
                }
              ].map((faq, index) => (
                <div 
                  key={index} 
                  className="rounded-xl border border-green-500/10 hover:border-green-500/30 transition-all duration-300 bg-zinc-900/50 hover:bg-zinc-900/70"
                >
                  <Accordion type="single" collapsible>
                    <AccordionItem value={`item-${index}`}>
                      <AccordionTrigger className="px-6 py-4 text-left hover:bg-green-500/5 transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <span className="text-lg font-medium">{faq.question}</span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 py-4">
                        <p className="text-primary font-medium mb-4">{faq.answer}</p>
                        <ul className="space-y-3">
                          {faq.points.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-3 group">
                              <span className="w-1.5 h-1.5 bg-green-500/50 rounded-full mt-2 group-hover:bg-green-500 transition-colors"></span>
                              <span className="text-gray-400 group-hover:text-gray-300 transition-colors">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Professional Section */}
          <motion.div variants={fadeIn("up", "tween", 1.3, 1)} className="mt-32">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Professional Journey</h2>
              <p className="text-gray-400 max-w-3xl mx-auto">
                We bring years of expertise and proven success in blockchain development
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  number: "150+",
                  label: "Projects Completed",
                  icon: "🚀"
                },
                {
                  number: "50+",
                  label: "Expert Developers",
                  icon: "👨‍💻"
                },
                {
                  number: "25+",
                  label: "Countries Served",
                  icon: "🌍"
                },
                {
                  number: "10+",
                  label: "Years Experience",
                  icon: "⚳"
                }
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="bg-gradient-to-br from-zinc-900/50 to-zinc-900/30 border border-green-500/10 hover:border-green-500/30 rounded-2xl p-8 text-center backdrop-blur-sm shadow-lg hover:shadow-green-500/5 transition-all duration-300 hover:scale-105"
                >
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              <div className="bg-zinc-900/50 border border-green-500/10 hover:border-green-500/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Our Expertise</h3>
                <ul className="space-y-3">
                  {[
                    "Smart Contract Development & Auditing",
                    "DeFi Protocol Implementation",
                    "NFT Marketplace Development",
                    "Cross-chain Solutions",
                    "Blockchain Security"
                  ].map((item) => (
                    <li key={item} className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-zinc-900/50 border border-green-500/10 hover:border-green-500/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-4">Why Choose Us</h3>
                <ul className="space-y-3">
                  {[
                    "End-to-end Blockchain Solutions",
                    "Proven Track Record",
                    "Industry-leading Security Standards",
                    "24/7 Technical Support",
                    "Customized Development Approach"
                  ].map((item) => (
                    <li key={item} className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <TechPricing />
    </main>
  );
};

export default BlockchainServices;