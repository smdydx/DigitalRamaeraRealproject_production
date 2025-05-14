
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, FileCheck, Clock, Shield } from "lucide-react";

export default function AnnualReturnsFiling() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black pt-24">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.h1
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 mb-6"
            >
              Annual Returns Filing (MGT-7, AOC-4)
            </motion.h1>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-gray-400 max-w-2xl mx-auto mb-8"
            >
              Ensure compliance and maintain good standing with timely filing of annual returns
            </motion.p>
            <motion.div
              variants={fadeIn("up", "tween", 0.4, 1)}
              className="flex justify-center gap-4"
            >
              <Button size="lg" className="bg-green-500 hover:bg-green-600">
                Get Started <ArrowRight className="ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-zinc-900/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FileText className="h-8 w-8" />,
                title: "Document Preparation",
                description: "Expert assistance in preparing all required documents and financial statements"
              },
              {
                icon: <FileCheck className="h-8 w-8" />,
                title: "Compliance Check",
                description: "Thorough review to ensure all compliance requirements are met"
              },
              {
                icon: <Clock className="h-8 w-8" />,
                title: "Timely Filing",
                description: "Ensure on-time submission to avoid penalties and maintain compliance"
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Legal Protection",
                description: "Maintain your company's legal status and good standing"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", "spring", index * 0.1, 0.75)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-zinc-800/50 rounded-lg p-6 border border-green-500/10 hover:border-green-500/30 transition-all"
              >
                <div className="text-green-500 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
