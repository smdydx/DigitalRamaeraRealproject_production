// app/services/virtual-company-secretary/page.tsx or pages/services/virtual-company-secretary.tsx

"use client";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import {
  Shield,
  Users,
  Clock,
  FileText,
  Phone,
  ArrowRight,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  "ROC Annual Filings",
  "Statutory Registers Maintenance",
  "Board Meeting Documentation",
  "Filing of Resolutions",
  "Director KYC Compliance",
  "DIN & DSC Management",
  "Company Law Advisory",
  "Regulatory Reporting Support",
];

const benefits = [
  {
    icon: <Shield className="w-12 h-12 text-green-400" />,
    title: "Expert Compliance",
    description: "Ensure your company meets all legal obligations on time.",
  },
  {
    icon: <Users className="w-12 h-12 text-green-400" />,
    title: "Dedicated Support",
    description: "Get access to a virtual CS for regular guidance and filings.",
  },
  {
    icon: <Clock className="w-12 h-12 text-green-400" />,
    title: "Time-Saving",
    description: "Focus on growth while we handle your secretarial tasks.",
  },
  {
    icon: <FileText className="w-12 h-12 text-green-400" />,
    title: "Document Accuracy",
    description: "Well-drafted board resolutions and registers at your disposal.",
  },
];

export default function VirtualCompanySecretary() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 to-black pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(74,222,128,0.1),_transparent_50%)]" />
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.span
              variants={fadeIn("up", "tween", 0.1, 1)}
              className="inline-block text-green-400 font-semibold mb-4"
            >
              Seamless Compliance for Modern Businesses
            </motion.span>
            <motion.h1
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent mb-6"
            >
              Virtual Company Secretary Services
            </motion.h1>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              Get reliable, remote compliance support from certified company secretaries. All filings, documentation, and advisory — fully online.
            </motion.p>
            <motion.div
              variants={fadeIn("up", "tween", 0.4, 1)}
              className="flex gap-4 justify-center"
            >
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-lg px-8"
              >
                Get Started <ArrowRight className="ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-500 text-green-500 hover:bg-green-500/10 text-lg px-8"
              >
                Book Consultation <Phone className="ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zinc-900/30">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-4xl font-bold text-white mb-4"
            >
              Why Choose Our Virtual CS Services?
            </motion.h2>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-gray-400 max-w-2xl mx-auto"
            >
              Simplify your corporate compliance with expert virtual secretarial support.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", "spring", index * 0.1, 0.75)}
                className="bg-zinc-800/30 backdrop-blur-sm rounded-xl border border-green-500/10 p-8 text-center hover:border-green-500/30 transition-all duration-300"
              >
                <div className="flex justify-center mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-green-400 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Included Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn("up", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              What's Included
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Get a complete package of annual and event-based compliance services.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", "tween", index * 0.1, 0.75)}
                className="flex items-center gap-3"
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Check className="h-4 w-4 text-green-500" />
                </div>
                <span className="text-gray-300">{service}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
