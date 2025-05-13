
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { ArrowRight, Check, Phone, Building, Shield, FileText, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Director DIN",
  "Digital Signature",
  "Name Reservation",
  "Company PAN & TAN",
  "Certificate of Incorporation",
  "Statutory Documents",
  "Nidhi Company License",
  "100% Online Process"
];

const requirements = [
  {
    icon: <Users className="w-8 h-8 text-green-400" />,
    title: "Minimum Members",
    description: "At least 7 shareholders and 3 directors are required for Nidhi Company registration."
  },
  {
    icon: <Building className="w-8 h-8 text-green-400" />,
    title: "Capital Requirement",
    description: "Minimum paid-up equity share capital of Rs. 5 lakhs is mandatory."
  },
  {
    icon: <Shield className="w-8 h-8 text-green-400" />,
    title: "Name Requirements",
    description: "Company name must end with 'Nidhi Limited' and be unique."
  },
  {
    icon: <FileText className="w-8 h-8 text-green-400" />,
    title: "Documentation",
    description: "Required documents include PAN, address proof, photos of members, and office proof."
  }
];

const timeline = [
  {
    title: "Documentation Collection",
    duration: "2-3 Days",
    description: "Gathering required documents from members and directors."
  },
  {
    title: "Name Approval",
    duration: "2-3 Days",
    description: "Getting unique name approval with 'Nidhi Limited' suffix."
  },
  {
    title: "Company Incorporation",
    duration: "3-4 Days",
    description: "Filing SPICe+ form and obtaining Certificate of Incorporation."
  },
  {
    title: "Nidhi License",
    duration: "4-5 Days",
    description: "Filing NDH-4 form for Nidhi Company license after meeting requirements."
  }
];

export default function NidhiCompanyRegistration() {
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
              Start Your Financial Institution
            </motion.span>
            <motion.h1
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent mb-6"
            >
              Nidhi Company Registration
            </motion.h1>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              Register your Nidhi Company with our comprehensive registration services. We guide you through the entire process from incorporation to obtaining the Nidhi license.
            </motion.p>
            <motion.div
              variants={fadeIn("up", "tween", 0.4, 1)}
              className="flex gap-4 justify-center"
            >
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-lg px-8"
              >
                Start at ₹5,999* <ArrowRight className="ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-500 text-green-500 hover:bg-green-500/10 text-lg px-8"
              >
                Schedule Consultation <Phone className="ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 backdrop-blur-sm rounded-2xl border border-green-500/10 p-12"
          >
            <motion.div
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-green-400 mb-4">
                Registration Package
              </h2>
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl font-bold text-white">₹5,999</span>
                <span className="text-gray-400">starting price*</span>
              </div>
              <p className="text-sm text-gray-400">
                *Government fees & taxes additional
              </p>
            </motion.div>

            <motion.div
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Check className="h-4 w-4 text-green-500" />
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </motion.div>
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
            className="text-4xl font-bold text-center text-white mb-12"
          >
            Essential Requirements
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
                className="bg-zinc-800/30 backdrop-blur-sm rounded-xl border border-green-500/10 p-8 hover:border-green-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  {req.icon}
                  <h3 className="text-xl font-semibold text-green-400">
                    {req.title}
                  </h3>
                </div>
                <p className="text-gray-300">{req.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeIn("up", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl font-bold text-center text-white mb-16"
          >
            Registration Process Timeline
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            {timeline.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", "tween", index * 0.1, 0.75)}
                className="flex items-start gap-6 mb-12"
              >
                <div className="flex-shrink-0 w-32 text-right">
                  <span className="text-green-400 font-bold text-lg">
                    {step.duration}
                  </span>
                </div>
                <div className="flex-grow pl-8 border-l-2 border-green-500/30">
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-zinc-900/30">
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
                question: "What is a Nidhi Company?",
                answer: "A Nidhi Company is a non-banking financial company that accepts deposits from and lends to its members. It operates under the Companies Act, 2013 and is regulated by the Ministry of Corporate Affairs."
              },
              {
                question: "What are the minimum requirements for Nidhi Company?",
                answer: "Minimum requirements include 7 shareholders, 3 directors, paid-up capital of Rs. 5 lakhs, and a unique name ending with 'Nidhi Limited'."
              },
              {
                question: "How long does it take to get Nidhi Company registration?",
                answer: "The complete registration process typically takes 15-20 days, including documentation, name approval, incorporation, and Nidhi license application."
              },
              {
                question: "What activities can a Nidhi Company perform?",
                answer: "Nidhi Companies can accept deposits from members and lend money to members against securities like gold, property mortgage, etc. They cannot engage in other financial activities."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", "tween", index * 0.1, 0.75)}
                className="bg-zinc-800/30 backdrop-blur-sm rounded-xl border border-green-500/10 p-8 hover:border-green-500/30 transition-all duration-300"
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
