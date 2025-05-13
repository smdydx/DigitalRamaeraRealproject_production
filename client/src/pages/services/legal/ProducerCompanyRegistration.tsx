
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
  "Bank Account Opening",
  "100% Online Process"
];

const requirements = [
  {
    icon: <Users className="w-8 h-8 text-green-400" />,
    title: "Minimum Members",
    description: "At least 10 producer individuals or 2 producer institutions as members are required for registration."
  },
  {
    icon: <Building className="w-8 h-8 text-green-400" />,
    title: "Directors Requirement",
    description: "A minimum of 5 directors is mandatory for Producer Company registration."
  },
  {
    icon: <Shield className="w-8 h-8 text-green-400" />,
    title: "Minimum Capital",
    description: "A minimum capital of Rs. 5 Lakhs is required to start a Producer Company."
  },
  {
    icon: <FileText className="w-8 h-8 text-green-400" />,
    title: "Required Documents",
    description: "Documents including PAN, address proof, photos of members, and registered office proof are needed."
  }
];

const benefits = [
  {
    icon: <Shield className="w-12 h-12 text-green-400" />,
    title: "Limited Liability",
    description: "Members' liability limited to their share capital"
  },
  {
    icon: <Building className="w-12 h-12 text-green-400" />,
    title: "Better Market Access",
    description: "Collective bargaining power for members"
  },
  {
    icon: <Users className="w-12 h-12 text-green-400" />,
    title: "Professional Management",
    description: "Expert guidance and management"
  },
  {
    icon: <FileText className="w-12 h-12 text-green-400" />,
    title: "Government Support",
    description: "Access to schemes and benefits"
  }
];

const timeline = [
  {
    title: "Documentation Collection",
    duration: "2-3 Days",
    description: "Gathering required documents from members including identity proof, address proof, and photos."
  },
  {
    title: "Name Approval",
    duration: "2-3 Days",
    description: "Getting unique name approval ending with 'Producer Company Limited'."
  },
  {
    title: "Filing Registration",
    duration: "3-4 Days",
    description: "Submitting incorporation documents to ROC through SPICe+ form."
  },
  {
    title: "Certificate Issuance",
    duration: "4-5 Days",
    description: "Receiving Certificate of Incorporation and starting operations."
  }
];

export default function ProducerCompanyRegistration() {
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
              Empowering Agricultural Communities
            </motion.span>
            <motion.h1
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent mb-6"
            >
              Producer Company Registration
            </motion.h1>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              Register your Producer Company with our comprehensive registration services. Get expert guidance for promoting collective farming and agricultural interests.
            </motion.p>
            <motion.div
              variants={fadeIn("up", "tween", 0.4, 1)}
              className="flex gap-4 justify-center"
            >
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-lg px-8"
              >
                Start at ₹5,499* <ArrowRight className="ml-2" />
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

      {/* Benefits Section */}
      <section className="py-20 bg-zinc-900/30">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-4xl font-bold text-white mb-4"
            >
              Benefits of Producer Company
            </motion.h2>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-gray-400 max-w-2xl mx-auto"
            >
              Discover the advantages of registering your agricultural business as a Producer Company
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", "spring", index * 0.1, 0.75)}
                className="bg-zinc-800/30 backdrop-blur-sm rounded-xl border border-green-500/10 p-8 text-center hover:border-green-500/30 transition-all duration-300"
              >
                <div className="flex justify-center mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-green-400 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
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
                <span className="text-4xl font-bold text-white">₹5,499</span>
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

            <motion.div
              variants={fadeIn("up", "tween", 0.4, 1)}
              className="text-center"
            >
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-lg px-12"
              >
                Start Registration Process
              </Button>
            </motion.div>
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
                question: "What are the types of Producer Companies in India?",
                answer: "Producer Companies can be classified based on their activities such as farming, agriculture, handloom, handicraft, artisans, and other primary production activities."
              },
              {
                question: "What are the eligible activities that Producer Companies can carry out?",
                answer: "Producer Companies can engage in production, harvesting, procurement, grading, pooling, marketing, selling, and export of primary produce of their members."
              },
              {
                question: "What is the time taken to register a Producer Company?",
                answer: "The complete registration process typically takes 10-15 days, including documentation, name approval, and incorporation certificate issuance."
              },
              {
                question: "What are the tax benefits for a Producer Company?",
                answer: "Producer Companies enjoy various tax benefits including deductions under specific sections of the Income Tax Act and exemptions on certain agricultural income."
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
