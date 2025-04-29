
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { PhoneCall, Mail, ArrowRight, CheckCircle2, Calendar } from "lucide-react";

const AnnualROCCompliance = () => {
  return (
    <div className="min-h-screen bg-background relative pt-20">
      {/* Background effects */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_#0000ff22_0%,_transparent_50%)] pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#00008022_0%,_transparent_50%)] pointer-events-none" />
      <div className="fixed inset-0 bg-grid-white/[0.02] pointer-events-none" />

      <div className="container mx-auto px-4">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-16">
          {/* Hero Section */}
          <motion.div variants={fadeIn("down", "tween", 0.2, 1)} className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-600">
              Annual ROC Compliance Services
            </h1>
            <p className="text-2xl font-bold text-blue-400">Stay Compliant. Stay Focused on Growth.</p>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto">
              All companies and LLPs registered in India are required to file annual returns and financial statements with the Registrar of Companies (ROC) under the Companies Act, 2013 and LLP Act, 2008. At SOFTBEEM, we ensure seamless, timely ROC compliance so that your company stays legally clean and avoids penalties.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div variants={fadeIn("up", "tween", 0.4, 1)} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Annual Return Filing (Form MGT-7)",
              "Financial Statement Filing (Form AOC-4)",
              "DIR-3 KYC for Directors",
              "LLP Annual Return Filing (Form 11)",
              "LLP Financial Statement Filing (Form 8)",
              "Board Meeting Resolutions",
              "Statutory Registers Maintenance",
              "Director Appointment Filing",
              "Auditor Appointment Filing"
            ].map((service, index) => (
              <div key={index} className="p-6 bg-zinc-900/50 rounded-xl border border-blue-500/10 hover:border-blue-500/30 transition-all">
                <CheckCircle2 className="w-8 h-8 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{service}</h3>
              </div>
            ))}
          </motion.div>

          {/* ROC Filing Calendar */}
          <motion.div variants={fadeIn("up", "tween", 0.6, 1)} className="space-y-8">
            <h2 className="text-3xl font-bold text-center">ROC Filing Calendar</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { form: "MGT-7 (Annual Return)", date: "Within 60 days from AGM" },
                { form: "AOC-4 (Financials)", date: "Within 30 days from AGM" },
                { form: "LLP Form 11", date: "30th May each year" },
                { form: "LLP Form 8", date: "30th October each year" },
                { form: "DIR-3 KYC", date: "30th September each year" }
              ].map((filing, index) => (
                <div key={index} className="flex items-center gap-4 p-6 bg-zinc-900/50 rounded-xl border border-blue-500/10">
                  <Calendar className="w-8 h-8 text-blue-400" />
                  <div>
                    <h4 className="font-semibold text-white">{filing.form}</h4>
                    <p className="text-gray-400">{filing.date}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-red-400 text-center">Penalties up to ₹100 per day for late filings.</p>
          </motion.div>

          {/* Why Choose Us */}
          <motion.div variants={fadeIn("up", "tween", 0.8, 1)} className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Why Choose SOFTBEEM</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Timely Reminders and Filings",
                "Expert Corporate Secretarial Team",
                "Document Drafting and Register Maintenance",
                "Risk Management and Penalty Avoidance",
                "Fixed Pricing Packages"
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-zinc-900/50 rounded-xl border border-blue-500/10">
                  <CheckCircle2 className="w-6 h-6 text-blue-400 mt-1" />
                  <p className="text-gray-300">{feature}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div variants={fadeIn("up", "tween", 1, 1)} className="text-center space-y-8">
            <h2 className="text-3xl font-bold">Stay ROC Compliant with Ease!</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
                <PhoneCall className="mr-2 h-5 w-5" /> Get Compliance Checklist
              </Button>
              <Button size="lg" variant="outline" className="border-blue-500/30 text-blue-400 hover:bg-blue-500/10">
                <Mail className="mr-2 h-5 w-5" /> Request ROC Filing Proposal
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AnnualROCCompliance;
