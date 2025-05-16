
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Helmet } from "react-helmet";
import { FileText, Check, HelpCircle, Briefcase, Shield } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function ShareBuyback() {
  const features = [
    "Complete share buyback compliance management",
    "Board resolution and shareholder approval preparation",
    "Buy-back offer document drafting",
    "SEBI compliance advisory",
    "Statutory filing assistance",
    "Post-buyback compliance support",
    "Tax implications guidance"
  ];

  const faqs = [
    {
      question: "What is a share buyback?",
      answer: "A share buyback is when a company purchases its own outstanding shares to reduce the number of shares available in the open market. This is often done to increase shareholder value, optimize capital structure, or utilize excess cash."
    },
    {
      question: "What are the legal requirements for a share buyback?",
      answer: "Key requirements include board resolution, shareholder approval, debt-equity ratio compliance, maintaining prescribed solvency margins, and SEBI compliance for listed companies."
    },
    {
      question: "What is the maximum limit for share buyback?",
      answer: "A company can buy back maximum 25% of its total paid-up equity capital in a financial year through board approval route and maximum of 10% through board resolution without shareholder approval."
    },
    {
      question: "What are the tax implications of a buyback?",
      answer: "Companies are required to pay buyback tax at applicable rates. For shareholders, the gains from buyback are generally tax-exempt under current regulations."
    },
    {
      question: "How long does the buyback process take?",
      answer: "The timeline varies based on whether it's a listed or unlisted company. Generally, it takes 3-6 months including preparation, approvals, and completion of the buyback process."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Share Buyback Services | Legal Services</title>
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
                Share Buyback Services
              </motion.h1>

              <motion.div
                variants={fadeIn("up", "tween", 0.3, 1)}
                className="prose prose-invert max-w-none mb-12"
              >
                <div className="bg-zinc-800/50 rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                    <Briefcase className="h-6 w-6 text-green-500" />
                    Overview
                  </h2>
                  <p className="text-gray-300">
                    Our comprehensive share buyback services ensure smooth execution of buyback programs while maintaining full compliance with Companies Act, SEBI regulations, and other applicable laws. We guide companies through the entire process, from initial planning to final execution.
                  </p>
                </div>

                <div className="bg-zinc-800/50 rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                    <Shield className="h-6 w-6 text-green-500" />
                    Our Services
                  </h2>
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
