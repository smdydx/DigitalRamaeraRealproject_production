
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Users, FileText, ClipboardCheck, BookOpen } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function BoardGeneralMeetings() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black pt-24">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              variants={fadeIn("up", "tween", 0.1, 1)}
              className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600 mb-6"
            >
              Board & General Meetings
            </motion.h1>
            <motion.p
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-gray-400 text-lg mb-8"
            >
              Professional assistance in conducting and managing your company's statutory meetings
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            <motion.div variants={fadeIn("right", "tween", 0.2, 1)} className="space-y-6">
              <h2 className="text-3xl font-bold text-green-400">Annual General Meeting (AGM)</h2>
              <p className="text-gray-300">
                AGM is a formal event where company's shareholders and board of directors come together to discuss strategies, seek approvals through voting, and disclose financial performance. It's a cornerstone of corporate governance and transparency.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-zinc-800/30 rounded-lg border border-green-500/10">
                  <Calendar className="h-6 w-6 text-green-400 mb-2" />
                  <h3 className="font-semibold text-white">Timing</h3>
                  <p className="text-sm text-gray-400">First AGM within 9 months of FY end</p>
                </div>
                <div className="p-4 bg-zinc-800/30 rounded-lg border border-green-500/10">
                  <Users className="h-6 w-6 text-green-400 mb-2" />
                  <h3 className="font-semibold text-white">Participants</h3>
                  <p className="text-sm text-gray-400">Directors & Shareholders</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeIn("left", "tween", 0.3, 1)} className="space-y-6">
              <h2 className="text-3xl font-bold text-green-400">Key Components</h2>
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <FileText className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Annual report and audited financial statements presentation</span>
                </li>
                <li className="flex gap-3 items-start">
                  <ClipboardCheck className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Voting on board appointments and dividend decisions</span>
                </li>
                <li className="flex gap-3 items-start">
                  <BookOpen className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">Review of company performance and future strategies</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* FAQ Section */}
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
                  question: "What is the full form of AGM?",
                  answer: "AGM stands for Annual General Meeting. It is a mandatory yearly gathering of a company's shareholders and board of directors to discuss company performance, financial statements, and make important decisions."
                },
                {
                  question: "Who has to hold an AGM?",
                  answer: "All companies, except One Person Companies (OPC), are required to hold an AGM annually. Public companies need to comply with stricter regulations compared to private limited companies."
                },
                {
                  question: "What will happen if the AGM is not held?",
                  answer: "Failing to hold an AGM can result in monetary penalties up to INR 10 lakh, possible disqualification of directors, and additional fines of Rs. 5,000 per day for continuing default."
                },
                {
                  question: "What are the constituents of AGM?",
                  answer: "Key components include presentation of annual reports and financial statements, voting on board appointments and dividends, review of company performance, and discussion of future strategies."
                },
                {
                  question: "Can AGM be held virtually?",
                  answer: "Yes, AGMs can be held virtually through video conferencing or other audio-visual means, allowing members to participate regardless of their location. Proper notice must be given to ensure all members can participate effectively."
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
        <div className="container mx-auto px-4 text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <motion.h2
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-3xl font-bold text-white mb-6"
            >
              Need Assistance with Your Company Meetings?
            </motion.h2>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-gray-400 mb-8"
            >
              Our experts will help you conduct compliant and effective board & general meetings
            </motion.p>
            <motion.div variants={fadeIn("up", "tween", 0.4, 1)}>
              <Button size="lg" className="bg-green-500 hover:bg-green-600">
                Schedule a Consultation <ArrowRight className="ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
