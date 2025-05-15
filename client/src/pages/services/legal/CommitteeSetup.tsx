
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Check, FileText, Users, ClipboardList, BookOpen, Calendar } from "lucide-react";

const features = [
  "Audit Committee",
  "Nomination and Remuneration Committee", 
  "Stakeholders Relationship Committee",
  "Corporate Social Responsibility (CSR) Committee",
  "Risk Management Committee"
];

const benefits = [
  {
    icon: <FileText className="w-8 h-8 text-green-400" />,
    title: "Expert Guidance",
    description: "Access to professionals familiar with corporate laws and best governance practices."
  },
  {
    icon: <Users className="w-8 h-8 text-green-400" />,
    title: "Customized Solutions",
    description: "Tailored committees based on your business and compliance needs."
  },
  {
    icon: <ClipboardList className="w-8 h-8 text-green-400" />,
    title: "Efficient Compliance",
    description: "Ensure you meet all regulatory requirements and avoid penalties."
  },
  {
    icon: <BookOpen className="w-8 h-8 text-green-400" />,
    title: "Enhanced Governance",
    description: "Build a strong management structure for sustainable growth."
  },
  {
    icon: <Calendar className="w-8 h-8 text-green-400" />,
    title: "Time & Cost Saving",
    description: "We handle all documentation and legal filings, saving your resources."
  }
];

const faqs = [
  {
    question: "What types of companies need to set up committees?",
    answer: "Private Limited Companies, Public Limited Companies, and certain LLPs often require committees like Audit or CSR committees depending on their size and legal obligations."
  },
  {
    question: "Are committees mandatory for all companies?",
    answer: "Not all companies are mandated to have committees. However, certain committees like Audit Committee are compulsory for listed companies and companies meeting specific criteria under Indian laws."
  },
  {
    question: "How long does it take to set up a committee?",
    answer: "Typically, committee setup including documentation and filing takes 7–15 working days, depending on company size and compliance requirements."
  },
  {
    question: "Can committee members be external professionals?",
    answer: "Yes, companies often appoint external experts or independent directors as committee members to bring specialized knowledge and impartiality."
  },
  {
    question: "What documents are needed to form a committee?",
    answer: "Documents typically include Board Resolutions, Committee Charter or Terms of Reference (TOR), member consent letters, and meeting minutes."
  }
];

export default function CommitteeSetup() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 to-black pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(74,222,128,0.1),_transparent_50%)]" />
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent mb-6"
            >
              Committee Setup Services
            </motion.h1>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              Streamline decision-making, improve transparency, and ensure specialized focus on critical areas of your organization with properly structured committees.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-zinc-900/30">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-3xl font-bold text-center mb-12"
            >
              Types of Committees We Help Setup
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeIn("up", "spring", idx * 0.1, 0.75)}
                  className="bg-zinc-800/50 p-6 rounded-lg border border-green-500/10 hover:border-green-500/30 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <Check className="h-6 w-6 text-green-400" />
                    <h3 className="text-xl font-semibold text-white">{feature}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-3xl font-bold text-center mb-12"
            >
              Our Committee Setup Process
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeIn("up", "spring", idx * 0.1, 0.75)}
                  className="bg-zinc-800/50 p-6 rounded-lg border border-green-500/10"
                >
                  <div className="mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-zinc-900/30">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-3xl font-bold text-center mb-12"
            >
              Frequently Asked Questions
            </motion.h2>
            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeIn("up", "spring", idx * 0.1, 0.75)}
                  className="bg-zinc-800/50 p-6 rounded-lg border border-green-500/10"
                >
                  <h3 className="text-xl font-semibold text-white mb-3">{faq.question}</h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
