
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const servicesCategories = [
  {
    title: "Blockchain Development",
    path: "/services/blockchain",
    description: "Decentralized solutions and blockchain applications",
    icon: "🔗"
  },
  {
    title: "Software Development",
    path: "/services/software",
    description: "Centralized solutions and website development",
    icon: "💻"
  },
  {
    title: "App Development",
    path: "/services/app",
    description: "Mobile applications and fintech solutions",
    icon: "📱"
  },
  {
    title: "Secretarial Work",
    path: "/services/secretarial",
    description: "Company and legal related services",
    icon: "📋"
  }
];

const Services = () => {
  return (
    <main className="bg-background min-h-screen py-20">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h1 
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p 
            variants={fadeIn("up", "tween", 0.3, 1)}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Comprehensive solutions for your business needs
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesCategories.map((category, index) => (
            <motion.div
              key={category.path}
              variants={fadeIn("up", "tween", 0.2 * index, 1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group"
            >
              <Link to={category.path}>
                <div className="bg-zinc-900/50 backdrop-blur-lg p-8 rounded-2xl border border-zinc-800 hover:border-primary/50 transition-all duration-300">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h2 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {category.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {category.description}
                  </p>
                  <Button variant="outline" className="group-hover:bg-primary group-hover:text-white">
                    Learn More
                  </Button>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Services;
