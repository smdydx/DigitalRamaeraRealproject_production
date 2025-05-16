
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Helmet } from "react-helmet";
import { Building2, Verified, PieChart, Briefcase, Scale, HelpCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function MergersDemergers() {
  const services = [
    "Due diligence and valuation support",
    "Scheme of arrangement preparation",
    "Regulatory compliance management",
    "NCLT petition filing and representation",
    "Post-merger integration advisory",
    "Tax implications guidance",
    "Stakeholder communication support"
  ];

  const faqs = [
    {
      question: "What is the difference between a merger and demerger?",
      answer: "A merger combines two or more companies into a single entity, while a demerger splits one company into two or more separate entities. Both are forms of corporate restructuring used to achieve different business objectives."
    },
    {
      question: "What are the key regulatory approvals required?",
      answer: "Key approvals include NCLT approval, shareholders' and creditors' consent, ROC filings, stock exchange approvals (for listed companies), and other sector-specific regulatory clearances."
    },
    {
      question: "How long does the merger/demerger process take?",
      answer: "The timeline typically ranges from 6-12 months, depending on complexity, regulatory requirements, and stakeholder approvals. Fast-track mergers may be completed in 3-4 months."
    },
    {
      question: "What are the tax implications?",
      answer: "Tax implications vary based on the structure. Generally, tax-neutral mergers/demergers are possible under specific conditions defined in the Income Tax Act. Professional guidance is essential for optimal tax planning."
    },
    {
      question: "What happens to employees in a merger/demerger?",
      answer: "Employees typically transfer to the new entity with similar terms and conditions. Their rights are protected under applicable labor laws, and proper communication is essential."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Mergers & Demergers Services | Legal Services</title>
      </Helmet>
      <main className="min-h-screen bg-gradient-to-b from-zinc-900 to-black pt-24">
        <section className="relative overflow-hidden">
          <div className="container mx-auto px-4 py-16">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="max-w-4xl mx-auto"
            >
              <motion.h1
                variants={fadeIn("up", "tween", 0.2, 1)}
                className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text text-transparent mb-6 text-center"
              >
                Mergers & Demergers Services
              </motion.h1>

              <motion.div
                variants={fadeIn("up", "tween", 0.3, 1)}
                className="prose prose-invert max-w-none mb-12"
              >
                <div className="bg-zinc-800/50 rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                    <Building2 className="h-6 w-6 text-purple-500" />
                    Overview
                  </h2>
                  <p className="text-gray-300">
                    Our comprehensive mergers and demergers services provide end-to-end support for corporate restructuring initiatives. We help businesses navigate complex regulatory requirements, ensure compliance, and achieve their strategic objectives through efficient execution of mergers and demergers.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-zinc-800/50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Verified className="h-5 w-5 text-purple-500" />
                      Benefits of Mergers
                    </h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>Increased market share</li>
                      <li>Cost optimization</li>
                      <li>Operational synergies</li>
                      <li>Enhanced competitiveness</li>
                    </ul>
                  </div>

                  <div className="bg-zinc-800/50 rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <PieChart className="h-5 w-5 text-purple-500" />
                      Benefits of Demergers
                    </h3>
                    <ul className="space-y-2 text-gray-300">
                      <li>Better focus on core business</li>
                      <li>Unlocking shareholder value</li>
                      <li>Risk segregation</li>
                      <li>Strategic realignment</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-zinc-800/50 rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                    <Briefcase className="h-6 w-6 text-purple-500" />
                    Our Services
                  </h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map((service, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Scale className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-zinc-800/50 rounded-lg p-6">
                  <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                    <HelpCircle className="h-6 w-6 text-purple-500" />
                    Frequently Asked Questions
                  </h2>
                  <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, idx) => (
                      <AccordionItem key={idx} value={`item-${idx}`}>
                        <AccordionTrigger className="text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
