
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const StartBusinessIndia = () => {
  const benefits = [
    "Limited Liability Protection",
    "Easy Transfer of Ownership",
    "Professional Corporate Image",
    "Perpetual Succession",
    "Separate Legal Entity",
    "Tax Benefits & Incentives"
  ];

  const businessTypes = [
    {
      title: "Private Limited Company",
      features: ["Limited Liability", "Minimum 2 Directors", "Separate Legal Entity"]
    },
    {
      title: "Limited Liability Partnership",
      features: ["Flexible Structure", "Low Compliance", "Partner Protection"]
    },
    {
      title: "One Person Company",
      features: ["Single Director", "Limited Liability", "Professional Structure"]
    },
    {
      title: "Partnership Firm",
      features: ["Easy Formation", "Shared Management", "Low Cost"]
    }
  ];

  const otherServices = [
    "Business Plan Development",
    "Company Registration",
    "Tax Registration (GST, PAN, TAN)",
    "Bank Account Opening",
    "Compliance Management",
    "Business Licenses"
  ];

  const process = [
    "Business Structure Selection",
    "Name Approval & Registration",
    "Document Submission",
    "Certificate of Incorporation",
    "Post Registration Compliances",
    "Bank Account Opening"
  ];

  const faqs = [
    {
      question: "How long does it take to register a company in India?",
      answer: "The process typically takes 15-20 working days, depending on the type of business structure and documentation readiness."
    },
    {
      question: "What are the minimum requirements for company registration?",
      answer: "For a Private Limited Company, you need minimum 2 directors, valid ID proofs, address proofs, and initial capital."
    },
    {
      question: "What are the costs involved in company registration?",
      answer: "The costs include government fees, professional charges, and stamp duty which varies based on state and share capital."
    }
  ];

  return (
    <div className="min-h-screen bg-background relative pt-16">
      {/* Background effects */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_#00ff0022_0%,_transparent_50%)] pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#00800022_0%,_transparent_50%)] pointer-events-none" />
      <div className="fixed inset-0 bg-grid-white/[0.02] pointer-events-none" />

      <div className="container mx-auto px-4">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-16">
          {/* Intro Section */}
          <motion.section variants={fadeIn("down", "tween", 0.2, 1)} className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">
              Start Your Business in India
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto">
              Get end-to-end assistance in starting your business in India with our comprehensive company registration and compliance services.
            </p>
          </motion.section>

          {/* Business Types */}
          <motion.section variants={fadeIn("up", "tween", 0.4, 1)} className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Business Types</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {businessTypes.map((type, index) => (
                <div key={index} className="p-6 bg-zinc-900/50 rounded-xl border border-green-500/10">
                  <h3 className="text-xl font-semibold text-white mb-4">{type.title}</h3>
                  <ul className="space-y-2">
                    {type.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-green-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Overview */}
          <motion.section variants={fadeIn("up", "tween", 0.6, 1)} className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Overview</h2>
            <div className="bg-zinc-900/50 rounded-xl border border-green-500/10 p-8">
              <p className="text-gray-300 leading-relaxed">
                Starting a business in India offers immense opportunities in one of the world's fastest-growing economies. Our comprehensive services help entrepreneurs navigate the registration process, compliance requirements, and operational setup efficiently.
              </p>
            </div>
          </motion.section>

          {/* Other Startup Services */}
          <motion.section variants={fadeIn("up", "tween", 0.8, 1)} className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Other Startup Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherServices.map((service, index) => (
                <div key={index} className="p-6 bg-zinc-900/50 rounded-xl border border-green-500/10">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">{service}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Stepwise Process */}
          <motion.section variants={fadeIn("up", "tween", 1, 1)} className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Stepwise Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {process.map((step, index) => (
                <div key={index} className="p-6 bg-zinc-900/50 rounded-xl border border-green-500/10">
                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-bold text-green-400">{index + 1}</span>
                    <span className="text-gray-300">{step}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Incorporation Benefits */}
          <motion.section variants={fadeIn("up", "tween", 1.2, 1)} className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Incorporation Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="p-6 bg-zinc-900/50 rounded-xl border border-green-500/10">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* FAQs */}
          <motion.section variants={fadeIn("up", "tween", 1.4, 1)} className="space-y-8">
            <h2 className="text-3xl font-bold text-center">FAQs</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="p-6 bg-zinc-900/50 rounded-xl border border-green-500/10">
                  <h3 className="text-xl font-semibold text-white mb-2">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.section variants={fadeIn("up", "tween", 1.6, 1)} className="text-center space-y-8">
            <Button size="lg" className="bg-green-500 hover:bg-green-600">
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
};

export default StartBusinessIndia;
