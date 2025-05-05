import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { servicesData } from "@/data/services";
import { renderIcon } from "@/lib/icon-utils";

const serviceTypes = [
  { id: "tech", name: "Technology Services" },
  { id: "legalCompliance", name: "Legal & Compliance Services" },
];

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState("tech");

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div variants={fadeIn("up", "tween", 0.1, 1)} className="inline-block mb-4">
            <span className="text-primary font-medium text-sm uppercase tracking-wider relative before:content-[''] before:absolute before:w-8 before:h-[2px] before:bg-primary before:left-full before:top-1/2 before:ml-2 after:content-[''] after:absolute after:w-8 after:h-[2px] after:bg-primary after:right-full after:top-1/2 after:mr-2">
              Our Services
            </span>
          </motion.div>
          <motion.h2
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Comprehensive Technology & Legal Solutions
          </motion.h2>
          <motion.p variants={fadeIn("up", "tween", 0.3, 1)} className="text-muted-foreground">
            We offer a wide range of services designed to help businesses navigate the complexities of modern technology while ensuring legal compliance and protection.
          </motion.p>
        </motion.div>

        {/* Service Categories Tabs */}
        <motion.div
          variants={fadeIn("up", "tween", 0.4, 1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 px-2 sm:px-0">
            {serviceTypes.map((type) => (
              <Button
                key={type.id}
                variant={activeTab === type.id ? "default" : "outline"}
                onClick={() => setActiveTab(type.id)}
                className="text-sm sm:text-base py-1 h-auto"
              >
                {type.name}
              </Button>
            ))}
          </div>

          {/* Services Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-2 sm:px-0"
            >
              {servicesData[activeTab as keyof typeof servicesData].map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  features={service.features}
                  delay={0.1 * index}
                  path={service.path}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <motion.div
          variants={fadeIn("up", "tween", 0.5, 1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => window.location.href = '/services/blockchain'}
              className="flex items-center gap-2"
            >
              Explore Our Services <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="flex items-center gap-2"
            >
              Request Custom Service <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface ServiceCardProps {
  icon: React.ComponentType;
  title: string;
  features: string[];
  delay: number;
  path?: string;
}

const ServiceCard = ({ icon: Icon, title, features, delay, path }: ServiceCardProps) => {
  return (
    <motion.div
      variants={fadeIn("up", "tween", delay, 0.5)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="bg-background p-4 sm:p-6 rounded-lg border border-border hover:border-primary/30 transition-all duration-300"
    >
      <div className="flex items-center mb-6"> {/* Modified to flex items-center */}
        <div className="h-6 w-6 mr-2"> {/* Adjusted icon size */}
          {renderIcon(Icon, { size: 24, className: "text-primary" })}
        </div>
        <h3 className="text-base font-semibold"> {/* Adjusted title size */}
          {title}
        </h3>
      </div>
      <ul className="space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1 mr-2" />
            <span className="text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>
      <Button variant="link" asChild className="p-0 flex items-center gap-1">
        <Link to={path || "#"}>
          Learn More <ArrowRight className="h-4 w-4" />
        </Link>
      </Button>
    </motion.div>
  );
};

export default ServicesSection;