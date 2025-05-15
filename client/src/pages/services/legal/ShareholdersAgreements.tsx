"use client";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import {
  FileText,
  Users,
  ShieldCheck,
  Briefcase,
  Phone,
  ArrowRight,
  Check,
  Gavel,
  Scale,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  "Drafting of shareholder agreements",
  "Conflict resolution clauses",
  "Tag-along and drag-along rights",
  "Exit strategies and lock-in periods",
  "Board composition and voting rights",
  "Dividend and profit-sharing rules",
  "Capital contribution terms",
  "Non-compete and confidentiality clauses",
];

const benefits = [
  {
    icon: <ShieldCheck className="w-12 h-12 text-green-400" />,
    title: "Legal Protection",
    description: "Protects both majority and minority shareholders legally.",
  },
  {
    icon: <Users className="w-12 h-12 text-green-400" />,
    title: "Clear Roles",
    description: "Defines roles, responsibilities, and expectations.",
  },
  {
    icon: <Briefcase className="w-12 h-12 text-green-400" />,
    title: "Business Continuity",
    description: "Avoids future disputes by establishing clear frameworks.",
  },
  {
    icon: <Gavel className="w-12 h-12 text-green-400" />,
    title: "Dispute Resolution",
    description: "Includes resolution mechanisms to handle disagreements.",
  },
];

const requirements = [
  "List of shareholders and their shareholding percentage",
  "Business constitution documents (MOA/AOA)",
  "Investment agreements (if any)",
  "Desired clauses and preferences for rights",
  "Board structure and management roles",
];

const timeline = [
  {
    title: "Day 1 - Kickoff",
    description: "Discussion on company structure and shareholder expectations.",
  },
  {
    title: "Day 2-3 - Drafting",
    description: "Initial draft based on discussions and existing company documents.",
  },
  {
    title: "Day 4 - Review",
    description: "Client review, revisions, and finalization of terms.",
  },
  {
    title: "Day 5 - Signing",
    description: "Signing of final agreement and legal implementation support.",
  },
];

export default function ShareholdersAgreements() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 to-black pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(34,197,94,0.1),_transparent_50%)]" />
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
              Secure and Clear Ownership Structures
            </motion.span>
            <motion.h1
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent mb-6"
            >
              Shareholders Agreements Drafting
            </motion.h1>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              Define the rights, responsibilities, and protections of shareholders
              with legally sound agreements tailored to your business.
            </motion.p>
            <motion.div
              variants={fadeIn("up", "tween", 0.4, 1)}
              className="flex gap-4 justify-center"
            >
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-lg px-8">
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
              Why Draft a Shareholders Agreement?
            </motion.h2>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-gray-400 max-w-2xl mx-auto"
            >
              Avoid misunderstandings and set a strong foundation for growth and equity ownership.
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

      {/* What's Included Section */}
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
              Each agreement is customized to meet investor expectations and ensure compliance.
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
      <section className="py-20 bg-zinc-900/20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Requirements</h2>
            <p className="text-gray-400">
              Please keep the following ready to ensure a smooth drafting process:
            </p>
          </motion.div>

          <ul className="space-y-4 text-gray-300">
            {requirements.map((item, index) => (
              <motion.li
                key={index}
                variants={fadeIn("up", "tween", index * 0.1, 0.6)}
                className="flex items-start gap-2"
              >
                <Check className="mt-1 text-green-500" /> {item}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Timeline</h2>
            <p className="text-gray-400">From initiation to finalization, here's how we work:</p>
          </motion.div>

          <div className="space-y-6">
            {timeline.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", "tween", index * 0.1, 0.75)}
                className="bg-zinc-800/30 p-6 rounded-lg border border-green-500/10"
              >
                <h3 className="text-green-400 text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
