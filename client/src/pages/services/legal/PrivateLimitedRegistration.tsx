
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { ArrowRight, Check, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Director DIN",
  "Digital Signature",
  "Company Name Approval",
  "Drafting MoA & AoA",
  "Filing Incorporation Forms",
  "Certificate of Incorporation",
  "Company PAN & TAN",
  "100% Online Process"
];

const requirements = [
  {
    title: "Minimum Two Shareholder",
    description: "For Company Registration in India, a minimum of two shareholders is mandatory. These shareholders must sign the MOA as subscribers and contribute the initial capital."
  },
  {
    title: "Minimum Two Directors",
    description: "The company directors are responsible for day-to-day management and compliance. A minimum of two individual directors is mandatory."
  },
  {
    title: "At Least One Resident Indian Director",
    description: "One director must have resided in India for at least 120 days during previous financial years."
  },
  {
    title: "Unique Name of Company",
    description: "The proposed name must be unique and distinct from other registered companies, LLPs or trademarks."
  }
];

const timeline = [
  {
    title: "Documentation & Digital Signatures",
    duration: "1-2 Days",
    description: "Complete all necessary incorporation documents and obtain digital signatures for shareholders and directors."
  },
  {
    title: "Name Search & MOA Drafting",
    duration: "1-3 Days",
    description: "Comprehensive name availability search and drafting of MOA, AOA and related documents."
  },
  {
    title: "Filing for Company Incorporation",
    duration: "3-4 Days",
    description: "File application using Spice Plus form with MOA, AOA, and required documents."
  },
  {
    title: "Issuance of Incorporation Certificate",
    duration: "4-7 Days",
    description: "ROC reviews application and issues Incorporation Certificate upon approval."
  }
];

export default function PrivateLimitedRegistration() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 to-black pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(74,222,128,0.1),_transparent_50%)]" />
        <div className="container mx-auto px-4 py-16">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1 
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent mb-6"
            >
              Private Limited Company Registration in India
            </motion.h1>
            <motion.p 
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-xl text-gray-300 mb-8"
            >
              Transform your business idea into a legal entity with our expert private limited company registration services. Get your company registered within 7 days with our comprehensive registration package.
            </motion.p>
            <motion.div 
              variants={fadeIn("up", "tween", 0.4, 1)}
              className="flex gap-4 justify-center"
            >
              <Button size="lg" className="bg-green-500 hover:bg-green-600">
                Get Started <ArrowRight className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-green-500 text-green-500 hover:bg-green-500/10">
                Request Callback <Phone className="ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto bg-zinc-800/30 backdrop-blur-sm rounded-2xl border border-green-500/10 p-8"
          >
            <motion.div 
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-center mb-8"
            >
              <h2 className="text-3xl font-bold text-green-400 mb-4">Company Registration Package</h2>
              <p className="text-2xl font-semibold text-white mb-2">Starting at ₹3,499/-*</p>
              <p className="text-sm text-gray-400">*Standard Professional Fee, Govt fee & Taxes on actual</p>
            </motion.div>

            <motion.div 
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </motion.div>

            <motion.div 
              variants={fadeIn("up", "tween", 0.4, 1)}
              className="mt-8 text-center"
            >
              <Button size="lg" className="bg-green-500 hover:bg-green-600">
                Start Registration Process
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-16 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeIn("up", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-white mb-12"
          >
            Eligibility & Requirements
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
                className="bg-zinc-800/30 backdrop-blur-sm rounded-xl border border-green-500/10 p-6"
              >
                <h3 className="text-xl font-semibold text-green-400 mb-4">{req.title}</h3>
                <p className="text-gray-300">{req.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeIn("up", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-white mb-12"
          >
            Registration Timeline
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
                className="flex items-start gap-6 mb-8"
              >
                <div className="flex-shrink-0 w-32 text-right">
                  <span className="text-green-400 font-semibold">{step.duration}</span>
                </div>
                <div className="flex-grow pl-6 border-l border-green-500/30">
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-zinc-900/50">
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
              className="text-3xl font-bold text-white mb-6"
            >
              Ready to Start Your Business Journey?
            </motion.h2>
            <motion.p 
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-gray-300 mb-8"
            >
              Get expert guidance for your company registration process
            </motion.p>
            <motion.div 
              variants={fadeIn("up", "tween", 0.4, 1)}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Button size="lg" className="bg-green-500 hover:bg-green-600">
                <Mail className="mr-2" /> contact@company.com
              </Button>
              <Button size="lg" variant="outline" className="border-green-500 text-green-500 hover:bg-green-500/10">
                <Phone className="mr-2" /> +91 98996 00605
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
