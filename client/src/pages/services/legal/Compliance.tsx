
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Carousel } from "@/components/ui/carousel";

const images = [
  "/images/services/business-growth.jpg",
  "/images/services/bussiness.jpg",
  "/images/services/classified.jpg"
];

const services = [
  {
    title: "Company Incorporation Services",
    items: [
      "Private Limited Company Registration",
      "Public Limited Company Registration", 
      "One Person Company (OPC) Registration",
      "Limited Liability Partnership (LLP) Registration",
      "Section 8 (Non-Profit Company) Registration",
      "Producer Company Registration",
      "Nidhi Company Registration",
      "Foreign Company Setup"
    ]
  },
  {
    title: "Company Law Compliance Services",
    items: [
      "Annual Returns Filing (MGT-7, AOC-4)",
      "Statutory Registers Maintenance",
      "Board & General Meetings",
      "ROC Compliance Filings",
      "Company Conversions",
      "MOA and AOA Alterations"
    ]
  },
  {
    title: "Corporate Governance Services",
    items: [
      "Corporate Governance Advisory",
      "Secretarial Audit",
      "Code of Conduct & Policies",
      "Committee Setup"
    ]
  }
];

export default function Compliance() {
  return (
    <main className="min-h-screen bg-zinc-900 pt-24">
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <Carousel className="h-full">
            {images.map((image, index) => (
              <div key={index} className="relative h-full">
                <img src={image} alt="Legal Services" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/50" />
              </div>
            ))}
          </Carousel>
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.h1 
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Start Right. Build Smart. Grow Legally.
            </motion.h1>
            <motion.p 
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-xl text-gray-200 mb-8"
            >
              At SOFTBEEM, powered by RAMAERA Legal Infotech Pvt Ltd, we offer end-to-end company incorporation services to help entrepreneurs, startups, and corporates establish legally compliant entities in India — quickly, seamlessly, and affordably.
            </motion.p>
            <motion.div variants={fadeIn("up", "tween", 0.4, 1)}>
              <Button asChild size="lg" className="bg-green-500 hover:bg-green-600">
                <Link to="#contact">Get Started <ArrowRight className="ml-2" /></Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", "tween", 0.2 * index, 1)}
                className="bg-zinc-800/50 p-8 rounded-xl border border-green-500/20"
              >
                <h3 className="text-2xl font-bold text-green-400 mb-6">{service.title}</h3>
                <ul className="space-y-4">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
