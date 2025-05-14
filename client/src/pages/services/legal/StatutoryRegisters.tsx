
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Shield, FileCheck, FileText, Book, MessageSquare, Phone } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const registers = [
  {
    name: "Register of Members",
    description: "Contains details of shareholders under Section 88(1)(a)"
  },
  {
    name: "Register of Directors & KMP",
    description: "Details of directors and key managerial personnel under Section 170(1)"
  },
  {
    name: "Register of Charges",
    description: "Records charges created on company assets under Section 85"
  },
  {
    name: "Minutes Book",
    description: "Records proceedings of board and general meetings under Section 118"
  },
  {
    name: "Register of Contracts",
    description: "Details of contracts with related parties under Section 189"
  },
  {
    name: "Register of Investments",
    description: "Records investments not held in company's name under Section 187"
  }
];

const documents = [
  "Company's Incorporation Documents",
  "List of Shareholders with Details",
  "Director Identification Numbers (DIN)",
  "Board Resolution Templates",
  "Annual Returns and Financial Statements",
  "Existing Statutory Registers (if any)"
];

export default function StatutoryRegisters() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black pt-24">
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
              Statutory Registers Maintenance
            </motion.h1>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-gray-400 max-w-3xl mx-auto mb-8"
            >
              Professional assistance in maintaining and updating your company's statutory registers in compliance with the Companies Act, 2013
            </motion.p>
            
            {/* Contact Buttons */}
            <motion.div 
              variants={fadeIn("up", "tween", 0.4, 1)}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              <Button size="lg" className="bg-green-500 hover:bg-green-600 flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <a href="tel:+919876543210">Call Now</a>
              </Button>
              <Button size="lg" variant="outline" className="border-green-500 text-green-500 hover:bg-green-500/10 flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                <a href="https://wa.me/919876543210" target="_blank">WhatsApp</a>
              </Button>
              <Button size="lg" variant="outline" className="border-green-500 text-green-500 hover:bg-green-500/10 flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                <a href="#contact">Message Us</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 bg-zinc-900/30">
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
              className="text-3xl font-bold text-green-400 mb-6"
            >
              Required Registers
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

      {/* Required Documents */}
      <section className="py-12">
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
              className="text-3xl font-bold text-green-400 mb-6"
            >
              Required Documents
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {documents.map((doc, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn("up", "spring", index * 0.1, 0.75)}
                  className="flex items-start gap-3 bg-zinc-800/50 p-6 rounded-lg border border-green-500/10"
                >
                  <FileCheck className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">{doc}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Professional Services */}
      <section className="py-12 bg-zinc-900/30">
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
              className="text-3xl font-bold text-green-400 mb-6"
            >
              Our Services
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                variants={fadeIn("up", "spring", 0.1, 0.75)}
                className="bg-zinc-800/50 p-6 rounded-lg border border-green-500/10"
              >
                <BookOpen className="h-8 w-8 text-green-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Setup</h3>
                <p className="text-gray-400">Initial setup and organization of all statutory registers</p>
              </motion.div>
              <motion.div
                variants={fadeIn("up", "spring", 0.2, 0.75)}
                className="bg-zinc-800/50 p-6 rounded-lg border border-green-500/10"
              >
                <Shield className="h-8 w-8 text-green-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Maintenance</h3>
                <p className="text-gray-400">Regular updates and proper maintenance of registers</p>
              </motion.div>
              <motion.div
                variants={fadeIn("up", "spring", 0.3, 0.75)}
                className="bg-zinc-800/50 p-6 rounded-lg border border-green-500/10"
              >
                <FileText className="h-8 w-8 text-green-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Compliance</h3>
                <p className="text-gray-400">Ensuring compliance with legal requirements</p>
              </motion.div>
            </div>
          </motion.div>
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
              {[
                {
                  question: "What are statutory registers?",
                  answer: "Statutory registers are mandatory records that companies must maintain under the Companies Act, 2013. They include registers of members, directors, charges, and other important company information."
                },
                {
                  question: "How long should statutory registers be maintained?",
                  answer: "Statutory registers must be maintained permanently. Even after the closure of a company, these records should be preserved for at least 8 years."
                },
                {
                  question: "Can statutory registers be maintained electronically?",
                  answer: "Yes, companies can maintain statutory registers in electronic format, ensuring proper backup and security measures are in place."
                },
                {
                  question: "What are the penalties for non-compliance?",
                  answer: "Non-compliance can result in fines ranging from ₹10,000 to ₹50,000 and potential legal action against the company and its officers."
                },
                {
                  question: "Who can inspect statutory registers?",
                  answer: "Members of the company have the right to inspect statutory registers during business hours. Other stakeholders may need to pay a fee for inspection."
                }
              ].map((faq, index) => (
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

      {/* Call to Action */}
      <section className="py-20 bg-zinc-900/30">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-3xl font-bold text-white mb-6"
            >
              Need Help with Statutory Registers?
            </motion.h2>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-gray-400 mb-8"
            >
              Let our experts handle your compliance requirements while you focus on growing your business
            </motion.p>
            <motion.div
              variants={fadeIn("up", "tween", 0.4, 1)}
              className="flex flex-wrap justify-center gap-4"
            >
              <Button size="lg" className="bg-green-500 hover:bg-green-600 flex items-center gap-2">
                <Phone className="h-5 w-5" />
                <a href="tel:+919876543210">Call Now</a>
              </Button>
              <Button size="lg" variant="outline" className="border-green-500 text-green-500 hover:bg-green-500/10 flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                <a href="https://wa.me/919876543210" target="_blank">WhatsApp</a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
