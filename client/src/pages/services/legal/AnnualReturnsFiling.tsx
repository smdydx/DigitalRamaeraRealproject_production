
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { ArrowRight, Check, Calendar, FileText, AlertCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Director KYC Filing",
  "AOC-4 Filing",
  "MGT-7/7A Filing",
  "ADT-1 Filing",
  "Timely Compliance",
  "Expert Support",
  "Document Preparation",
  "Complete Documentation"
];

const pricingPlans = [
  {
    title: "Director KYC",
    dueDate: "30 September",
    price: "₹500",
    description: "All directors are required to update their contact details and file a KYC annually."
  },
  {
    title: "AOC-4 Filing",
    dueDate: "30 Days After AGM",
    price: "₹3,500",
    description: "Filing of the audited financial statement of the company to ROC after the AGM."
  },
  {
    title: "MGT-7A Filing",
    dueDate: "60 Days After AGM",
    price: "₹3,000",
    description: "A mandatory filing of the company annual return with details of shareholding."
  }
];

export default function AnnualReturnsFiling() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 to-black pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent mb-6"
            >
              Annual Returns Filing
            </motion.h1>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-xl text-gray-300 mb-8"
            >
              Complete ROC compliance solution for filing AOC-4 & MGT-7 returns within due dates
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-zinc-900/30">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeIn("up", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-white mb-16"
          >
            Annual Filing Packages
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", "tween", index * 0.1, 0.75)}
                className="bg-zinc-800/30 backdrop-blur-sm rounded-xl border border-green-500/10 p-8"
              >
                <Clock className="w-10 h-10 text-green-400 mb-4" />
                <h3 className="text-2xl font-semibold text-green-400 mb-2">
                  {plan.title}
                </h3>
                <p className="text-gray-400 mb-4">Due Date: {plan.dueDate}</p>
                <p className="text-3xl font-bold text-white mb-4">{plan.price}</p>
                <p className="text-gray-300">{plan.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeIn("up", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-white mb-12"
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          >
            {[
              {
                question: "What are the consequences of not maintaining books of account?",
                answer: "Companies that fail to maintain proper books of accounts face penalties under the Companies Act. Directors and management can be held personally liable with fines."
              },
              {
                question: "Can I file a belated Income Tax Return for the Company?",
                answer: "Yes, companies can file belated returns with additional fees and interest charges. However, it's recommended to file within due dates to avoid penalties."
              },
              {
                question: "Do I need to file ROC Returns if my company has no transactions?",
                answer: "Yes, even companies with no business transactions must file annual returns (MGT-7) and financial statements (AOC-4) with the ROC."
              },
              {
                question: "What documents are needed for ROC Return filing?",
                answer: "Required documents include financial statements, board report, auditor's report, annual return forms, and supporting documents as per the filing requirements."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", "tween", index * 0.1, 0.75)}
                className="bg-zinc-800/30 backdrop-blur-sm rounded-xl border border-green-500/10 p-8"
              >
                <h3 className="text-xl font-semibold text-green-400 mb-4">
                  {faq.question}
                </h3>
                <p className="text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
