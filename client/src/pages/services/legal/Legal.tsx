import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import LegalPricing from "@/pages/pricing/LegalPricing";

const Legal = () => {
  const services = [
    {
      title: "Company Incorporation",
      description: "Complete incorporation service for your business setup",
      path: "/services/legal/company-incorporation",
      image: "/public/images/services/business-growth.jpg"
    },
    {
      title: "Annual ROC Compliance",
      description: "Comprehensive ROC compliance management services",
      path: "/services/legal/roc-compliance",
      image: "/public/images/services/business-growth.jpg"
    },
    {
      title: "Secretarial Audit",
      description: "Professional secretarial audit services",
      path: "/services/legal/secretarial-audit",
      image: "/public/images/services/business-growth.jpg"
    },
    {
      title: "FEMA and RBI Compliance",
      description: "Expert guidance for regulatory compliance",
      path: "/services/legal/fema-rbi",
      image: "/public/images/services/business-growth.jpg"
    },
    {
      title: "IP Registration",
      description: "Protect your intellectual property rights",
      path: "/services/legal/ip-registration",
      image: "/public/images/services/business-growth.jpg"
    },
    {
      title: "Startup Registration",
      description: "Complete startup recognition and registration",
      path: "/services/legal/startup-registration",
      image: "/public/images/services/business-growth.jpg"
    },
    {
      title: "Labour Law Compliance",
      description: "Comprehensive labor law management",
      path: "/services/legal/labour-compliance",
      image: "/public/images/services/business-growth.jpg"
    },
    {
      title: "Company Strike-Off",
      description: "Professional company closure services",
      path: "/services/legal/company-strike-off",
      image: "/public/images/services/business-growth.jpg"
    },
    {
      title: "Corporate Governance",
      description: "Expert corporate governance advisory",
      path: "/services/legal/corporate-governance",
      image: "/public/images/services/business-growth.jpg"
    }
  ];

  return (
    <main className="relative min-h-screen bg-zinc-900 overflow-hidden">
      <div className="container mx-auto px-4 pt-24 sm:pt-28 md:pt-32 pb-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto"
        >
          <motion.div variants={fadeIn("up", "tween", 0.2, 1)} className="text-center mb-16">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Legal Services</span>
            <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6 bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
              Comprehensive Legal Solutions
            </h1>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              Expert legal services to protect and grow your business with full compliance and professional guidance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={fadeIn("up", "tween", 0.2 * index, 1)}
                className="group relative overflow-hidden rounded-2xl border border-green-500/10 hover:border-green-500/30 transition-all duration-300 backdrop-blur-sm shadow-xl"
              >
                <Link to={service.path} className="block">
                  <div className="absolute inset-0">
                    <img 
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-black/40"></div>
                  </div>

                  <div className="relative p-6 md:p-8">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{service.description}</p>
                    <div className="flex items-center text-primary gap-2">
                      <span>Learn More</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <LegalPricing />
    </main>
  );
};

export default Legal;