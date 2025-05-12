import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Globe2, ArrowRight, Gamepad2, ShoppingBag, Box } from "lucide-react";

const MetaverseDev = () => {
  const technologies = [
    { name: "Unity", icon: "🎮" },
    { name: "Unreal Engine", icon: "🎯" },
    { name: "WebGL", icon: "🌐" },
    { name: "Three.js", icon: "3️⃣" },
    { name: "WebXR", icon: "🥽" },
    { name: "Ramestta", icon: "🔷" },
    { name: "Solidity", icon: "⚡" },
  ];

  const features = [
    {
      icon: <Gamepad2 className="w-6 h-6 text-green-400 group-hover:animate-pulse" />,
      title: "Virtual Worlds",
      description: "Create immersive 3D environments with social interaction capabilities",
      image: "https://images.pexels.com/photos/8728560/pexels-photo-8728560.jpeg",
    },
    {
      icon: <ShoppingBag className="w-6 h-6 text-green-400 group-hover:animate-pulse" />,
      title: "Digital Assets",
      description: "Implement NFT-powered virtual assets and marketplace functionality",
      image: "https://images.pexels.com/photos/8369533/pexels-photo-8369533.jpeg",
    },
    {
      icon: <Box className="w-6 h-6 text-green-400 group-hover:animate-pulse" />,
      title: "Blockchain Integration",
      description: "Setup decentralized infrastructure for virtual economies",
      image: "https://images.pexels.com/photos/8369651/pexels-photo-8369651.jpeg",
    }
  ];

  const faqs = [
    {
      question: "What technologies do you use for metaverse development?",
      answer: "We utilize Unity, Unreal Engine, WebGL, and WebXR for 3D development, combined with blockchain technologies for digital asset management."
    },
    {
      question: "Can you integrate existing systems with metaverse platforms?",
      answer: "Yes, we provide seamless integration services to connect your existing platforms with metaverse environments."
    },
    {
      question: "How do you ensure performance in metaverse applications?",
      answer: "We implement optimization techniques, efficient asset loading, and distributed systems to maintain high performance."
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
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent mb-6">
            Metaverse Development
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Build immersive virtual worlds and experiences with blockchain-powered digital economies
          </p>
        </motion.div>

        {/* Video Section Below Heading */}
        <motion.div variants={fadeIn("up", "tween", 0.3, 1)} className="flex flex-col md:flex-row gap-8 mb-16">
          <div className="flex-1">
            <video
              src="/video/metaverse-video.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full max-w-xl mx-auto rounded-lg shadow-xl"
            />
          </div>
          <div className="flex-1 flex flex-col justify-center text-left">
            <h2 className="text-3xl font-bold text-white mb-4">
              Build Immersive Metaverse Worlds
            </h2>
            <p className="text-gray-400 text-lg mb-6">
              Our metaverse development services allow you to create virtual worlds powered by blockchain technologies. From immersive 3D environments to integrated NFT assets, we offer a seamless experience that brings your vision to life.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
              Get Started
            </Button>
          </div>
        </motion.div>

        <motion.div variants={fadeIn("up", "tween", 0.4, 1)} className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
            Core Capabilities
          </h2>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", "spring", 0.3 * index, 1)}
                whileHover={{ scale: 1.06, y: -5 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="group relative overflow-hidden rounded-2xl border border-green-500/20 hover:border-green-500/60 backdrop-blur-sm bg-zinc-900/40 transition-all duration-300 shadow-lg hover:shadow-green-400/20"
              >
                <div className="absolute inset-0">
                  <img src={feature.image} alt={feature.title} className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/30" />
                </div>
                <div className="relative p-6 z-10">
                  <div className="flex items-center mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div variants={fadeIn("up", "tween", 0.8, 1)} className="mb-24">
          <h2 className="text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
            Our Metaverse Solutions
          </h2>
          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[{
              icon: <Globe2 className="w-7 h-7 text-green-400 group-hover:animate-pulse" />,
              title: "Virtual Worlds Creation",
              image: "https://images.pexels.com/photos/8728560/pexels-photo-8728560.jpeg",
              desc: "Immersive 3D spaces with avatars and interactions in real-time.",
            }, {
              icon: <ShoppingBag className="w-7 h-7 text-green-400 group-hover:animate-pulse" />,
              title: "NFT Marketplace",
              image: "https://images.pexels.com/photos/8369533/pexels-photo-8369533.jpeg",
              desc: "Trade and showcase NFTs in your own decentralized store.",
            }, {
              icon: <Box className="w-7 h-7 text-green-400 group-hover:animate-pulse" />,
              title: "Blockchain Economy",
              image: "https://images.pexels.com/photos/8369651/pexels-photo-8369651.jpeg",
              desc: "Smart contract-driven economies with real crypto integrations."
            }].map((card, i) => (
              <motion.div
                key={i}
                variants={fadeIn("up", "spring", 0.3 * i, 1)}
                whileHover={{ scale: 1.06, y: -5 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="group relative overflow-hidden rounded-2xl border border-green-500/20 hover:border-green-500/60 backdrop-blur-sm bg-zinc-900/40 transition-all duration-300 shadow-lg hover:shadow-green-400/20"
              >
                <div className="absolute inset-0">
                  <img src={card.image} alt={card.title} className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/30" />
                </div>
                <div className="relative p-6 z-10">
                  <div className="flex items-center mb-4">{card.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-gray-300 text-sm">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

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

        <motion.div variants={fadeIn("up", "tween", 0.6, 1)} className="text-center">
          <Button size="lg" className=" mb-10 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
            Get Demo <ArrowRight className="ml-2" />
          </Button>
        </motion.div>
      </motion.div>
   {/* use case cards */}
    <motion.div
  variants={fadeIn("up", "tween", 0.55, 1)}
  className="mb-24"
>
  <h2 className="text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
    Real-World Use Cases
  </h2>

  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4"
  >
    {[
      {
        title: "Virtual Conferences",
        desc: "Host interactive 3D events and meetups in immersive spaces with real-time collaboration.",
        emoji: "🎤",
      },
      {
        title: "Metaverse Real Estate",
        desc: "Buy, sell, and trade virtual land with secure blockchain-backed ownership.",
        emoji: "🏠",
      },
      {
        title: "Immersive Gaming",
        desc: "Create expansive multiplayer metaverse games with NFT assets and economies.",
        emoji: "🎮",
      },
      {
        title: "Retail & Shopping",
        desc: "Build virtual malls or branded stores with NFT-based merchandise and experiences.",
        emoji: "🛍️",
      },
      {
        title: "Education & Training",
        desc: "Develop 3D learning environments for training, onboarding, or virtual classrooms.",
        emoji: "🎓",
      },
      {
        title: "Social Hubs",
        desc: "Design vibrant digital spaces for communities to connect, explore, and grow together.",
        emoji: "🌐",
      },
    ].map((item, index) => (
      <motion.div
        key={index}
        variants={fadeIn("up", "spring", index * 0.2, 1)}
        whileHover={{ scale: 1.06, y: -5 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="group relative overflow-hidden rounded-2xl border border-green-500/20 hover:border-green-500/60 backdrop-blur-sm bg-zinc-900/40 transition-all duration-300 shadow-lg hover:shadow-green-400/20"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-black/30" />

        <div className="relative p-6 z-10">
          <div className="text-4xl mb-4">{item.emoji}</div>
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
            {item.title}
          </h3>
          <p className="text-gray-300 text-sm">{item.desc}</p>
        </div>
      </motion.div>
    ))}
  </motion.div>
</motion.div>






      <motion.div variants={fadeIn("up", "tween", 0.3, 1)} className="text-center mb-16 mt-12">
        <h2 className="text-3xl font-bold text-white mb-4">Meet the Professional</h2>
        <p className="text-gray-400 mb-6">
          Our expert team works tirelessly to deliver the best blockchain solutions, ensuring efficiency, security, and cutting-edge technology in every project.
        </p>
        <div className="relative inline-block rounded-full overflow-hidden w-36 h-36 mx-auto group cursor-pointer">
          <div className="absolute inset-0 bg-black opacity-70 group-hover:opacity-0 transition-all duration-300"></div>
          <img src="/images/devimage.jpg" alt="Professional Image" className="w-full h-full object-cover rounded-full transition-all duration-300" />
        </div>
        <p className="text-gray-400 mt-4">
          <strong>Wasim Akram </strong><br />
          Blockchain Expert & Developer
        </p>
      </motion.div>
    </main>
  );
};

export default MetaverseDev;