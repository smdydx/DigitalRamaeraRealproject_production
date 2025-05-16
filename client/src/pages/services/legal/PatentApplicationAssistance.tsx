"use client";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import {
  Lightbulb,
  Shield,
  Clock,
  FileText,
  Phone,
  ArrowRight,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  "Patent Search and Analysis",
  "Drafting Patent Applications",
  "Filing and Follow-up",
  "Responding to Office Actions",
  "Patent Portfolio Management",
  "International Patent Filing Support",
];

const benefits = [
  {
    icon: <Lightbulb className="w-12 h-12 text-yellow-400" />,
    title: "Protect Innovations",
    description: "Secure exclusive rights for your inventions.",
  },
  {
    icon: <Shield className="w-12 h-12 text-yellow-400" />,
    title: "Legal Assurance",
    description: "Ensure your patent application meets legal standards.",
  },
  {
    icon: <Clock className="w-12 h-12 text-yellow-400" />,
    title: "Efficient Filing",
    description: "Timely submission to avoid delays and rejections.",
  },
  {
    icon: <FileText className="w-12 h-12 text-yellow-400" />,
    title: "Comprehensive Support",
    description: "End-to-end assistance throughout the patent process.",
  },
];

const requirements = [
  "Detailed Description of the Invention",
  "Technical Drawings (if applicable)",
  "Inventor's Identity Proof",
  "Power of Attorney (if applicable)",
  "Prior Art Search Report (if available)",
];

const timeline = [
  { day: "Day 1-5", task: "Patent Search and Drafting Application" },
  { day: "Day 6-10", task: "Filing Application with Patent Office" },
  { day: "Day 11-20", task: "Examination and Office Actions" },
  { day: "Day 21-40", task: "Granting of Patent and Certification" },
];

export default function PatentApplicationAssistance() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-900 to-black pt-24">
      <section className="relative overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(202,138,4,0.15),_transparent_50%)]" />
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.span
              variants={fadeIn("up", "tween", 0.1, 1)}
              className="inline-block text-yellow-400 font-semibold mb-4"
            >
              Protect Your Intellectual Property
            </motion.span>
            <motion.h1
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-6"
            >
              Patent Application Assistance
            </motion.h1>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              Comprehensive support from patent search to final certification.
            </motion.p>
            <motion.div
              variants={fadeIn("up", "tween", 0.4, 1)}
              className="flex gap-4 justify-center"
            >
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-lg px-8"
              >
                Get Started <ArrowRight className="ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 text-lg px-8"
              >
                Book Consultation <Phone className="ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-yellow-900/30">
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
              Why Patent Application Assistance?
            </motion.h2>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-gray-400 max-w-2xl mx-auto"
            >
              Get expert guidance to protect your inventions with confidence and speed.
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
                className="bg-yellow-900/30 backdrop-blur-sm rounded-xl border border-yellow-500/10 p-8 text-center hover:border-yellow-500/30 transition-all duration-300"
              >
                <div className="flex justify-center mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-yellow-400 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn("up", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Detailed support covering all stages of the patent application process.
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
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-yellow-500/20 flex items-center justify-center">
                  <Check className="h-4 w-4 text-yellow-500" />
                </div>
                <span className="text-gray-300">{service}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-yellow-900/30">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeIn("up", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl font-bold text-white text-center mb-8"
          >
            Requirements for Patent Application
          </motion.h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-gray-300 list-disc pl-6">
            {requirements.map((req, index) => (
              <motion.li
                key={index}
                variants={fadeIn("up", "tween", index * 0.1, 0.75)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {req}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeIn("up", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl font-bold text-white text-center mb-8"
          >
            Estimated Timeline
          </motion.h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", "tween", index * 0.1, 0.75)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex justify-between text-gray-300 border-b border-yellow-500/20 py-4"
              >
                <span className="font-semibold">{item.day}</span>
                <span>{item.task}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}