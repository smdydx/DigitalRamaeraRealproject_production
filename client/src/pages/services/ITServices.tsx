
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Code, Smartphone, Gamepad2, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const ITServices = () => {
  const services = [
    {
      icon: <Smartphone className="w-8 h-8 text-primary" />,
      title: "Mobile App Development",
      description: "Cross-platform & native mobile applications",
      features: [
        "iOS and Android Development",
        "React Native & Flutter Apps",
        "App Store Optimization",
        "Mobile App Testing"
      ]
    },
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "Custom Software Development",
      description: "Tailored software solutions for businesses",
      features: [
        "Enterprise Software",
        "Cloud Applications",
        "API Development",
        "Database Design"
      ]
    },
    {
      icon: <Gamepad2 className="w-8 h-8 text-primary" />,
      title: "Game Development",
      description: "Engaging gaming experiences",
      features: [
        "Unity & Unreal Engine",
        "Mobile Games",
        "3D Game Development",
        "Game Testing & QA"
      ]
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
        <motion.div variants={fadeIn("up", "tween", 0.2, 1)} className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-6">
            IT Services & Solutions
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Comprehensive IT solutions tailored to your business needs with cutting-edge technology.
          </p>
        </motion.div>

        <motion.div variants={fadeIn("up", "tween", 0.3, 1)} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-zinc-900/50 p-6 rounded-xl border border-blue-500/10 hover:border-blue-500/30 transition-all">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <ul className="space-y-2">
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

        <motion.div variants={fadeIn("up", "tween", 0.4, 1)} className="text-center">
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
              Get Started <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default ITServices;
