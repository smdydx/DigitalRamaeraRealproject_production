
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "wouter";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { servicesData } from "@/data/services";
import { renderIcon } from "@/lib/icon-utils";

const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState("tech");

  return (
    <section id="services" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div variants={fadeIn("up", "tween", 0.1, 1)} className="inline-block mb-4">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Our Services
            </span>
          </motion.div>
          <motion.h2
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Comprehensive Solutions for Your Business
          </motion.h2>
          <motion.p variants={fadeIn("up", "tween", 0.3, 1)} className="text-muted-foreground">
            From blockchain development to legal compliance, we offer end-to-end solutions to help your business grow.
          </motion.p>
        </motion.div>

        <motion.div
          variants={fadeIn("up", "tween", 0.4, 1)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="flex justify-center gap-4 mb-12">
            {["tech", "legalCompliance"].map((type) => (
              <Button
                key={type}
                variant={activeTab === type ? "default" : "outline"}
                onClick={() => setActiveTab(type)}
                className="min-w-[200px]"
              >
                {type === "tech" ? "Technology Services" : "Legal & Compliance"}
              </Button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 gap-6"
            >
              {servicesData[activeTab as keyof typeof servicesData].map((service, index) => (
                <motion.div
                  key={service.title}
                  variants={fadeIn("up", "tween", index * 0.1, 0.5)}
                  className="bg-zinc-800/50 rounded-xl p-6 border border-zinc-700/50 hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      {renderIcon(service.icon, { size: 24 })}
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </div>
                    ))}
                    {service.submenu && service.submenu.map((subService) => (
                      subService.features.map((feature, idx) => (
                        <div key={`${subService.title}-${idx}`} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                          <span className="text-muted-foreground text-sm">{feature}</span>
                        </div>
                      ))
                    ))}
                  </div>

                  <Button
                    variant="link"
                    asChild
                    className="p-0 text-primary hover:text-primary/80"
                  >
                    <Link href={service.path || "#"}>
                      Learn More <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
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
          className="text-center mt-12"
        >
          <Button size="lg" asChild>
            <Link href="/services">
              View All Services <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
