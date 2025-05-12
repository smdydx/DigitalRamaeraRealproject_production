import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Gamepad2, ArrowRight, Code, Cpu, Smartphone, Monitor, Server, Globe } from "lucide-react";

const GameDev = () => {
  const technologies = [
    { name: "Unity", icon: "🎮", description: "Create 2D and 3D games with our Unity expertise" },
    { name: "Unreal Engine", icon: "🎯", description: "High-fidelity games with cutting-edge graphics" },
    { name: "C++", icon: "⚡", description: "Optimized game logic and performance-critical systems" },
    { name: "C#", icon: "#️⃣", description: "Scripting and gameplay programming" },
    { name: "WebGL", icon: "🌐", description: "Browser-based games with hardware acceleration" },
    { name: "AR/VR", icon: "🥽", description: "Immersive augmented and virtual reality experiences" },
    { name: "Godot", icon: "👾", description: "Open-source game development engine" },
    { name: "Blender", icon: "🖌️", description: "3D modeling and animation" },
    { name: "Substance", icon: "🎨", description: "Advanced texturing and material creation" },
    { name: "FMOD", icon: "🎵", description: "Interactive audio design and implementation" },
    { name: "Photon", icon: "🌍", description: "Multiplayer and networking solutions" },
    { name: "Git", icon: "🔀", description: "Version control for collaborative development" },
  ];

  const features = [
    {
      title: "Mobile Games",
      description: "Cross-platform mobile game development for iOS and Android with optimized performance for various devices.",
      longDescription: "We create engaging mobile games that leverage touch controls, mobile-specific features, and monetization strategies. Our games are optimized for performance across a wide range of devices, ensuring smooth gameplay even on lower-end hardware.",
      image: "https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg",
      icon: <Smartphone className="w-6 h-6 text-primary" />
    },
    {
      title: "Console Games",
      description: "High-performance console game development for PlayStation, Xbox, and Nintendo platforms.",
      longDescription: "Our team has experience developing for all major console platforms, with expertise in platform-specific optimizations, controller input systems, and certification requirements. We can help bring your vision to living rooms worldwide.",
      image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg",
      icon: <Monitor className="w-6 h-6 text-primary" />
    },
    {
      title: "VR Games",
      description: "Immersive virtual reality experiences for Oculus, HTC Vive, PlayStation VR, and other platforms.",
      longDescription: "We design VR experiences that prioritize comfort, immersion, and intuitive interaction. From room-scale adventures to seated experiences, we understand the unique challenges and opportunities of virtual reality development.",
      image: "https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg",
      icon: <Server className="w-6 h-6 text-primary" />
    }
  ];

  const services = [
    {
      title: "Full Game Development",
      description: "End-to-end game development from concept to launch",
      details: [
        "Concept development and game design",
        "Prototyping and proof of concept",
        "Full production including art, programming, and audio",
        "Quality assurance and testing",
        "Launch and post-launch support"
      ]
    },
    {
      title: "Porting Services",
      description: "Bring your game to new platforms",
      details: [
        "Mobile to PC/console ports",
        "Cross-platform development",
        "Performance optimization",
        "Control scheme adaptation",
        "Platform-specific feature implementation"
      ]
    },
    {
      title: "Game Design",
      description: "Craft compelling gameplay experiences",
      details: [
        "Mechanics design and balancing",
        "Level design and world building",
        "Narrative design and storytelling",
        "User experience and interface design",
        "Player progression systems"
      ]
    },
    {
      title: "Live Operations",
      description: "Keep your game thriving after launch",
      details: [
        "Content updates and expansions",
        "Community management",
        "Analytics and player feedback",
        "Live events and seasonal content",
        "Monetization strategy"
      ]
    }
  ];

  const processSteps = [
    { 
      title: "Concept", 
      description: "We work with you to refine your game idea into a solid concept",
      icon: <Code className="w-6 h-6" />
    },
    { 
      title: "Pre-production", 
      description: "Prototyping, design documentation, and planning",
      icon: <Cpu className="w-6 h-6" />
    },
    { 
      title: "Production", 
      description: "Asset creation, programming, and implementation",
      icon: <Gamepad2 className="w-6 h-6" />
    },
    { 
      title: "Testing", 
      description: "Quality assurance, bug fixing, and polishing",
      icon: <Globe className="w-6 h-6" />
    },
    { 
      title: "Launch", 
      description: "Release preparation and platform submission",
      icon: <ArrowRight className="w-6 h-6" />
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
        {/* Hero Section */}
        <motion.div variants={fadeIn("up", "tween", 0.2, 1)} className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Gamepad2 className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-red-400 to-orange-600 bg-clip-text text-transparent mb-6">
            Game Development
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg mb-8">
            We transform creative visions into captivating gaming experiences across all platforms. 
            Our team of passionate developers, artists, and designers collaborate to build games 
            that players love.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700">
              Start Your Project <ArrowRight className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-gray-600 hover:bg-gray-800/50">
              View Our Portfolio
            </Button>
          </div>
        </motion.div>

        {/* Game Types Section */}
        <motion.div variants={fadeIn("up", "tween", 0.3, 1)} className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">Our Game Development Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl border border-red-500/10 hover:border-red-500/30 transition-all duration-300 h-full">
                <div className="absolute inset-0">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-black/40"></div>
                </div>
                <div className="relative p-6 h-full flex flex-col">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{feature.description}</p>
                  <p className="text-gray-500 text-sm mt-auto">{feature.longDescription}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Services Section */}
        <motion.div variants={fadeIn("up", "tween", 0.4, 1)} className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">Our Game Development Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {services.map((service, index) => (
              <div key={index} className="bg-zinc-900/50 border border-red-500/10 rounded-xl p-6 hover:border-red-500/30 transition-all">
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail, i) => (
                    <li key={i} className="flex items-start text-gray-500">
                      <span className="text-primary mr-2">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Technologies Section */}
        <motion.div variants={fadeIn("up", "tween", 0.5, 1)} className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">Technologies We Master</h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-center mb-8">
            We stay at the forefront of game development technology to deliver cutting-edge experiences.
            Our team is proficient in a wide range of engines, tools, and programming languages.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="flex flex-col items-center p-4 rounded-lg bg-zinc-900/50 border border-red-500/10 hover:border-red-500/30 transition-all duration-300">
                <span className="text-3xl mb-2">{tech.icon}</span>
                <span className="font-medium text-center">{tech.name}</span>
                <span className="text-xs text-gray-500 text-center mt-1">{tech.description}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Development Process */}
        <motion.div variants={fadeIn("up", "tween", 0.6, 1)} className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">Our Development Process</h2>
          <div className="relative">
            <div className="absolute left-1/2 h-full w-0.5 bg-gradient-to-b from-red-500 to-orange-600 -translate-x-1/2 hidden md:block"></div>
            <div className="space-y-8 md:space-y-0">
              {processSteps.map((step, index) => (
                <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}>
                  <div className="md:w-1/2 p-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4 md:hidden">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                  <div className="md:w-1/2 flex justify-center p-6">
                    <div className="w-16 h-16 rounded-full bg-zinc-800 border-2 border-primary/50 flex items-center justify-center hidden md:flex">
                      {step.icon}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div variants={fadeIn("up", "tween", 0.7, 1)} className="text-center bg-gradient-to-r from-red-900/30 to-orange-900/30 rounded-2xl p-12 mb-16">
          <h2 className="text-3xl font-bold mb-6">Ready to Create Your Game?</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Whether you have a fully fleshed-out concept or just a spark of an idea, 
            we're here to help bring your vision to life. Let's build something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700">
              Get Started <ArrowRight className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-gray-600 hover:bg-gray-800/50">
              Schedule a Consultation
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default GameDev;