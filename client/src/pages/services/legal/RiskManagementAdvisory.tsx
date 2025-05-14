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
  ClipboardCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  "Risk Assessment & Analysis",
  "Risk Mitigation Strategy Development",
  "Crisis Management Planning",
  "Business Continuity Planning",
  "Compliance Risk Management",
  "Operational Risk Management",
  "Cybersecurity Risk Management",
  "Regulatory Compliance Advisory",
  "Fraud Prevention Strategy",
  "Enterprise Risk Management (ERM)",
];

const benefits = [
  {
    icon: <Shield className="w-12 h-12 text-green-400" />,
    title: "Comprehensive Risk Evaluation",
    description: "Identify and assess potential risks across all business functions.",
  },
  {
    icon: <Users className="w-12 h-12 text-green-400" />,
    title: "Tailored Risk Solutions",
    description: "Custom solutions designed to address your specific business needs and industry requirements.",
  },
  {
    icon: <Clock className="w-12 h-12 text-green-400" />,
    title: "Proactive Approach",
    description: "Be prepared in advance by identifying risks early to prevent potential disruptions.",
  },
  {
    icon: <FileText className="w-12 h-12 text-green-400" />,
    title: "Compliance & Security",
    description: "Ensure that your business adheres to the necessary regulations and secures its operations from threats.",
  },
];

export default function RiskManagementAdvisory() {
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
              Safeguard Your Business from Uncertainty
            </motion.span>
            <motion.h1
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent mb-6"
            >
              Risk Management Advisory Services
            </motion.h1>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              Empower your business with comprehensive risk management solutions to identify, assess, and mitigate potential risks effectively. Our expert advisors are here to help you navigate uncertainties with confidence.
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
              Why Choose Our Risk Management Advisory Services?
            </motion.h2>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-gray-400 max-w-2xl mx-auto"
            >
              Our risk management advisory services provide a structured approach to mitigate risks, safeguard assets, and maintain business continuity. We help you proactively manage risks that could impact your organization’s growth and sustainability.
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
              What’s Included in Our Risk Management Advisory Services?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our comprehensive risk management services cover a wide range of strategic, operational, compliance, and cybersecurity risks. We provide actionable solutions tailored to your business's needs, ensuring that you’re prepared for any challenge.
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
                className="bg-zinc-800/20 backdrop-blur-md rounded-xl border border-green-500/20 p-6 text-center hover:border-green-500/40 transition-all duration-300"
              >
                <div className="flex justify-center mb-6">
                  <ClipboardCheck className="w-10 h-10 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-green-400 mb-4">{service}</h3>
                <p className="text-gray-300">Comprehensive support and actionable strategies for each area of risk management.</p>
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
            Ready to Take Control of Your Business's Risks?
          </motion.h2>
          <motion.p
            variants={fadeIn("up", "tween", 0.3, 1)}
            initial="hidden"
            animate="visible"
            className="text-lg text-gray-400 mb-6"
          >
            Our team of expert advisors is here to help you understand, mitigate, and manage risks at every level. Take the first step towards securing your business by scheduling a consultation with us today.
          </motion.p>
          <Button
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-lg px-8"
          >
            Schedule Consultation <ArrowRight className="ml-2" />
          </Button>
        </div>
      </section>
    </main>
  );
}
