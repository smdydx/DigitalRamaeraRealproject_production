"use client";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import {
  Lock,
  ShieldCheck,
  FileText,
  Users,
  Clock,
  EyeOff,
  Phone,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  "Mutual & Unilateral NDAs",
  "Confidentiality Clauses Drafting",
  "Non-Compete Provisions",
  "Data Protection Terms",
  "Duration & Termination Conditions",
  "Breach Remedies and Penalties",
  "Third-Party Disclosure Controls",
  "Custom NDA Templates",
];

const benefits = [
  {
    icon: <Lock className="w-12 h-12 text-purple-400" />,
    title: "Protect Sensitive Information",
    description:
      "Safeguard your business secrets and intellectual property effectively.",
  },
  {
    icon: <ShieldCheck className="w-12 h-12 text-purple-400" />,
    title: "Legal Enforceability",
    description: "Drafted to be robust and enforceable under applicable laws.",
  },
  {
    icon: <EyeOff className="w-12 h-12 text-purple-400" />,
    title: "Prevent Unauthorized Disclosure",
    description: "Limits sharing of confidential data to trusted parties only.",
  },
  {
    icon: <Clock className="w-12 h-12 text-purple-400" />,
    title: "Timely Protection",
    description: "Set clear timelines for confidentiality obligations.",
  },
];

const requirements = [
  "Parties Involved Details",
  "Confidential Information Description",
  "Purpose of Disclosure",
  "Duration of Agreement",
  "Applicable Jurisdiction",
];

const timeline = [
  { day: "Day 1", task: "Initial Consultation & NDA Needs Assessment" },
  { day: "Day 2-3", task: "Drafting NDA Document" },
  { day: "Day 4", task: "Review & Client Feedback" },
  { day: "Day 5", task: "Finalization & Signing" },
];

export default function NonDisclosureAgreements() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-900 to-black pt-24">
      <section className="relative overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.1),_transparent_50%)]" />
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.span
              variants={fadeIn("up", "tween", 0.1, 1)}
              className="inline-block text-purple-400 font-semibold mb-4"
            >
              Secure Your Confidential Business Information
            </motion.span>
            <motion.h1
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-6"
            >
              Non-Disclosure Agreements (NDAs)
            </motion.h1>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              Customized NDAs to protect your trade secrets and confidential information with clear terms and enforceable clauses.
            </motion.p>
            <motion.div
              variants={fadeIn("up", "tween", 0.4, 1)}
              className="flex gap-4 justify-center"
            >
              <Button size="lg" className="bg-purple-500 hover:bg-purple-600 text-lg px-8">
                Get Started <ArrowRight className="ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-500 text-purple-500 hover:bg-purple-500/10 text-lg px-8"
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
              Why Choose Our NDAs?
            </motion.h2>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-gray-400 max-w-2xl mx-auto"
            >
              Protect your confidential information with legally sound, tailor-made Non-Disclosure Agreements.
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
                className="bg-zinc-800/30 backdrop-blur-sm rounded-xl border border-purple-500/10 p-8 text-center hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="flex justify-center mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-purple-400 mb-4">
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
            <h2 className="text-4xl font-bold text-white mb-4">Our NDA Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We draft and review NDAs that suit your specific business requirements, ensuring confidentiality is never compromised.
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
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <FileText className="h-4 w-4 text-purple-500" />
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
                className="bg-zinc-800/40 p-4 rounded-md border border-purple-500/10 text-gray-300"
              >
                <div className="text-purple-400 font-semibold mb-1">{item.day}</div>
                <div>{item.task}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
