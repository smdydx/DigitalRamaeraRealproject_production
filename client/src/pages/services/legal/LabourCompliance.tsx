import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { PhoneCall, Mail, CheckCircle2 } from "lucide-react";

const LabourCompliance = () => {
  return (
    <div className="min-h-screen bg-background relative pt-24 pb-32">
      {/* Background effects */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_#00ff0022_0%,_transparent_50%)] pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#00800022_0%,_transparent_50%)] pointer-events-none" />
      <div className="fixed inset-0 bg-grid-white/[0.02] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-8 md:space-y-16">
          {/* Hero Section */}
          <motion.div variants={fadeIn("down", "tween", 0.2, 1)} className="legal-hero flex flex-col items-center justify-center text-center relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 z-0">
              <img 
                src="/images/services/business-growth.jpg"
                alt="Labour Law Compliance"
                className="w-full h-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />
            </div>
            <div className="absolute inset-0 -z-10">
              <img 
                src="/images/services/business-growth.jpg" 
                alt="Labour Compliance" 
                className="w-full h-[400px] object-cover opacity-20 rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600 pt-16">
              Labour Law Compliance Services
            </h1>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto">
              Comprehensive labour law compliance solutions to help businesses maintain legal standards, protect employee rights, and ensure workplace harmony.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div variants={fadeIn("up", "tween", 0.4, 1)} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Employment Contract Review & Drafting",
              "Labour Law Registration & Licenses",
              "PF, ESI & Professional Tax Compliance",
              "Labour Law Audit Services",
              "HR Policy Development",
              "Workplace Safety Compliance",
              "Employee Grievance Management",
              "Labour Law Training Programs"
            ].map((service, index) => (
              <div key={index} className="p-6 bg-zinc-900/50 rounded-xl border border-green-500/10 hover:border-green-500/30 transition-all">
                <CheckCircle2 className="w-8 h-8 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{service}</h3>
              </div>
            ))}
          </motion.div>

          {/* Why Choose Us */}
          <motion.div variants={fadeIn("up", "tween", 0.8, 1)} className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Why Choose SOFTBEEM for Labour Law Compliance?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                "Expert Team of Labour Law Professionals",
                "Pan-India Compliance Support",
                "Regular Updates on Law Changes",
                "Customized Compliance Solutions"
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-zinc-900/50 rounded-xl border border-green-500/10">
                  <CheckCircle2 className="w-6 h-6 text-green-400 mt-1" />
                  <p className="text-gray-300">{feature}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div variants={fadeIn("up", "tween", 1, 1)} className="text-center space-y-8">
            <h2 className="text-3xl font-bold">Get Expert Labour Law Compliance Support!</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-green-500 hover:bg-green-600">
                <PhoneCall className="mr-2 h-5 w-5" /> Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-green-500/30 text-green-400 hover:bg-green-500/10">
                <Mail className="mr-2 h-5 w-5" /> Request Compliance Audit
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default LabourCompliance;