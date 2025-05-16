import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Check, ArrowRight, Phone } from "lucide-react";

const benefits = [
  {
    title: "Clear Ownership Transfer",
    description:
      "Ensure that all intellectual property rights are properly assigned or licensed, avoiding disputes.",
    icon: <Check className="text-yellow-400 w-10 h-10" />,
  },
  {
    title: "Customized Agreement Templates",
    description:
      "Tailored agreements that meet your specific business and legal requirements.",
    icon: <Check className="text-yellow-400 w-10 h-10" />,
  },
  {
    title: "Expert Legal Review",
    description:
      "Professional vetting by IP attorneys to protect your rights and interests.",
    icon: <Check className="text-yellow-400 w-10 h-10" />,
  },
  {
    title: "Compliance Assurance",
    description:
      "Ensure agreements comply with applicable IP laws and contractual norms.",
    icon: <Check className="text-yellow-400 w-10 h-10" />,
  },
];

const pricing = [
  {
    plan: "Basic Package",
    price: "₹15,000",
    features: ["Standard agreement drafting", "1 revision"],
  },
  {
    plan: "Standard Package",
    price: "₹25,000",
    features: ["Custom agreements", "Up to 3 revisions", "Legal consultation"],
  },
  {
    plan: "Premium Package",
    price: "₹40,000",
    features: [
      "All Standard features",
      "Negotiation support",
      "Priority service",
    ],
  },
];

const requirements = [
  "Details of the intellectual property involved (e.g., patents, trademarks, copyrights).",
  "Parties involved in the assignment or license agreement.",
  "Scope and duration of the license or assignment.",
  "Payment terms and conditions.",
  "Any territorial restrictions or exclusivity clauses.",
  "Supporting documents like prior agreements, IP registrations.",
];

const timeline = [
  { day: "Day 1-3", task: "Initial consultation and information gathering" },
  { day: "Day 4-7", task: "Drafting of the agreement document" },
  { day: "Day 8-10", task: "Review and revisions with client" },
  { day: "Day 11-14", task: "Final legal vetting and signing assistance" },
];

export default function DraftingIPAssignmentLicense() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-yellow-900 to-black pt-24">
      {/* Hero Section */}
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
              Secure Your Intellectual Property
            </motion.span>
            <motion.h1
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent mb-6"
            >
              Drafting IP Assignment & License Agreements
            </motion.h1>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              Expertly crafted agreements to protect, transfer, and license your intellectual property rights.
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

      {/* Benefits Section */}
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
              Why Choose Our Drafting Service?
            </motion.h2>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-gray-400 max-w-2xl mx-auto"
            >
              Customized, legally sound IP agreements crafted by professionals.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn("up", "spring", idx * 0.1, 0.75)}
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

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h2
            variants={fadeIn("up", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl font-bold text-white text-center mb-12"
          >
            Pricing Plans
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn("up", "tween", idx * 0.1, 0.75)}
                className="bg-yellow-900/30 rounded-xl border border-yellow-500/20 p-8 text-center"
              >
                <h3 className="text-2xl font-semibold text-yellow-400 mb-4">
                  {plan.plan}
                </h3>
                <p className="text-yellow-300 text-xl mb-6">{plan.price}</p>
                <ul className="text-gray-300 mb-6 list-disc list-inside space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                <Button
                  size="default"
                  className="bg-yellow-500 hover:bg-yellow-600 px-6"
                >
                  Select Plan
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-yellow-900/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h2
            variants={fadeIn("up", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl font-bold text-white text-center mb-8"
          >
            Requirements
          </motion.h2>
          <ul className="text-gray-300 list-disc pl-6 space-y-4">
            {requirements.map((req, idx) => (
              <motion.li
                key={idx}
                variants={fadeIn("up", "tween", idx * 0.1, 0.75)}
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
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.h2
            variants={fadeIn("up", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl font-bold text-white text-center mb-8"
          >
            Estimated Timeline
          </motion.h2>
          <div className="space-y-6 text-gray-300 border border-yellow-500/20 rounded-xl p-6">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn("up", "tween", idx * 0.1, 0.75)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex justify-between font-semibold"
              >
                <span>{item.day}</span>
                <span>{item.task}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
