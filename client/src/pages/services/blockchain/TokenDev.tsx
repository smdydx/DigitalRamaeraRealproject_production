import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Shield, Coins, Code, Users, Clock, DollarSign, Headphones, ArrowRight } from "lucide-react";
import { testimonialsData } from "@/data/testimonials";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";


const TokenDev = () => {
  const features = [
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: "Expert Token Development",
      description: "Our experienced blockchain developers create secure and compliant tokens across multiple platforms including ERC20, BEP20, and custom blockchain networks."
    },
    {
      icon: <Code className="w-12 h-12 text-primary" />,
      title: "Smart Contract Integration",
      description: "We implement advanced smart contract functionality with features like auto-liquidity generation, reflection rewards, and anti-bot mechanisms."
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Full Development Lifecycle",
      description: "From tokenomics design to deployment and listing support, we handle every aspect of your token launch with professional expertise."
    },
    {
      icon: <Clock className="w-12 h-12 text-primary" />,
      title: "Rapid Development",
      description: "Quick turnaround time without compromising on quality. We ensure your token launches on schedule with all security measures in place."
    },
    {
      icon: <DollarSign className="w-12 h-12 text-primary" />,
      title: "Competitive Pricing",
      description: "We offer cost-effective token development solutions that provide excellent value while maintaining high quality and security standards."
    },
    {
      icon: <Headphones className="w-12 h-12 text-primary" />,
      title: "Ongoing Support",
      description: "Post-launch technical support, maintenance, and upgrades to ensure your token continues to perform optimally in the market."
    }
  ];

  const tokenTypes = [
    "ERC20 Token Development",
    "BEP20 Token Development",
    "Security Token Development",
    "DeFi Token Development",
    "Governance Token Development",
    "Utility Token Development",
    "NFT Token Development",
    "Custom Token Development",
    "Reward Token Development",
    "Staking Token Development"
  ];

  const faqs = [
    {
      question: "What is the process of token development?",
      answer: "Token development involves several stages including tokenomics design, smart contract development, testing, auditing, and deployment. We start with understanding your requirements, create a detailed technical specification, develop and test the token contract, conduct security audits, and finally deploy to the mainnet."
    },
    {
      question: "How long does it take to develop a custom token?",
      answer: "The development timeline typically ranges from 1-4 weeks depending on the complexity of features required. Basic tokens can be developed and deployed within a week, while more complex tokens with custom features may take longer."
    },
    {
      question: "What security measures do you implement?",
      answer: "We implement multiple security features including reentrancy guards, overflow protection, access controls, and automated testing. Additionally, we conduct thorough security audits and use proven, tested code patterns to ensure your token is secure."
    },
    {
      question: "Do you provide post-launch support?",
      answer: "Yes, we offer comprehensive post-launch support including technical maintenance, feature updates, security monitoring, and assistance with exchange listings. Our team remains available to address any concerns or implement improvements."
    },
    {
      question: "Can you help with marketing and exchange listings?",
      answer: "Yes, we provide guidance and technical support for exchange listings. While we focus on the technical aspects, we can recommend trusted partners for marketing and promotion of your token."
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
          <div className="space-y-2">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              Custom Token Development Services
            </h1>
          </div>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg mb-8">
            Launch your blockchain token with our comprehensive development solutions. Get secure, scalable, and customizable tokens built by experts.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
            Start Your Token Project <ArrowRight className="ml-2" />
          </Button>
        </motion.div>

        {/* Token Types */}
        <motion.div variants={fadeIn("up", "tween", 0.3, 1)} className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Token Solutions We Offer</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {tokenTypes.map((type, index) => (
              <div
                key={index}
                className="p-4 rounded-lg bg-zinc-900/50 border border-green-500/10 hover:border-green-500/30 transition-all duration-300 text-center"
              >
                <span className="text-gray-300">{type}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Features */}
        <motion.div variants={fadeIn("up", "tween", 0.4, 1)} className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

        {/* Testimonials */}
        <motion.div variants={fadeIn("up", "tween", 0.5, 1)} className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">What Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {testimonialsData.slice(0, 3).map((testimonial, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-green-500/10 hover:border-green-500/30 transition-all duration-300 bg-black/20"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-primary">
                      {testimonial.position}, {testimonial.company}
                    </p>
                  </div>
                </div>
                <p className="text-gray-400 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* FAQs */}
        <motion.div variants={fadeIn("up", "tween", 0.6, 1)} className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
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
      </motion.div>
    </main>
  );
};

export default TokenDev;