
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Shield, FileCheck, FileText, Book, LucideIcon, Building2, ScrollText } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const registers = [
  {
    name: "Register of Sweat Equity Shares",
    description: "Records details of sweat equity shares issued by the company under Section 54"
  },
  {
    name: "Register of Employee Stock Options",
    description: "Maintains information regarding employee stock options under Section 62(1)(b)"
  },
  {
    name: "Register of Securities Bought Back",
    description: "Documents securities bought back by the company under Section 68(9)"
  },
  {
    name: "Register of Deposits",
    description: "Records deposits accepted by the company under Section 73"
  },
  {
    name: "Register of Members",
    description: "Contains details of company shareholders under Section 88(1)(a)"
  },
  {
    name: "Register of Directors/KMP",
    description: "Details of directors and key managerial personnel under Section 170(1)"
  }
];

const faqs = [
  {
    question: "What are statutory registers, and why are they important for companies?",
    answer: "Statutory registers are foundational documents mandated by the Companies Act, 2013 that record essential information about company operations, including shareholder details, directorships, meeting minutes, and investments. They ensure transparency, accountability, and regulatory compliance."
  },
  {
    question: "Can statutory registers be maintained electronically?",
    answer: "Yes, companies can maintain statutory registers in electronic format. This offers advantages like easy access, searchability, and reduced storage space, but must ensure compliance with data security requirements."
  },
  {
    question: "Are statutory books and registers open for inspection?",
    answer: "Yes, statutory registers must be accessible for inspection by directors, members, and debenture-holders during business hours without fees. Non-members may inspect upon payment of prescribed fees."
  },
  {
    question: "What are the penalties for refusing statutory register inspection?",
    answer: "Non-compliance can result in fines up to ₹1,000 per day of default (maximum ₹1 lakh) and potential imprisonment up to 6 months for company officers."
  },
  {
    question: "How do statutory registers facilitate due diligence?",
    answer: "Statutory registers provide critical data for legal proceedings, audits, and stakeholder inspections, serving as reliable evidence of company affairs and facilitating transparent due diligence processes."
  }
];

export default function StatutoryRegisters() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black pt-24">
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
              Statutory Registers Maintenance
            </motion.h1>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-gray-400 max-w-3xl mx-auto mb-8"
            >
              Statutory registers are crucial pillars for ensuring legal compliance and organizational transparency in a company. Mandated under the Companies Act of 2013, these registers serve as meticulous archives of company information, ranging from particulars of its shareholders to records of its board meetings.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-10 bg-zinc-900/30">
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
              className="text-3xl font-bold text-center text-green-400 mb-8"
            >
              Key Statutory Registers
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {registers.map((register, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn("up", "spring", index * 0.1, 0.75)}
                  className="bg-zinc-800/50 p-6 rounded-lg border border-green-500/10 hover:border-green-500/30 transition-all"
                >
                  <h3 className="text-xl font-semibold text-white mb-2">{register.name}</h3>
                  <p className="text-gray-400">{register.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-zinc-900/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="h-8 w-8" />,
                title: "Register Maintenance",
                description: "Comprehensive maintenance of all statutory registers including Members, Directors, Charges, and more"
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Legal Compliance",
                description: "Ensure compliance with Companies Act 2013 requirements for register maintenance"
              },
              {
                icon: <FileCheck className="h-8 w-8" />,
                title: "Regular Updates",
                description: "Timely updates and maintenance of all statutory records and registers"
              },
              {
                icon: <FileText className="h-8 w-8" />,
                title: "Documentation",
                description: "Proper documentation and storage of all statutory books and registers"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", "spring", index * 0.1, 0.75)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-zinc-800/50 rounded-lg p-6 border border-green-500/10 hover:border-green-500/30 transition-all"
              >
                <div className="text-green-500 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-zinc-800/30 rounded-lg border border-green-500/10"
                >
                  <AccordionTrigger className="px-6 text-white hover:text-green-400">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-400">
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
