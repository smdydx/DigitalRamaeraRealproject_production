
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Helmet } from "react-helmet";
import { FileText, Check, HelpCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function ShareTransfer() {
  const features = [
    "Comprehensive verification of share transfer documentation",
    "Preparation of share transfer forms and agreements",
    "Filing of necessary forms with ROC",
    "Updating statutory registers",
    "Issuance of share certificates",
    "Legal compliance advisory",
    "Due diligence support"
  ];

  const faqs = [
    {
      question: "What documents are required for share transfer?",
      answer: "Required documents include share transfer deed (Form SH-4), share certificates, board resolution approving transfer, and PAN cards of transferor and transferee."
    },
    {
      question: "How long does the share transfer process take?",
      answer: "Generally, the process takes 15-30 days, depending on documentation completeness and regulatory requirements."
    },
    {
      question: "Is stamp duty applicable on share transfers?",
      answer: "Yes, stamp duty is applicable on share transfers. The rate varies by state and share value."
    },
    {
      question: "Can shares be transferred to relatives?",
      answer: "Yes, shares can be transferred to relatives. Special provisions exist for transfer between family members."
    },
    {
      question: "What happens after share transfer is complete?",
      answer: "New share certificates are issued, statutory registers are updated, and necessary ROC filings are completed."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Share Transfer Services | Legal Services</title>
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
                className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent mb-6 text-center"
              >
                Share Transfer Services
              </motion.h1>

              <motion.div
                variants={fadeIn("up", "tween", 0.3, 1)}
                className="prose prose-invert max-w-none mb-12"
              >
                <div className="bg-zinc-800/50 rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                    <FileText className="h-6 w-6 text-green-500" />
                    Overview
                  </h2>
                  <p className="text-gray-300">
                    Our comprehensive share transfer services ensure smooth and compliant transfer of shares between parties. We handle all aspects of the process, from documentation to regulatory filings, while ensuring compliance with Companies Act, 2013 and other applicable regulations.
                  </p>
                </div>

                <div className="bg-zinc-800/50 rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-semibold mb-4">Our Services Include</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-zinc-800/50 rounded-lg p-6">
                  <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                    <HelpCircle className="h-6 w-6 text-green-500" />
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
