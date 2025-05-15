
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Users, FileText, ClipboardCheck, BookOpen, Phone, MessageSquare, AlertCircle, Clock } from "lucide-react";
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
            
            {/* Contact Buttons */}
            <motion.div 
              variants={fadeIn("up", "tween", 0.3, 1)}
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

      {/* Overview Section */}
      <section className="py-12 bg-zinc-900/30">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          >
            <motion.div variants={fadeIn("right", "tween", 0.2, 1)} className="space-y-6">
              <h2 className="text-3xl font-bold text-green-400">Overview</h2>
              <div className="space-y-4 text-gray-300">
                <p>Board and General Meetings are essential governance mechanisms for companies. They include:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Annual General Meetings (AGM)</li>
                  <li>Extraordinary General Meetings (EGM)</li>
                  <li>Board Meetings</li>
                  <li>Committee Meetings</li>
                </ul>
              </div>
            </motion.div>

            <motion.div variants={fadeIn("left", "tween", 0.3, 1)} className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-zinc-800/30 rounded-lg border border-green-500/10">
                <Calendar className="h-8 w-8 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Timing</h3>
                <p className="text-gray-400">First AGM within 9 months of incorporation</p>
              </div>
              <div className="p-6 bg-zinc-800/30 rounded-lg border border-green-500/10">
                <Clock className="h-8 w-8 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Duration</h3>
                <p className="text-gray-400">2-3 hours per meeting</p>
              </div>
              <div className="p-6 bg-zinc-800/30 rounded-lg border border-green-500/10">
                <Users className="h-8 w-8 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Participants</h3>
                <p className="text-gray-400">Directors & Shareholders</p>
              </div>
              <div className="p-6 bg-zinc-800/30 rounded-lg border border-green-500/10">
                <AlertCircle className="h-8 w-8 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Compliance</h3>
                <p className="text-gray-400">Mandatory under Companies Act</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-3xl font-bold text-white mb-12 text-center"
            >
              Meeting Process
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Pre-Meeting",
                  icon: FileText,
                  items: [
                    "Notice preparation",
                    "Agenda setting",
                    "Document compilation",
                    "Member notifications"
                  ]
                },
                {
                  title: "During Meeting",
                  icon: Users,
                  items: [
                    "Attendance recording",
                    "Minutes taking",
                    "Resolution passing",
                    "Voting management"
                  ]
                },
                {
                  title: "Post-Meeting",
                  icon: ClipboardCheck,
                  items: [
                    "Minutes finalization",
                    "Resolution filing",
                    "Compliance updates",
                    "Record maintenance"
                  ]
                }
              ].map((phase, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn("up", "tween", 0.2 * index, 1)}
                  className="p-6 bg-zinc-800/30 rounded-lg border border-green-500/10"
                >
                  <phase.icon className="h-10 w-10 text-green-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-4">{phase.title}</h3>
                  <ul className="space-y-3">
                    {phase.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-300">
                        <ArrowRight className="h-4 w-4 text-green-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-zinc-900/30">
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
                  question: "How many board meetings should be held in a year?",
                  answer: "A company must conduct a minimum of 4 board meetings in a year, with a maximum gap of 120 days between two consecutive meetings."
                },
                {
                  question: "What is the quorum requirement for meetings?",
                  answer: "For board meetings, the quorum is one-third of the total strength or two directors, whichever is higher. For general meetings, it's typically five members personally present for private companies."
                },
                {
                  question: "Can board meetings be held virtually?",
                  answer: "Yes, board meetings can be conducted through video conferencing or other audio-visual means, provided proper recording and documentation is maintained."
                },
                {
                  question: "What happens if AGM is not conducted?",
                  answer: "Failure to conduct AGM can result in penalties up to ₹1 lakh for the company and ₹5,000 per day for continuing default for every director."
                },
                {
                  question: "What is the notice period for meetings?",
                  answer: "Board meetings require 7 days' notice, while AGM requires 21 days' clear notice. Shorter notice is possible with proper consent from members."
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
      <section className="py-20">
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
