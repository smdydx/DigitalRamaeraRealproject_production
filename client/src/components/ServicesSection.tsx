
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
    <section id="services" className="py-24 bg-gradient-to-b from-zinc-900 to-zinc-950">
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
            className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent"
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
            <Button
              variant={activeTab === "tech" ? "default" : "outline"}
              onClick={() => setActiveTab("tech")}
              className="min-w-[200px] text-lg"
            >
              Technology Services
            </Button>
            <Button
              variant={activeTab === "legalCompliance" ? "default" : "outline"}
              onClick={() => setActiveTab("legalCompliance")}
              className="min-w-[200px] text-lg"
            >
              Legal & Compliance
            </Button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 gap-8"
            >
              {servicesData[activeTab as keyof typeof servicesData].map((service, index) => (
                <motion.div
                  key={service.title}
                  variants={fadeIn("up", "tween", index * 0.1, 0.5)}
                  className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 backdrop-blur-xl rounded-2xl p-8 border border-zinc-700/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex items-center gap-6 mb-8">
                    <div className="p-4 rounded-xl bg-primary/10 text-primary">
                      {renderIcon(service.icon, { size: 32 })}
                    </div>
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                          <span className="text-zinc-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {service.submenu && (
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 pt-8 border-t border-zinc-700/50">
                        {service.submenu.map((subService, subIdx) => (
                          <div key={subIdx} className="bg-zinc-800/30 rounded-xl p-6 hover:bg-zinc-800/50 hover:shadow-md hover:scale-[1.02] transition-all duration-300 cursor-pointer">
                            <div className="flex items-center gap-3 mb-4">
                              {renderIcon(subService.icon, { size: 24, className: "text-primary" })}
                              <h4 className="font-semibold text-white">{subService.title}</h4>
                            </div>
                            {subService.features.map((feature, featureIdx) => (
                              <div key={featureIdx} className="flex items-start gap-2 mt-2">
                                <Check className="h-4 w-4 text-primary flex-shrink-0 mt-1" />
                                <span className="text-sm text-zinc-400">{feature}</span>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <Button
                    variant="outline"
                    asChild
                    className="mt-8 group-hover:bg-primary group-hover:text-white transition-all duration-300"
                  >
                    <Link href={service.path || "#"}>
                      Learn More <ArrowRight className="h-4 w-4 ml-2" />
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
          className="text-center mt-16"
        >
          <Button size="lg" asChild className="text-lg px-8">
            <Link href="/services">
              View All Services <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
