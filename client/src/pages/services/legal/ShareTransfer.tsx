
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";

export default function ShareTransfer() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 to-black pt-24">
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent mb-6"
            >
              Share Transfer Services
            </motion.h1>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
