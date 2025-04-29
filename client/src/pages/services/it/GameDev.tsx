
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Gamepad2, ArrowRight } from "lucide-react";

const GameDev = () => {
  const technologies = [
    { name: "Unity", icon: "🎮" },
    { name: "Unreal Engine", icon: "🎯" },
    { name: "C++", icon: "⚡" },
    { name: "C#", icon: "#️⃣" },
    { name: "WebGL", icon: "🌐" },
    { name: "AR/VR", icon: "🥽" },
  ];

  const features = [
    {
      title: "Mobile Games",
      description: "Cross-platform mobile game development",
      image: "https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg",
    },
    {
      title: "Console Games",
      description: "High-performance console game development",
      image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg",
    },
    {
      title: "VR Games",
      description: "Immersive virtual reality experiences",
      image: "https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg",
    }
  ];

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-zinc-900 to-black overflow-hidden pt-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,_rgba(255,0,0,0.1)_0%,_transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,_rgba(128,0,0,0.1)_0%,_transparent_50%)] pointer-events-none"></div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-4 mt-10"
      >
        <motion.div variants={fadeIn("up", "tween", 0.2, 1)} className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Gamepad2 className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-red-400 to-orange-600 bg-clip-text text-transparent mb-6">
            Game Development
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Create engaging and immersive gaming experiences across multiple platforms.
          </p>
        </motion.div>

        <motion.div variants={fadeIn("up", "tween", 0.3, 1)} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl border border-red-500/10 hover:border-red-500/30 transition-all duration-300">
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
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div variants={fadeIn("up", "tween", 0.4, 1)} className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Technologies We Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="flex items-center justify-center p-4 rounded-lg bg-zinc-900/50 border border-red-500/10 hover:border-red-500/30 transition-all duration-300">
                <span className="text-2xl mr-2">{tech.icon}</span>
                <span className="font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeIn("up", "tween", 0.5, 1)} className="text-center">
          <Button size="lg" className="bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700">
            Start Your Game Project <ArrowRight className="ml-2" />
          </Button>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default GameDev;
