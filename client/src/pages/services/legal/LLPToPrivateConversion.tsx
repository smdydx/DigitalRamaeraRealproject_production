
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Building, Clock, Users, Phone } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const benefits = [
  {
    icon: <Shield className="w-12 h-12 text-green-400" />,
    title: "Retain and Grow Brands",
    description: "Continue LLP's legacy and transfer IPR rights without capital gain"
  },
  {
    icon: <Building className="w-12 h-12 text-green-400" />,
    title: "Carry Forward Benefits",
    description: "Transfer unabsorbed losses and depreciation to new company"
  },
  {
    icon: <Clock className="w-12 h-12 text-green-400" />,
    title: "Ease in Fund Raising",
    description: "Better access to investors with simplified share allotment"
  },
  {
    icon: <Users className="w-12 h-12 text-green-400" />,
    title: "ESOP Benefits",
    description: "Ability to offer employee stock options"
  }
];

const faqs = [
  {
    question: "Can LLP be converted into a Private Limited Company?",
    answer: "Yes, an LLP can be converted into a Private Limited Company under Section 366 of the Companies Act, 2013 following specific legal procedures and compliance requirements."
  },
  {
    question: "What is the time limit for LLP conversion into a company?",
    answer: "The process typically takes 30-45 days, with key steps including partner consent, newspaper publications, and ROC approvals."
  },
  {
    question: "What forms are filed for the conversion of LLP into a company?",
    answer: "The main forms include URC-1, URC-2 (for newspaper publication), RUN (for name reservation), Spice+ Form, and DIR-2 (director consent)."
  }
];

export default function LLPToPrivateConversion() {
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
              Transform Your Business Structure
            </motion.span>
            <motion.h1
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent mb-6"
            >
              Convert LLP into Private Limited Company
            </motion.h1>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              Expert guidance through the complete process of converting your LLP into a Private Limited Company. 100% online compliance services with reliable support.
            </motion.p>
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
              Benefits of Converting to Private Limited
            </motion.h2>
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
                className="bg-zinc-800/50 p-6 rounded-lg border border-green-500/10"
              >
                {benefit.icon}
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20">
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
              className="text-3xl font-bold text-center text-white mb-12"
            >
              Frequently Asked Questions
            </motion.h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-white">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-400">
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
