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
  "EPF Registration and Setup",
  "ESI Scheme Enrolment",
  "Employee Data Upload Assistance",
  "Monthly PF/ESI Return Filing",
  "Compliance with EPFO & ESIC Regulations",
  "Support for Inspections and Audits",
  "Advisory on Employee Benefits Structuring",
  "Guidance on Contribution Calculations",
];

const benefits = [
  {
    icon: <Shield className="w-12 h-12 text-green-400" />,
    title: "Statutory Compliance",
    description: "Fulfill mandatory obligations under PF and ESI laws.",
  },
  {
    icon: <Users className="w-12 h-12 text-green-400" />,
    title: "Improved Employee Welfare",
    description: "Secure your workforce with reliable social security coverage.",
  },
  {
    icon: <Clock className="w-12 h-12 text-green-400" />,
    title: "Timely Filing",
    description: "Avoid penalties with regular, accurate submissions.",
  },
  {
    icon: <FileText className="w-12 h-12 text-green-400" />,
    title: "Expert Advisory",
    description: "Get clarity on rates, deductions, and applicability.",
  },
];

const requirements = [
  "Company PAN and Address Proof",
  "Digital Signature of Authorized Signatory",
  "Employee Details including Aadhaar & Bank Info",
  "Cancelled Cheque of Company",
  "Certificate of Incorporation & MoA",
  "Salary Breakup Sheet with Deductions",
];

const timeline = [
  { day: "Day 1-2", task: "Document Collection & Eligibility Check" },
  { day: "Day 3", task: "Online PF & ESI Registration Application Submission" },
  { day: "Day 4-5", task: "Verification and Issue of Registration Numbers" },
  { day: "Day 6+", task: "Post-registration advisory and portal setup" },
];

export default function ProvidentFundPFEmployeeStateInsuranceESIRegistration() {
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
              Secure Your Workforce with Mandatory Coverage
            </motion.span>
            <motion.h1
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent mb-6"
            >
              PF & ESI Registration Services
            </motion.h1>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              Get your company compliant under EPFO and ESIC with complete guidance and hassle-free filing support.
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
              Why Opt for PF & ESI Registration?
            </motion.h2>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-gray-400 max-w-2xl mx-auto"
            >
              Ensure government-mandated coverage and build employee trust with professional compliance.
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

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn("up", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Included Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We take care of your company’s statutory registrations and monthly compliance.
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

      {/* Requirements Section */}
      <section className="py-20 bg-zinc-900/30">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeIn("up", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl font-bold text-white text-center mb-8"
          >
            Requirements for Registration
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

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeIn("up", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl font-bold text-white text-center mb-8"
          >
            Timeline for Completion
          </motion.h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", "tween", index * 0.1, 0.75)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-zinc-800/40 p-4 rounded-md border border-green-500/10 text-gray-300"
              >
                <div className="text-green-400 font-semibold mb-1">{item.day}</div>
                <div>{item.task}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
