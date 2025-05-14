
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Shield, FileCheck, FileText } from "lucide-react";

export default function StatutoryRegisters() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black pt-24">
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
              Statutory Registers Maintenance
            </motion.h1>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-gray-400 max-w-2xl mx-auto mb-8"
            >
              Comprehensive statutory register maintenance services ensuring compliance with Companies Act, 2013
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-zinc-900/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="h-8 w-8" />,
                title: "Register Maintenance",
                description: "Comprehensive maintenance of all statutory registers including Members, Directors, Charges, and more"
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Legal Compliance",
                description: "Ensure compliance with Companies Act 2013 requirements for register maintenance"
              },
              {
                icon: <FileCheck className="h-8 w-8" />,
                title: "Regular Updates",
                description: "Timely updates and maintenance of all statutory records and registers"
              },
              {
                icon: <FileText className="h-8 w-8" />,
                title: "Documentation",
                description: "Proper documentation and storage of all statutory books and registers"
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
