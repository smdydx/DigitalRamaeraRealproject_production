
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Helmet } from "react-helmet";
import { Building2, Verified, PieChart, Briefcase, Scale, HelpCircle, FileText, Check, Clock, AlertTriangle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function MergersDemergers() {
  const processSteps = [
    {
      title: "Initial Consultation & Planning",
      points: [
        "Business objective analysis",
        "Structure determination",
        "Valuation methodologies",
        "Tax implications assessment",
        "Timeline planning"
      ]
    },
    {
      title: "Due Diligence",
      points: [
        "Financial review",
        "Legal compliance check",
        "Asset verification",
        "Liabilities assessment",
        "Regulatory requirements analysis"
      ]
    },
    {
      title: "Documentation & Filing",
      points: [
        "Scheme of arrangement drafting",
        "Board resolution preparation",
        "Shareholder approval documentation",
        "NCLT application preparation",
        "Regulatory filings compilation"
      ]
    },
    {
      title: "Implementation & Post-Merger Integration",
      points: [
        "Asset transfer execution",
        "Employee transition management",
        "Systems integration",
        "Compliance adherence",
        "Post-merger documentation"
      ]
    }
  ];

  const benefits = [
    {
      title: "Strategic Benefits",
      items: [
        "Market expansion opportunities",
        "Enhanced competitive position",
        "Diversification of product/service portfolio",
        "Access to new technologies",
        "Operational synergies"
      ]
    },
    {
      title: "Financial Benefits",
      items: [
        "Cost optimization",
        "Tax benefits under specific conditions",
        "Improved financial metrics",
        "Better capital allocation",
        "Enhanced shareholder value"
      ]
    }
  ];

  const keyConsiderations = [
    {
      title: "Legal & Regulatory",
      points: [
        "Companies Act compliance",
        "SEBI regulations (for listed companies)",
        "Competition Commission approvals",
        "Industry-specific regulations",
        "Cross-border transaction rules"
      ]
    },
    {
      title: "Financial Aspects",
      points: [
        "Valuation methods",
        "Share exchange ratio",
        "Tax implications",
        "Accounting treatment",
        "Financial reporting requirements"
      ]
    }
  ];

  const faqs = [
    {
      question: "What is the difference between merger and demerger?",
      answer: "A merger combines two or more companies into a single entity, while a demerger splits one company into two or more separate entities. Mergers aim to achieve synergies and growth, while demergers focus on unlocking value through business separation and focused operations."
    },
    {
      question: "What are the types of mergers available under Indian law?",
      answer: "Indian law recognizes several types of mergers: Fast Track Mergers (between small companies or holding-subsidiary), Regular Mergers (requiring NCLT approval), Cross-Border Mergers (involving foreign companies), and Reverse Mergers (smaller company acquires larger one)."
    },
    {
      question: "What is the typical timeline for completing a merger/demerger?",
      answer: "The timeline varies based on complexity and type. Fast-track mergers may take 3-4 months, while regular mergers typically take 6-12 months. Complex cross-border transactions or those requiring multiple regulatory approvals may take longer."
    },
    {
      question: "What happens to employees in a merger/demerger?",
      answer: "Employees typically transfer to the new entity with similar terms and conditions as protected under Section 25FF of the Industrial Disputes Act. Their service continuity, benefits, and existing rights are preserved unless specifically altered through proper communication and agreement."
    },
    {
      question: "What are the key regulatory approvals required?",
      answer: "Key approvals include NCLT approval, ROC filings, stock exchange approvals (for listed companies), Competition Commission clearance (if applicable), industry-specific regulatory approvals, and necessary tax authority notifications."
    },
    {
      question: "How are assets and liabilities transferred in a merger?",
      answer: "Assets and liabilities transfer through a court-approved scheme of arrangement. This includes physical assets, intellectual property, contracts, licenses, and all obligations. The transfer occurs on an 'as is' basis unless specifically excluded in the scheme."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Mergers & Demergers Services | Legal Services</title>
        <meta name="description" content="Comprehensive merger and demerger services including planning, documentation, regulatory compliance, and implementation support." />
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
                    Our comprehensive mergers and demergers services provide end-to-end support for corporate restructuring initiatives. We combine legal expertise with strategic insight to help businesses navigate complex regulatory requirements while achieving their organizational objectives through efficient execution of mergers and demergers.
                  </p>
                </div>

                <div className="bg-zinc-800/50 rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                    <Clock className="h-6 w-6 text-purple-500" />
                    Process Steps
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {processSteps.map((step, idx) => (
                      <div key={idx} className="bg-zinc-700/30 rounded-lg p-4">
                        <h3 className="text-lg font-semibold mb-3 text-purple-400">{step.title}</h3>
                        <ul className="space-y-2">
                          {step.points.map((point, pidx) => (
                            <li key={pidx} className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                              <span className="text-gray-300">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {benefits.map((section, idx) => (
                    <div key={idx} className="bg-zinc-800/50 rounded-lg p-6">
                      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                        <Verified className="h-5 w-5 text-purple-500" />
                        {section.title}
                      </h3>
                      <ul className="space-y-2">
                        {section.items.map((item, iidx) => (
                          <li key={iidx} className="flex items-start gap-2">
                            <Check className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="bg-zinc-800/50 rounded-lg p-6 mb-8">
                  <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                    <AlertTriangle className="h-6 w-6 text-purple-500" />
                    Key Considerations
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {keyConsiderations.map((section, idx) => (
                      <div key={idx} className="bg-zinc-700/30 rounded-lg p-4">
                        <h3 className="text-lg font-semibold mb-3 text-purple-400">{section.title}</h3>
                        <ul className="space-y-2">
                          {section.points.map((point, pidx) => (
                            <li key={pidx} className="flex items-start gap-2">
                              <Check className="h-5 w-5 text-purple-500 mt-1 flex-shrink-0" />
                              <span className="text-gray-300">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
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
