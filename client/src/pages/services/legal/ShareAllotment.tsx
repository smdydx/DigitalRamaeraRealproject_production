
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { FileText, ShieldCheck, List, ArrowRight } from "lucide-react";

export default function ShareAllotment() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 to-black pt-24">
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-6xl mx-auto"
          >
            <motion.h1
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent mb-6 text-center"
            >
              Share Allotment Services
            </motion.h1>

            <motion.div variants={fadeIn("up", "tween", 0.3, 1)} className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-zinc-900/50 p-6 rounded-lg border border-zinc-800">
                <div className="h-12 w-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                  <FileText className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Rights Issue</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <span>Compliance with Companies Act provisions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <span>Letter of offer preparation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <span>Record date determination</span>
                  </li>
                </ul>
              </div>

              <div className="bg-zinc-900/50 p-6 rounded-lg border border-zinc-800">
                <div className="h-12 w-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                  <ShieldCheck className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Private Placement</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <span>PAS-4 & PAS-5 form filing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <span>Board resolution drafting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <span>Valuation report assistance</span>
                  </li>
                </ul>
              </div>

              <div className="bg-zinc-900/50 p-6 rounded-lg border border-zinc-800">
                <div className="h-12 w-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-4">
                  <List className="h-6 w-6 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Bonus Issue</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <span>Capitalization of reserves</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <span>Articles verification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <span>ROC filing management</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <motion.div variants={fadeIn("up", "tween", 0.4, 1)} className="mt-12">
              <h2 className="text-2xl font-semibold text-white mb-6">Our Process</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-zinc-900/50 p-6 rounded-lg border border-zinc-800">
                  <h3 className="text-xl font-semibold text-white mb-4">Documentation Required</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                      <span>Board resolution for share allotment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                      <span>Shareholders' resolution (if applicable)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                      <span>Share application money receipts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                      <span>Bank statements</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-zinc-900/50 p-6 rounded-lg border border-zinc-800">
                  <h3 className="text-xl font-semibold text-white mb-4">Compliance Timeline</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                      <span>Return of Allotment (PAS-3) - Within 30 days</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                      <span>Share certificates - Within 2 months</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                      <span>Register of Members update - Immediate</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeIn("up", "tween", 0.5, 1)} className="mt-12">
              <div className="bg-zinc-900/50 p-6 rounded-lg border border-zinc-800">
                <h3 className="text-xl font-semibold text-white mb-4">Why Choose Us?</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <span>Expert guidance on SEBI & Companies Act compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <span>End-to-end management of allotment process</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <span>Timely compliance and filing assistance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <span>Regular updates and transparent communication</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
