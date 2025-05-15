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
  "Application Preparation and Submission",
  "PT Registration for Employer and Employees",
  "Assistance with Local Tax Office Coordination",
  "Professional Tax Number Generation",
  "Employee Deduction Guidance",
  "Compliance Advisory",
  "Timely Filing of PT Returns",
  "State-wise PT Slab Support",
];

const benefits = [
  {
    icon: <Shield className="w-12 h-12 text-green-400" />,
    title: "Legal Compliance",
    description: "Avoid penalties by meeting state-level tax requirements.",
  },
  {
    icon: <Users className="w-12 h-12 text-green-400" />,
    title: "Employee Deductions",
    description: "Structure PT deductions effectively based on slabs.",
  },
  {
    icon: <Clock className="w-12 h-12 text-green-400" />,
    title: "On-time Registration",
    description: "Ensure timely registration to avoid interest and late fees.",
  },
  {
    icon: <FileText className="w-12 h-12 text-green-400" />,
    title: "Multi-state Expertise",
    description: "Support for businesses operating across different states.",
  },
];

const requirements = [
  "Business PAN Card",
  "Address Proof of Establishment",
  "ID & Address Proof of Proprietor/Partners/Directors",
  "Employee List with Salary Details",
  "Cancelled Cheque",
  "Certificate of Incorporation (if applicable)",
];

const timeline = [
  { day: "Day 1", task: "Document Collection and Verification" },
  { day: "Day 2", task: "PT Application Submission on State Portal" },
  { day: "Day 3-4", task: "Acknowledgement and Verification by Tax Officer" },
  { day: "Day 5", task: "Professional Tax Number Issuance and Compliance Briefing" },
];

export default function ProfessionalTaxRegistration() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 to-black pt-24">
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
              Simplify State Tax Compliance for Employers
            </motion.span>
            <motion.h1
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent mb-6"
            >
              Professional Tax Registration
            </motion.h1>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              Ensure state-wise compliance by registering for Professional Tax with expert support.
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
              Why Register for Professional Tax?
            </motion.h2>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-gray-400 max-w-2xl mx-auto"
            >
              Every employer must register under PT in states where applicable. Let us help you stay compliant.
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

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn("up", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">What We Offer</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Full assistance in obtaining your PT registration along with monthly compliance.
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

      <section className="py-20 bg-zinc-900/30">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeIn("up", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl font-bold text-white text-center mb-8"
          >
            Requirements for PT Registration
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
