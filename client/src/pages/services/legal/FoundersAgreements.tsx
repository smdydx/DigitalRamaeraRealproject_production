// app/services/founders-agreements/page.tsx

"use client";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import {
  Users,
  FileText,
  Shield,
  Check,
  Clock,
  Phone,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  "Equity Sharing Arrangements",
  "Roles and Responsibilities Definition",
  "Decision-Making Protocols",
  "Intellectual Property Ownership",
  "Vesting Schedules",
  "Dispute Resolution Mechanisms",
  "Confidentiality Clauses",
  "Exit Strategies and Buyout Terms",
];

const benefits = [
  {
    icon: <Users className="w-12 h-12 text-blue-400" />,
    title: "Clear Partnership Terms",
    description:
      "Establish transparent agreements to avoid misunderstandings among founders.",
  },
  {
    icon: <Shield className="w-12 h-12 text-blue-400" />,
    title: "Protect Intellectual Property",
    description:
      "Ensure IP ownership and contributions are properly documented and secured.",
  },
  {
    icon: <Clock className="w-12 h-12 text-blue-400" />,
    title: "Prevent Future Disputes",
    description:
      "Define dispute resolution and exit plans to protect the startup’s future.",
  },
  {
    icon: <FileText className="w-12 h-12 text-blue-400" />,
    title: "Legal Compliance",
    description:
      "Draft agreements compliant with corporate laws and industry standards.",
  },
];

const requirements = [
  "Details of each founder (name, address, identification).",
  "Description of each founder’s contributions (cash, IP, services).",
  "Agreed equity split and vesting schedules.",
  "Roles, responsibilities, and decision-making processes.",
  "Confidentiality and non-compete clauses.",
  "Exit and buyout procedures.",
];

const timeline = [
  {
    step: "Initial Consultation",
    description:
      "Discuss your startup structure and specific needs for the founders’ agreement.",
  },
  {
    step: "Draft Preparation",
    description:
      "Our legal experts draft a customized agreement covering all essential clauses.",
  },
  {
    step: "Review and Feedback",
    description:
      "Review the draft with your team and provide feedback or request revisions.",
  },
  {
    step: "Finalization",
    description:
      "Finalize the document and prepare it for signing and legal formalities.",
  },
  {
    step: "Post-Agreement Support",
    description:
      "We assist with filing, updates, and amendments as your startup evolves.",
  },
];

export default function FoundersAgreements() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 to-black pt-24">
      {/* Hero Section */}
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
              Solidify Your Startup’s Foundation
            </motion.span>
            <motion.h1
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent mb-6"
            >
              Founders Agreements
            </motion.h1>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              Establish clear, legally-binding agreements among founders to
              ensure smooth collaboration and protect your startup’s future.
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
      <section className="py-20 bg-slate-900/30">
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
              Why Choose Our Founders Agreements?
            </motion.h2>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-gray-400 max-w-2xl mx-auto"
            >
              Protect your startup and maintain harmony among founders with
              expert-drafted agreements.
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
                className="bg-slate-800/30 backdrop-blur-sm rounded-xl border border-blue-500/10 p-8 text-center hover:border-blue-500/30 transition-all duration-300"
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={fadeIn("up", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">What's Included</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive services to prepare and execute your founders’
              agreement.
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
                  <Check className="h-4 w-4 text-blue-500" />
                </div>
                <span className="text-gray-300">{service}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-slate-900/40">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            variants={fadeIn("up", "tween", 0.3, 1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Requirements</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-3 text-lg">
              {requirements.map((req, index) => (
                <li key={index} className="hover:text-blue-400 transition-colors">
                  {req}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            variants={fadeIn("up", "tween", 0.3, 1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-8">Timeline</h2>
          </motion.div>

          <div className="space-y-10">
            {timeline.map(({ step, description }, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", "spring", index * 0.15, 0.75)}
                className="flex items-start gap-6"
              >
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                    {index + 1}
                  </div>
                  {index !== timeline.length - 1 && (
                    <div className="w-px h-20 bg-blue-500 mt-1" />
                  )}
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-blue-400 mb-2">
                    {step}
                  </h3>
                  <p className="text-gray-300 max-w-xl">{description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
