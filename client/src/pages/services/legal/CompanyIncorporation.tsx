
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { PhoneCall, Mail, ArrowRight, CheckCircle2 } from "lucide-react";

const CompanyIncorporation = () => {
  const incorporationServices = [
    "Private Limited Company Registration",
    "Public Limited Company Registration", 
    "One Person Company (OPC) Registration",
    "Limited Liability Partnership (LLP) Registration",
    "Section 8 (Non-Profit Company) Registration",
    "Producer Company Registration",
    "Nidhi Company Registration",
    "Foreign Company Setup (Branch Office, Liaison Office, Project Office)"
  ];

  return (
    <div className="min-h-screen bg-background relative">
      {/* Background effects */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_#00ff0022_0%,_transparent_50%)] pointer-events-none" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#00800022_0%,_transparent_50%)] pointer-events-none" />
      <div className="fixed inset-0 bg-grid-white/[0.02] pointer-events-none" />

      {/* Hero Section */}
      <div className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/services/business-growth.jpg" 
            alt="Company Incorporation"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        </div>
        
        <div className="container mx-auto px-4 h-full flex items-center">
          <motion.div 
            variants={staggerContainer} 
            initial="hidden" 
            animate="visible" 
            className="relative z-10 max-w-4xl"
          >
            <motion.h1 
              variants={fadeIn("down", "tween", 0.2, 1)} 
              className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600 mb-6"
            >
              Start Right. Build Smart. Grow Legally.
            </motion.h1>
            <motion.p 
              variants={fadeIn("up", "tween", 0.3, 1)} 
              className="text-xl text-gray-300 mb-8"
            >
              At SOFTBEEM, powered by RAMAERA Legal Infotech Pvt Ltd, we offer end-to-end company incorporation services to help entrepreneurs, startups, and corporates establish legally compliant entities in India — quickly, seamlessly, and affordably.
            </motion.p>
            <motion.div 
              variants={fadeIn("up", "tween", 0.4, 1)}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="bg-green-500 hover:bg-green-600">
                <PhoneCall className="mr-2 h-5 w-5" /> Schedule Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-green-500/30 text-green-400 hover:bg-green-500/10">
                <Mail className="mr-2 h-5 w-5" /> Get Quote
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 py-20">
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-16"
        >
          <motion.h2 
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="text-3xl md:text-4xl font-bold text-center mb-12"
          >
            Company Incorporation Services
          </motion.h2>

          <motion.div 
            variants={fadeIn("up", "tween", 0.4, 1)}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {incorporationServices.map((service, index) => (
              <div 
                key={index}
                className="p-6 bg-zinc-900/50 rounded-xl border border-green-500/10 hover:border-green-500/30 transition-all group"
              >
                <CheckCircle2 className="w-8 h-8 text-green-400 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold text-white mb-2">{service}</h3>
                <Button variant="link" className="text-green-400 p-0 h-auto mt-2">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default CompanyIncorporation;
