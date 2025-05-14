"use client";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Shield, Users, Clipboard, FileText, ArrowRight, Check, BarChart, Phone } from "lucide-react";  // Ensure Phone is imported
import { Button } from "@/components/ui/button";

const services = [
  "Internal Control Assessment",
  "Process Optimization & Streamlining",
  "Compliance Framework Design",
  "Operational Risk Mitigation",
  "Financial Controls Advisory",
  "Audit & Monitoring Systems",
  "Regulatory Compliance Advisory",
  "Control Automation & Systems Integration",
  "Business Process Reengineering",
  "Continuous Improvement Strategies",
];

const benefits = [
  {
    icon: <Shield className="w-12 h-12 text-blue-400" />,
    title: "Enhanced Operational Efficiency",
    description: "Improved internal controls result in streamlined processes, reduced waste, and better resource allocation.",
  },
  {
    icon: <Users className="w-12 h-12 text-blue-400" />,
    title: "Empowered Teams",
    description: "Clearer processes and controls give teams the confidence and tools to perform tasks with greater precision.",
  },
  {
    icon: <Clipboard className="w-12 h-12 text-blue-400" />,
    title: "Stronger Compliance & Risk Mitigation",
    description: "Ensure that your operations stay compliant with the latest regulations while effectively mitigating risks.",
  },
  {
    icon: <BarChart className="w-12 h-12 text-blue-400" />,
    title: "Data-Driven Decision Making",
    description: "Leverage data and metrics to make informed decisions that drive performance improvements and business growth.",
  },
];

export default function InternalControlsAndProcessAdvisory() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 to-black pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(100,149,237,0.1),_transparent_50%)]" />
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.span
              variants={fadeIn("up", "tween", 0.1, 1)}
              className="inline-block text-blue-400 font-semibold mb-4"
            >
              Strengthen Your Internal Processes
            </motion.span>
            <motion.h1
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-indigo-600 bg-clip-text text-transparent mb-6"
            >
              Internal Controls & Process Advisory Services
            </motion.h1>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              Our Internal Controls and Process Advisory services are designed to help organizations enhance operational efficiency, strengthen compliance, and reduce risks. We work with you to build a robust framework that ensures smooth, scalable operations.
            </motion.p>
            <motion.div
              variants={fadeIn("up", "tween", 0.4, 1)}
              className="flex gap-4 justify-center"
            >
              <Button
                size="lg"
                className="bg-blue-500 hover:bg-blue-600 text-lg px-8"
              >
                Get Started <ArrowRight className="ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-500 text-blue-500 hover:bg-blue-500/10 text-lg px-8"
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
              Why Our Internal Controls & Process Advisory Services?
            </motion.h2>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-gray-400 max-w-2xl mx-auto"
            >
              We focus on improving business processes while strengthening internal controls to enhance operational performance, security, and regulatory compliance. Our approach ensures your business runs efficiently and mitigates risks that could hinder growth.
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
                className="bg-zinc-800/30 backdrop-blur-sm rounded-xl border border-blue-500/10 p-8 text-center hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex justify-center mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-blue-400 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Included Section */}
      <section className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn("up", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              What’s Included in Our Internal Controls & Process Advisory Services?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We provide a comprehensive suite of services that cover the full spectrum of internal controls, from identifying gaps to implementing effective solutions. Our experts work closely with you to align your processes with industry best practices and ensure full compliance with regulatory standards.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", "spring", index * 0.1, 0.75)}
                className="bg-zinc-800/20 backdrop-blur-md rounded-xl border border-blue-500/20 p-6 text-center hover:border-blue-500/40 transition-all duration-300"
              >
                <div className="flex justify-center mb-6">
                  <Clipboard className="w-10 h-10 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-blue-400 mb-4">{service}</h3>
                <p className="text-gray-300">Comprehensive support and actionable strategies for each area of internal control and process improvement.</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-zinc-900/40">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            variants={fadeIn("up", "tween", 0.2, 1)}
            initial="hidden"
            animate="visible"
            className="text-4xl font-bold text-white mb-6"
          >
            Ready to Enhance Your Internal Controls and Processes?
          </motion.h2>
          <motion.p
            variants={fadeIn("up", "tween", 0.3, 1)}
            initial="hidden"
            animate="visible"
            className="text-lg text-gray-400 mb-6"
          >
            Let us help you strengthen your business operations by improving internal controls and optimizing your processes. Schedule a consultation with our experts to get started.
          </motion.p>
          <Button
            size="lg"
            className="bg-blue-500 hover:bg-blue-600 text-lg px-8"
          >
            Schedule Consultation <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </main>
  );
}
