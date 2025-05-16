
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { FileText, ShieldCheck, List, ArrowRight, Check } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Helmet } from "react-helmet";

export default function ShareAllotment() {
  const allotmentTypes = [
    {
      title: "Rights Issue",
      description: "Offering of shares to existing shareholders in proportion to their current shareholding",
      features: [
        "Pre-emptive rights protection",
        "Proportional offering",
        "Discounted pricing",
        "Transferable rights",
        "SEBI compliance for listed companies"
      ]
    },
    {
      title: "Private Placement",
      description: "Issue of shares to a select group of persons through a private offer",
      features: [
        "Limited number of investors",
        "Detailed placement memorandum",
        "Compliance with Section 42",
        "Valuation requirements",
        "Board and shareholder approvals"
      ]
    },
    {
      title: "Bonus Issue",
      description: "Issue of additional shares to existing shareholders without additional payment",
      features: [
        "Capitalization of reserves",
        "No cash outflow",
        "Improves stock liquidity",
        "Articles authorization",
        "Pro-rata distribution"
      ]
    }
  ];

  const documentation = [
    {
      title: "Required Documents",
      items: [
        "Board resolution for share allotment",
        "Shareholders' resolution (special resolution for private placement)",
        "Valuation report from registered valuer",
        "Private placement offer letter (Form PAS-4)",
        "Share application money receipts",
        "KYC documents of subscribers",
        "Due diligence certificates"
      ]
    },
    {
      title: "Compliance Requirements",
      items: [
        "Form PAS-3 (Return of Allotment) within 30 days",
        "Form MGT-14 for special resolution",
        "Form SH-7 for capital increase",
        "Statutory registers updating",
        "Share certificates issuance",
        "Stock exchange intimation (for listed companies)"
      ]
    }
  ];

  const faqs = [
    {
      question: "What is the timeline for completing share allotment?",
      answer: "The timeline varies based on the type of allotment. Rights issues typically take 30-45 days, private placements 15-30 days, and bonus issues 20-30 days from board approval to completion."
    },
    {
      question: "What are the pricing guidelines for share allotment?",
      answer: "For private placement, shares must be priced as per registered valuer's report. For rights issues, the price is typically at a discount to market price. Bonus shares are issued without any cost to shareholders."
    },
    {
      question: "Are there any restrictions on share allotment?",
      answer: "Yes, there are restrictions such as maximum number of investors in private placement (200 in a financial year), minimum subscription requirements, and compliance with foreign investment norms if applicable."
    },
    {
      question: "What happens if allotment procedures are not followed?",
      answer: "Non-compliance can result in penalties, invalidation of allotment, regulatory actions, and potential legal proceedings against the company and its officers."
    },
    {
      question: "Can shares be allotted at a discount?",
      answer: "Generally, shares cannot be issued at a discount except in specific cases under Section 53 of Companies Act, 2013. Rights issues can be priced at a discount to market price."
    },
    {
      question: "What are the tax implications of share allotment?",
      answer: "Tax implications vary based on type of allotment. Bonus issues are tax-neutral, while rights issues and private placements may have implications based on issue price and fair market value."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Share Allotment Services | Legal Services</title>
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
                Share Allotment Services
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
                    Our comprehensive share allotment services cover all aspects of equity issuance, from rights issues to bonus shares. We ensure full compliance with Companies Act, 2013, SEBI regulations, and other applicable laws while helping companies optimize their capital structure.
                  </p>
                </div>

                {allotmentTypes.map((type, idx) => (
                  <div key={idx} className="bg-zinc-800/50 rounded-lg p-6 mb-8">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <ShieldCheck className="h-5 w-5 text-green-500" />
                      {type.title}
                    </h3>
                    <p className="text-gray-300 mb-4">{type.description}</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {type.features.map((feature, fidx) => (
                        <li key={fidx} className="flex items-start gap-2">
                          <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                {documentation.map((doc, idx) => (
                  <div key={idx} className="bg-zinc-800/50 rounded-lg p-6 mb-8">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <List className="h-5 w-5 text-green-500" />
                      {doc.title}
                    </h3>
                    <ul className="space-y-2">
                      {doc.items.map((item, iidx) => (
                        <li key={iidx} className="flex items-start gap-2">
                          <ArrowRight className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

                <div className="bg-zinc-800/50 rounded-lg p-6">
                  <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
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
