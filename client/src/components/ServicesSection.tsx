import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "wouter"; // Changed import
import { staggerContainer, fadeIn } from "@/lib/animations";
import { servicesData } from "@/data/services";
import { renderIcon } from "@/lib/icon-utils";

const serviceTypes = [
  { id: "tech", name: "Technology Services" },
  { id: "legalCompliance", name: "Legal & Compliance Services" },
];

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState("tech");

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

          {/* Services Grid */}
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
                <motion.div
                  key={index}
                  variants={fadeIn("up", "tween", index * 0.1, 0.5)}
                  className="bg-background p-6 rounded-lg border border-border hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="flex items-center mb-4">
                    <div className="h-8 w-8 text-primary mr-3">
                      {renderIcon(service.icon, { size: 32 })}
                    </div>
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1 mr-2" />
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {service.submenu ? (
                    <div className="space-y-2">
                      {service.submenu.map((subService, subIdx) => (
                        <Link 
                          key={subIdx}
                          href={subService.path || "#"}
                          className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                        >
                          {subService.title}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Button 
                      variant="link" 
                      asChild 
                      className="p-0 text-primary hover:text-primary/80"
                    >
                      <Link href={service.path || "#"}>
                        Learn More <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </Button>
                  )}
                </motion.div>
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

export default ServicesSection;