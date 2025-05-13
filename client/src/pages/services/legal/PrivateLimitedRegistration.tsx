import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import {
  ArrowRight,
  Check,
  Phone,
  Mail,
  Download,
  Shield,
  Clock,
  Users,
  Building,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Director DIN",
  "Digital Signature",
  "Company Name Approval",
  "Drafting MoA & AoA",
  "Filing Incorporation Forms",
  "Certificate of Incorporation",
  "Company PAN & TAN",
  "100% Online Process",
  "Payroll Software (1 Year)",
  "Billing Software (1 Year)",
];

const requirements = [
  {
    icon: <Users className="w-8 h-8 text-green-400" />,
    title: "Minimum Two Shareholder",
    description:
      "For Company Registration in India, a minimum of two shareholders is mandatory. These shareholders must sign the MOA as subscribers and contribute the initial capital.",
  },
  {
    icon: <Building className="w-8 h-8 text-green-400" />,
    title: "Minimum Two Directors",
    description:
      "The company directors are responsible for day-to-day management and compliance. A minimum of two individual directors is mandatory.",
  },
  {
    icon: <FileText className="w-8 h-8 text-green-400" />,
    title: "At Least One Resident Indian Director",
    description:
      "One director must have resided in India for at least 120 days during previous financial years.",
  },
  {
    icon: <Shield className="w-8 h-8 text-green-400" />,
    title: "Unique Name of Company",
    description:
      "The proposed name must be unique and distinct from other registered companies, LLPs or trademarks.",
  },
];

const timeline = [
  {
    title: "Documentation & Digital Signatures",
    duration: "1-2 Days",
    description:
      "Complete all necessary incorporation documents and obtain digital signatures for shareholders and directors.",
  },
  {
    title: "Name Search & MOA Drafting",
    duration: "1-3 Days",
    description:
      "Comprehensive name availability search and drafting of MOA, AOA and related documents.",
  },
  {
    title: "Filing for Company Incorporation",
    duration: "3-4 Days",
    description:
      "File application using Spice Plus form with MOA, AOA, and required documents.",
  },
  {
    title: "Issuance of Incorporation Certificate",
    duration: "4-7 Days",
    description:
      "ROC reviews application and issues Incorporation Certificate upon approval.",
  },
];

const benefits = [
  {
    icon: <Shield className="w-12 h-12 text-green-400" />,
    title: "Limited Liability Protection",
    description:
      "Shareholders' liability is limited to their investment amount",
  },
  {
    icon: <Building className="w-12 h-12 text-green-400" />,
    title: "Professional Image",
    description: "Enhanced credibility with customers and investors",
  },
  {
    icon: <Download className="w-12 h-12 text-green-400" />,
    title: "Easy Fund Raising",
    description: "Simplified process for attracting investments",
  },
  {
    icon: <Clock className="w-12 h-12 text-green-400" />,
    title: "Perpetual Existence",
    description: "Company continues regardless of ownership changes",
  },
];

export default function PrivateLimitedRegistration() {
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
              Transform Your Business Vision into Reality
            </motion.span>
            <motion.h1
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent mb-6"
            >
              Private Limited Company Registration
            </motion.h1>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              Start your business journey with our comprehensive company
              registration services. Get your company registered within 7 days
              with end-to-end support and expert guidance.
            </motion.p>
            <motion.div
              variants={fadeIn("up", "tween", 0.4, 1)}
              className="flex gap-4 justify-center"
            >
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-lg px-8"
              >
                Get Started Now <ArrowRight className="ml-2" />
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
              Why Choose Private Limited Company?
            </motion.h2>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-gray-400 max-w-2xl mx-auto"
            >
              Discover the advantages that make private limited companies the
              preferred choice for businesses in India
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
                Premium Registration Package
              </h2>
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl font-bold text-white">₹4,999</span>
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
            className="max-w-4xl mx-auto space-y-6"
          >
            {[
              {
                question: "What is company registration in India?",
                answer:
                  "Company registration is the legal process of incorporating a business entity under the Companies Act 2013. It involves obtaining necessary approvals, documents like DSC and DIN, and filing incorporation forms with the Registrar of Companies (ROC).",
              },
              {
                question:
                  "What is the minimum capital required for company registration?",
                answer:
                  "There is no prescribed minimum capital requirement for company registration in India. However, promoters should plan their capital based on business needs and growth plans. Government fees and stamp duty vary based on capital and state.",
              },
              {
                question:
                  "What are the eligibility requirements for directors?",
                answer:
                  "At least two directors are required, with one being a resident Indian who has stayed in India for 120+ days in the previous financial year. The maximum number of directors allowed is fifteen.",
              },
              {
                question: "What documents are needed for company registration?",
                answer:
                  "Required documents include passport-sized photos, PAN cards, Aadhar cards, address proofs, and Digital Signature Certificates (DSC) for all directors and shareholders. Additionally, registered office proof and NOC from property owner are needed.",
              },
              {
                question: "How long does company registration take?",
                answer:
                  "The complete process typically takes 7-10 days: 1-2 days for documentation and DSC, 1-3 days for name approval and MOA drafting, 3-4 days for filing SPICe+, and final certificate issuance in 4-7 days.",
              },
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

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-4xl font-bold text-white mb-6"
            >
              Ready to Start Your Business Journey?
            </motion.h2>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-gray-300 mb-8 text-lg"
            >
              Get expert guidance for your company registration process
            </motion.p>
            <motion.div
              variants={fadeIn("up", "tween", 0.4, 1)}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-lg gap-2"
              >
                <Mail /> contact@company.com
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-green-500 text-green-500 hover:bg-green-500/10 text-lg gap-2"
              >
                <Phone /> +91 98996 00605
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}