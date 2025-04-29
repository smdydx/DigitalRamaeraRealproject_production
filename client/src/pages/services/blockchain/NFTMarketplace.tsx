import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { 
  Image, ArrowRight, MessageCircle, Calendar, 
  Shield, Globe, Users, Home, Ticket, Gamepad,
  Code, Layers, WalletCards, GalleryThumbnails,
  Bot, Scale, BadgeCheck
} from "lucide-react";

const NFTMarketplace = () => {
  // Core Technologies
  const technologies = [
    { name: "IPFS", icon: "📦" },
    { name: "ERC721", icon: "🎨" },
    { name: "ERC1155", icon: "🎮" },
    { name: "Web3.js", icon: "🌐" },
    { name: "Solidity", icon: "💎" },
    { name: "OpenZeppelin", icon: "🛡️" },
    { name: "Ramestta", icon: "🔷" },
    { name: "React", icon: "⚛️" },
    { name: "Hardhat", icon: "🏗️" },
  ];

  // Key Features
  const features = [
    {
      title: "Advanced Marketplace Features",
      description: "Comprehensive trading platform with bidding and auctions",
      image: "https://images.pexels.com/photos/8370776/pexels-photo-8370776.jpeg",
      points: [
        "Automated Bidding System",
        "Multiple Auction Types",
        "Real-time Price Updates",
        "Collection Management"
      ]
    },
    {
      title: "NFT Creation & Minting",
      description: "Seamless NFT creation and minting capabilities",
      image: "https://images.pexels.com/photos/8369651/pexels-photo-8369651.jpeg",
      points: [
        "Bulk Minting Support",
        "Metadata Management",
        "IPFS Integration",
        "Custom Token Standards"
      ]
    },
    {
      title: "Security & Integration",
      description: "Robust security features and third-party integrations",
      image: "https://images.pexels.com/photos/8369815/pexels-photo-8369815.jpeg",
      points: [
        "Multi-sig Wallets",
        "Anti-fraud Systems",
        "Wallet Integration",
        "Smart Contract Auditing"
      ]
    }
  ];

  // Benefits
  const benefits = [
    "Multi-chain Support",
    "Royalty Management",
    "Creator Verification",
    "Advanced Search & Filters",
    "Analytics Dashboard",
    "Social Features"
  ];

  // Why Choose Us
  const whyChooseUs = [
    { 
      title: "Ready-to-Deploy Solutions", 
      icon: <Layers className="w-8 h-8" />,
      content: "Pre-built templates for fast market entry with white-label solutions"
    },
    { 
      title: "Minimized Frauds", 
      icon: <Shield className="w-8 h-8" />,
      content: "Advanced security protocols and KYC integration"
    },
    { 
      title: "Full Customization", 
      icon: <Code className="w-8 h-8" />,
      content: "Tailor-made solutions with indefinite scalability"
    }
  ];

  // Services
  const services = [
    {
      title: "NFT Consultation",
      icon: <MessageCircle className="w-8 h-8" />,
      content: "Expert guidance through your NFT journey"
    },
    {
      title: "Metaverse Integration",
      icon: <Globe className="w-8 h-8" />,
      content: "3D marketplace development with VR capabilities"
    },
    {
      title: "Wallet Development",
      icon: <WalletCards className="w-8 h-8" />,
      content: "Secure storage solutions with IPFS integration"
    }
  ];

  // Use Cases
  const useCases = [
    { name: "Arts & Artists", icon: <GalleryThumbnails /> },
    { name: "Real Estate", icon: <Home /> },
    { name: "Gaming", icon: <Gamepad /> },
    { name: "Ticketing", icon: <Ticket /> }
  ];

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-zinc-900 to-black overflow-hidden pt-24">
      {/* Background Effects */}
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
        <motion.div 
          variants={fadeIn("up", "tween", 0.2, 1)} 
          className="text-center mb-24 relative overflow-hidden rounded-3xl bg-zinc-900/50 border border-green-500/10"
        >
          <div className="absolute inset-0">
            <img 
              src="https://images.pexels.com/photos/5980586/pexels-photo-5980586.jpeg" 
              alt="NFT Marketplace"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-black/40" />
          </div>
          
          <div className="relative py-24 px-6">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/10 mb-8">
              <Image className="w-10 h-10 text-green-400" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent mb-6">
              NFT Marketplace Development
            </h1>
            <p className="text-gray-300 max-w-3xl mx-auto text-xl mb-8">
              Build powerful NFT marketplaces with 100% customization, multi-chain support, and enterprise-grade security.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
                View Live Demo <ArrowRight className="ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="border-green-500/30 text-green-400 hover:bg-green-500/10">
                Schedule Free Demo <Calendar className="ml-2" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div variants={fadeIn("up", "tween", 0.3, 1)} className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div 
                key={index}
                className="group p-8 bg-zinc-900/50 border border-green-500/10 rounded-2xl hover:border-green-500/30 transition-all"
              >
                <div className="text-green-400 mb-6">{item.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Key Features */}
        <motion.div variants={fadeIn("up", "tween", 0.4, 1)} className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">Core Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-2xl border border-green-500/10 hover:border-green-500/30 transition-all"
              >
                <div className="absolute inset-0">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-black/40" />
                </div>
                <div className="relative p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-6">{feature.description}</p>
                  <ul className="space-y-3">
                    {feature.points.map((point, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <span className="w-2 h-2 bg-green-400 rounded-full mr-3" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Technologies */}
        <motion.div variants={fadeIn("up", "tween", 0.5, 1)} className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">Core Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {technologies.map((tech, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center p-6 bg-zinc-900/50 border border-green-500/10 rounded-xl hover:border-green-500/30 transition-all"
              >
                <span className="text-3xl mb-3">{tech.icon}</span>
                <span className="font-medium text-sm text-center">{tech.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Services */}
        <motion.div variants={fadeIn("up", "tween", 0.6, 1)} className="mb-24">
          <div className="max-w-7xl mx-auto bg-zinc-900/50 border border-green-500/10 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-center mb-12">Development Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="flex flex-col items-center text-center p-8 hover:bg-zinc-800/20 rounded-xl transition-all"
                >
                  <div className="text-green-400 mb-6">{service.icon}</div>
                  <h4 className="text-xl font-bold text-white mb-4">{service.title}</h4>
                  <p className="text-gray-400">{service.content}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div variants={fadeIn("up", "tween", 0.7, 1)} className="mb-24">
          <div className="bg-gradient-to-r from-green-500/10 to-emerald-600/10 border border-green-500/20 rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-6">Start Your NFT Journey Today</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Get a free consultation with our blockchain experts to discuss your project requirements.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
                Contact Sales <MessageCircle className="ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="border-green-500/30 text-green-400 hover:bg-green-500/10">
                Technical Support <Bot className="ml-2" />
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default NFTMarketplace;