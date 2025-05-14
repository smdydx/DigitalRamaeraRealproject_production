
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileCheck, Clock, Building2, Users, Shield, HelpCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const benefitsData = [
  {
    icon: <Shield className="w-12 h-12 text-green-400" />,
    title: "Limited Liability",
    description: "Protects personal assets of shareholders"
  },
  {
    icon: <Building2 className="w-12 h-12 text-green-400" />,
    title: "Separate Legal Entity",
    description: "Own property and enter contracts independently"
  },
  {
    icon: <Users className="w-12 h-12 text-green-400" />,
    title: "Perpetual Succession",
    description: "Business continues even after ownership changes"
  },
  {
    icon: <FileCheck className="w-12 h-12 text-green-400" />,
    title: "Tax Advantages",
    description: "Eligible for various tax exemptions and benefits"
  }
];

const faqData = [
  {
    question: "What is the minimum capital required?",
    answer: "There is no mandatory minimum capital requirement for incorporation."
  },
  {
    question: "Can one person start a Private Limited Company?",
    answer: "No, at least 2 shareholders and 2 directors are needed for incorporation."
  },
  {
    question: "Is a physical office address necessary?",
    answer: "Yes, a physical office address is required. A residential address is acceptable with valid proof."
  },
  {
    question: "How much time does the process take?",
    answer: "The typical timeline is 5-7 working days for complete incorporation."
  },
  {
    question: "Can foreigners be shareholders or directors?",
    answer: "Yes, foreigners can be shareholders or directors, but at least one director must be a resident of India."
  }
];

export default function CorporateGovernanceAdvisory() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 to-black pt-24">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.h1
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 mb-6"
            >
              Corporate Governance Advisory
            </motion.h1>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-gray-400 max-w-2xl mx-auto mb-8"
            >
              Expert guidance for startups and businesses through seamless incorporation and compliance with the Companies Act, 2013
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-zinc-900/30">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-3xl font-bold text-green-400 mb-8 text-center"
            >
              Pricing & Timeline
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-zinc-800/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-400 mb-4">Professional Fee</h3>
                <p className="text-gray-300">Starts at ₹3,499 (exclusive of government fees and taxes)</p>
              </div>
              <div className="bg-zinc-800/50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-400 mb-4">Timeline</h3>
                <p className="text-gray-300">5-7 Working Days</p>
                <ul className="mt-4 space-y-2 text-gray-400">
                  <li>• Day 1-2: Document collection, DSC</li>
                  <li>• Day 3-4: Name reservation, MOA/AOA drafting</li>
                  <li>• Day 5-7: Form filing & incorporation certificate</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeIn("up", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold text-green-400 mb-12 text-center"
          >
            Benefits of Private Limited Company
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefitsData.map((benefit, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn("up", "tween", 0.2 * idx, 1)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="text-center p-6 bg-zinc-800/30 rounded-lg"
              >
                <div className="flex justify-center mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-green-400 mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-zinc-900/30">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <motion.h2
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-3xl font-bold text-green-400 mb-8 text-center"
            >
              Frequently Asked Questions
            </motion.h2>
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="bg-zinc-800/30 rounded-lg">
                  <AccordionTrigger className="px-4 text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 text-gray-400">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
