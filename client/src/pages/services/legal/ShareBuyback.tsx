
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Helmet } from "react-helmet";
import { FileText, Check, HelpCircle, Briefcase, Shield, AlertCircle, Clock, FileCheck } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function ShareBuyback() {
  const benefits = [
    "Increase in Earnings Per Share (EPS)",
    "Enhanced return on equity and assets",
    "Optimal utilization of surplus cash",
    "Improved market capitalization",
    "Tax-efficient distribution of wealth to shareholders",
    "Better control over share price volatility"
  ];

  const process = [
    {
      title: "Initial Assessment",
      details: "Evaluation of company's financial position, compliance requirements, and buyback objectives"
    },
    {
      title: "Board Approval",
      details: "Preparation and passing of board resolution authorizing the buyback"
    },
    {
      title: "Shareholders' Approval",
      details: "Special resolution through postal ballot/general meeting if buyback exceeds 10% of paid-up capital"
    },
    {
      title: "Public Announcement",
      details: "Publication of public announcement in specified newspapers"
    },
    {
      title: "SEBI Filing",
      details: "Filing draft letter of offer with SEBI and addressing their observations"
    },
    {
      title: "Execution",
      details: "Implementation of buyback through tender offer or open market purchases"
    }
  ];

  const services = [
    {
      title: "Compliance Management",
      items: [
        "Companies Act compliance",
        "SEBI regulations adherence",
        "Tax compliance advisory",
        "Record keeping and documentation",
        "Regulatory reporting assistance"
      ]
    },
    {
      title: "Documentation Support",
      items: [
        "Board resolution drafting",
        "Shareholder notice preparation",
        "Public announcement drafting",
        "Letter of offer preparation",
        "Post-buyback compliance reports"
      ]
    },
    {
      title: "Advisory Services",
      items: [
        "Buyback structure optimization",
        "Tax implications analysis",
        "Risk assessment and mitigation",
        "Stakeholder communication strategy",
        "Timeline and process management"
      ]
    }
  ];

  const faqs = [
    {
      question: "What are the eligibility criteria for share buyback?",
      answer: "Companies must meet several criteria including: having sufficient free reserves, maintaining prescribed debt-equity ratio, completing one year since last buyback, and ensuring buyback amount doesn't exceed 25% of paid-up capital and free reserves."
    },
    {
      question: "What are the modes of share buyback?",
      answer: "Share buyback can be conducted through two methods: 1) Tender Offer - where companies buy back shares directly from shareholders in proportion to their holding, and 2) Open Market Purchase - where shares are bought from the secondary market through stock exchanges."
    },
    {
      question: "What is the timeline for completing a buyback?",
      answer: "The buyback process must be completed within 12 months from the date of passing the board/shareholder resolution. For tender offer, the process typically takes 3-4 months, while open market purchases can extend up to 6-12 months."
    },
    {
      question: "What are the tax implications of share buyback?",
      answer: "For listed companies, shareholders are not taxed on gains from buyback. The company pays buyback tax at 20% plus surcharge and cess. For unlisted companies, similar tax treatment applies under Section 115QA of Income Tax Act."
    },
    {
      question: "What are the post-buyback compliance requirements?",
      answer: "Companies must maintain various records, file returns with ROC/SEBI, extinguish bought back shares, make necessary statutory filings, and ensure compliance with post-buyback restrictions like no further issue of shares for specified period."
    },
    {
      question: "Can debt be used to finance share buyback?",
      answer: "No, companies cannot use borrowed funds for share buyback. The buyback must be financed through free reserves, securities premium account, or proceeds of fresh issue of shares."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Share Buyback Services | Legal Services</title>
        <meta name="description" content="Comprehensive share buyback services including compliance management, documentation support, and advisory services" />
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
                    Share buyback is a strategic corporate action where a company repurchases its own outstanding shares from the open market or shareholders. Our comprehensive share buyback services ensure smooth execution of buyback programs while maintaining full compliance with Companies Act, SEBI regulations, and other applicable laws. We guide companies through the entire process, from initial planning to final execution.
                  </p>
                </div>

                <div className="bg-zinc-800/50 rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                    <Check className="h-6 w-6 text-green-500" />
                    Key Benefits
                  </h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                        <span className="text-gray-300">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-zinc-800/50 rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                    <Clock className="h-6 w-6 text-green-500" />
                    Process Flow
                  </h2>
                  <div className="space-y-4">
                    {process.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-4 p-4 bg-zinc-700/30 rounded-lg">
                        <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-green-500 font-semibold">{idx + 1}</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-green-400">{step.title}</h3>
                          <p className="text-gray-300 text-sm">{step.details}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-zinc-800/50 rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                    <Shield className="h-6 w-6 text-green-500" />
                    Our Services
                  </h2>
                  {services.map((service, idx) => (
                    <div key={idx} className="mb-6 last:mb-0">
                      <h3 className="text-xl font-semibold text-green-400 mb-3">{service.title}</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {service.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2">
                            <FileCheck className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
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
