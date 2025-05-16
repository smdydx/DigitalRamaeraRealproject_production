
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Helmet } from "react-helmet";
import { FileText, Check, HelpCircle, Book, Shield, AlertCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function ShareTransfer() {
  const services = [
    {
      title: "Documentation Assistance",
      items: [
        "Share transfer deed (Form SH-4) preparation",
        "Legal documentation review and verification",
        "Stamp duty calculation and compliance",
        "Board resolution drafting for approval",
        "Share certificate preparation"
      ]
    },
    {
      title: "Regulatory Compliance",
      items: [
        "ROC form filing assistance",
        "Statutory register updates",
        "Compliance with Companies Act provisions",
        "Tax implications guidance",
        "FEMA compliance for NRI transfers"
      ]
    },
    {
      title: "Due Diligence Support",
      items: [
        "Title verification of shares",
        "Encumbrance verification",
        "Share valuation guidance",
        "Legal documentation review",
        "Transfer restrictions check"
      ]
    }
  ];

  const faqs = [
    {
      question: "What is the process of share transfer in a private limited company?",
      answer: "The share transfer process involves: 1) Execution of share transfer deed (Form SH-4), 2) Payment of stamp duty, 3) Board approval through resolution, 4) Updating statutory registers, 5) Issuing new share certificates, and 6) Filing necessary forms with ROC within prescribed timelines."
    },
    {
      question: "What documents are required for share transfer?",
      answer: "Required documents include: Share Transfer Deed (Form SH-4), Original Share Certificates, Board Resolution approving transfer, PAN cards of transferor and transferee, Address proof, Payment proof, and Stamp duty payment proof."
    },
    {
      question: "What are the restrictions on share transfer in a private company?",
      answer: "Private companies typically have restrictions on share transfers as per their Articles of Association (AOA). Common restrictions include Right of First Refusal (ROFR), board approval requirement, and restrictions on transfer to non-members."
    },
    {
      question: "How is share valuation done for transfer purposes?",
      answer: "Share valuation can be done through various methods including Net Asset Value (NAV), Discounted Cash Flow (DCF), or fair market value as per Rule 11UA of Income Tax Rules. For unlisted companies, valuation by a registered valuer may be required."
    },
    {
      question: "What are the tax implications of share transfer?",
      answer: "Share transfers may attract Capital Gains Tax for the transferor. The tax rate depends on the holding period (short-term or long-term). Additionally, if shares are transferred at less than fair market value, provisions of Section 56(2)(x) may apply for the transferee."
    },
    {
      question: "Is stamp duty applicable on share transfer?",
      answer: "Yes, stamp duty is applicable on share transfers. The rate varies by state and is typically calculated as a percentage of the consideration amount or market value of shares, whichever is higher."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Share Transfer Services | Legal Services</title>
        <meta name="description" content="Comprehensive share transfer services including documentation, compliance, and advisory support for smooth transfer of shares" />
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
                    <Book className="h-6 w-6 text-green-500" />
                    Overview
                  </h2>
                  <p className="text-gray-300">
                    Our comprehensive share transfer services ensure smooth and legally compliant transfer of shares between parties. We handle all aspects of the process, from documentation preparation to regulatory filings, while ensuring full compliance with the Companies Act, 2013 and other applicable regulations.
                  </p>
                </div>

                {services.map((service, idx) => (
                  <div key={idx} className="bg-zinc-800/50 rounded-lg p-6 mb-8">
                    <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                      <Shield className="h-6 w-6 text-green-500" />
                      {service.title}
                    </h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                <div className="bg-zinc-800/50 rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                    <AlertCircle className="h-6 w-6 text-green-500" />
                    Important Considerations
                  </h2>
                  <ul className="space-y-3 text-gray-300">
                    <li>• Ensure compliance with Articles of Association before initiating transfer</li>
                    <li>• Verify share transfer restrictions and obtain necessary approvals</li>
                    <li>• Complete all documentation and statutory filings within prescribed timelines</li>
                    <li>• Consider tax implications and valuation requirements</li>
                    <li>• Maintain proper records and update statutory registers</li>
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
