"use client";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import {
  UserCheck,
  ClipboardCheck,
  ShieldCheck,
  Clock,
  Users,
  Phone,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  "Permanent and Temporary Employment Contracts",
  "Employee Rights & Obligations",
  "Probation & Termination Clauses",
  "Non-Compete and Confidentiality",
  "Leave and Benefits Provisions",
  "Workplace Policies Integration",
  "Compliance with Labor Laws",
  "Contract Renewal and Amendments",
];

const benefits = [
  {
    icon: <UserCheck className="w-12 h-12 text-blue-400" />,
    title: "Clear Employee Terms",
    description: "Defines rights and duties clearly for employees and employers.",
  },
  {
    icon: <ShieldCheck className="w-12 h-12 text-blue-400" />,
    title: "Legal Compliance",
    description: "Ensures contracts meet current labor regulations.",
  },
  {
    icon: <Clock className="w-12 h-12 text-blue-400" />,
    title: "Efficiency",
    description: "Streamlines hiring and onboarding with ready contracts.",
  },
  {
    icon: <Users className="w-12 h-12 text-blue-400" />,
    title: "Conflict Prevention",
    description: "Minimizes workplace disputes through clear agreements.",
  },
];

const requirements = [
  "Company and Employee Details",
  "Job Description and Role",
  "Salary and Benefits Information",
  "Probation Period and Terms",
  "Applicable Labor Laws",
];

const timeline = [
  { day: "Day 1", task: "Initial Consultation & Role Assessment" },
  { day: "Day 2-3", task: "Drafting Employment Contract" },
  { day: "Day 4", task: "Review & Feedback by Client" },
  { day: "Day 5", task: "Finalization & Signing" },
];

export default function EmploymentContracts() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-900 to-black pt-24">
      <section className="relative overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(59,130,246,0.1),_transparent_50%)]" />
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
              Protect Your Workforce With Legally Sound Contracts
            </motion.span>
            <motion.h1
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-6"
            >
              Employment Contracts
            </motion.h1>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              Comprehensive employment contracts ensuring clarity and compliance for both employers and employees.
            </motion.p>
            <motion.div
              variants={fadeIn("up", "tween", 0.4, 1)}
              className="flex gap-4 justify-center"
            >
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-lg px-8">
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
              Why Choose Our Employment Contracts?
            </motion.h2>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-gray-400 max-w-2xl mx-auto"
            >
              Secure your workforce with clear, compliant, and comprehensive contracts tailored to your business needs.
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

      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn("up", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Employment Contract Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              From drafting to compliance review, we provide full support for your employment contracts.
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
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <ClipboardCheck className="h-4 w-4 text-blue-500" />
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
            Requirements to Get Started
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
            Project Timeline
          </motion.h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", "tween", index * 0.1, 0.75)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-zinc-800/40 p-4 rounded-md border border-blue-500/10 text-gray-300"
              >
                <div className="text-blue-400 font-semibold mb-1">{item.day}</div>
                <div>{item.task}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
