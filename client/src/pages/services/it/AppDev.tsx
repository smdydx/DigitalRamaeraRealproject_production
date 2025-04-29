
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Smartphone, Code, Rocket, Shield, ArrowRight, CheckCircle2, Server, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const AppDev = () => {
  const technologies = [
    { name: "React Native", icon: "⚛️", desc: "Cross-platform mobile development" },
    { name: "Flutter", icon: "🔷", desc: "Google's UI toolkit" },
    { name: "Swift", icon: "🍎", desc: "Native iOS development" },
    { name: "Kotlin", icon: "🤖", desc: "Native Android development" },
    { name: "Node.js", icon: "🟢", desc: "Backend development" },
    { name: "Firebase", icon: "🔥", desc: "Backend services" },
    { name: "AWS", icon: "☁️", desc: "Cloud infrastructure" },
    { name: "MongoDB", icon: "🍃", desc: "Database solutions" }
  ];

  const services = [
    {
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      title: "Native App Development",
      description: "High-performance native applications for iOS and Android platforms",
      features: [
        "Custom iOS Development",
        "Android App Development",
        "Performance Optimization",
        "Native Features Integration"
      ]
    },
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "Cross-Platform Development",
      description: "Cost-effective solutions that work on multiple platforms",
      features: [
        "React Native Apps",
        "Flutter Development",
        "Code Reusability",
        "Consistent UI/UX"
      ]
    },
    {
      icon: <Server className="w-8 h-8 text-primary" />,
      title: "Backend Development",
      description: "Robust and scalable backend solutions",
      features: [
        "API Development",
        "Database Design",
        "Cloud Integration",
        "Real-time Features"
      ]
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "App Security",
      description: "Enterprise-grade security implementations",
      features: [
        "Data Encryption",
        "Secure Authentication",
        "Compliance Standards",
        "Security Audits"
      ]
    }
  ];

  const industries = [
    {
      title: "E-commerce",
      description: "Feature-rich shopping apps with payment integration",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg"
    },
    {
      title: "Healthcare",
      description: "HIPAA-compliant medical and healthcare solutions",
      image: "https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg"
    },
    {
      title: "Finance",
      description: "Secure and reliable fintech applications",
      image: "https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg"
    },
    {
      title: "Education",
      description: "Interactive learning and education platforms",
      image: "https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg"
    }
  ];

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-zinc-900 to-black overflow-hidden pt-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,_rgba(0,128,255,0.1)_0%,_transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,_rgba(0,0,255,0.1)_0%,_transparent_50%)] pointer-events-none"></div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-4 mt-10"
      >
        {/* Hero Section */}
        <motion.div variants={fadeIn("up", "tween", 0.2, 1)} className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
            <Smartphone className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-6">
            Mobile App Development
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg mb-8">
            Transform your ideas into powerful, scalable, and user-friendly mobile applications. 
            We deliver cutting-edge solutions across all major platforms with focus on performance and user experience.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
              Start Your Project <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </motion.div>

        {/* Services Grid */}
        <motion.div variants={fadeIn("up", "tween", 0.3, 1)} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="bg-zinc-900/50 p-8 rounded-xl border border-blue-500/10 hover:border-blue-500/30 transition-all">
              <div className="mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6">{service.description}</p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-primary mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>

        {/* Technologies Section */}
        <motion.div variants={fadeIn("up", "tween", 0.4, 1)} className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Technologies We Use</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="p-6 bg-zinc-900/50 rounded-xl border border-blue-500/10 hover:border-blue-500/30 transition-all text-center">
                <span className="text-4xl mb-4 block">{tech.icon}</span>
                <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
                <p className="text-gray-400 text-sm">{tech.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Industries Section */}
        <motion.div variants={fadeIn("up", "tween", 0.5, 1)} className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Industries We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl border border-blue-500/10 hover:border-blue-500/30 transition-all">
                <div className="absolute inset-0">
                  <img 
                    src={industry.image} 
                    alt={industry.title}
                    className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/40"></div>
                </div>
                <div className="relative p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{industry.title}</h3>
                  <p className="text-gray-400">{industry.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div variants={fadeIn("up", "tween", 0.6, 1)} className="text-center bg-zinc-900/50 rounded-xl border border-blue-500/10 p-12 mb-20">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Your App?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's transform your idea into a powerful mobile application. Our team of experts will guide you through every step of the development process.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
              Get Started Today <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default AppDev;
