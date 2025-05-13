
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { ArrowRight, Check, Building, Globe, Users, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Digital Signature Certificate",
  "Documentation Support",
  "Name Approval",
  "Incorporation Certificate",
  "PAN & TAN",
  "Bank Account Opening",
  "FEMA Compliance",
  "Post Registration Support"
];

const benefits = [
  {
    icon: <Globe className="w-8 h-8 text-green-400" />,
    title: "Open Economy",
    description: "100% foreign equity allowed in most sectors except strategic ones."
  },
  {
    icon: <Building className="w-8 h-8 text-green-400" />,
    title: "Lower Corporate Tax",
    description: "15% for manufacturing, 22% for other sectors."
  },
  {
    icon: <Users className="w-8 h-8 text-green-400" />,
    title: "Young Talent Pool",
    description: "Over 65% population under 35 years with skilled workforce."
  },
  {
    icon: <FileText className="w-8 h-8 text-green-400" />,
    title: "Big Native Market",
    description: "1.4 billion population with $6 trillion estimated expenditure by 2030."
  }
];

const requirements = [
  {
    title: "2-200 Shareholders",
    description: "Minimum two shareholders required, can be foreigners."
  },
  {
    title: "2-15 Directors",
    description: "Directors responsible for operations and compliance."
  },
  {
    title: "Resident Director",
    description: "One director must reside in India for 120+ days."
  },
  {
    title: "Capital Structure",
    description: "No minimum capital requirement prescribed."
  }
];

export default function ForeignCompanySetup() {
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
            <motion.span
              variants={fadeIn("up", "tween", 0.1, 1)}
              className="inline-block text-green-400 font-semibold mb-4"
            >
              Expand Your Business to India
            </motion.span>
            <motion.h1
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent mb-6"
            >
              Foreign Company Setup in India
            </motion.h1>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              Start your business journey in India with our comprehensive company registration services. Expert guidance through the entire process of foreign company incorporation.
            </motion.p>
            <motion.div
              variants={fadeIn("up", "tween", 0.4, 1)}
              className="flex gap-4 justify-center"
            >
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-lg px-8"
              >
                Get Started <ArrowRight className="ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-500 text-green-500 hover:bg-green-500/10 text-lg px-8"
              >
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeIn("up", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-white mb-16"
          >
            Why Choose India?
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", "tween", index * 0.1, 0.75)}
                className="bg-zinc-800/30 backdrop-blur-sm rounded-xl border border-green-500/10 p-8 hover:border-green-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  {benefit.icon}
                  <h3 className="text-xl font-semibold text-green-400">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-zinc-900/30">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeIn("up", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-white mb-16"
          >
            Key Requirements
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {requirements.map((req, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", "tween", index * 0.1, 0.75)}
                className="bg-zinc-800/30 backdrop-blur-sm rounded-xl border border-green-500/10 p-8"
              >
                <h3 className="text-xl font-semibold text-green-400 mb-4">
                  {req.title}
                </h3>
                <p className="text-gray-300">{req.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeIn("up", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-white mb-12"
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              {
                question: "Can foreigners hold 100% shareholding?",
                answer: "Yes, 100% foreign equity is allowed in most sectors except for strategic sectors. FDI policies govern the ownership structure."
              },
              {
                question: "Is visiting India mandatory for company registration?",
                answer: "No, the entire process can be completed online. However, you'll need a resident director who stays in India for at least 120 days."
              },
              {
                question: "What are the tax benefits for foreign companies?",
                answer: "Manufacturing companies enjoy a 15% corporate tax rate, while other sectors have a 22% rate, making it an attractive investment destination."
              },
              {
                question: "What is the timeline for company registration?",
                answer: "The process typically takes 2-3 weeks after documentation. This includes DSC obtaining, name approval, and incorporation certificate."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", "tween", index * 0.1, 0.75)}
                className="bg-zinc-800/30 backdrop-blur-sm rounded-xl border border-green-500/10 p-8"
              >
                <h3 className="text-xl font-semibold text-green-400 mb-4">
                  {faq.question}
                </h3>
                <p className="text-gray-300">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
