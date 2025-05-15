import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const staggerContainer = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const fadeIn = (direction = "up", type = "tween", delay = 0, duration = 0.5) => ({
  hidden: {
    opacity: 0,
    y: direction === "up" ? 20 : direction === "down" ? -20 : 0,
    x: direction === "left" ? 20 : direction === "right" ? -20 : 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      type,
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

const benefits = [
  {
    icon: <svg className="w-12 h-12 text-indigo-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1010 10A10.011 10.011 0 0012 2zm1 15h-2v-6h2zm0-8h-2V7h2z"/></svg>,
    title: "Funding Guidance",
    description: "Expert advice on securing the best funding options for your startup.",
  },
  {
    icon: <svg className="w-12 h-12 text-indigo-400" fill="currentColor" viewBox="0 0 24 24"><path d="M3 6h18v2H3zm0 6h18v2H3zm0 6h18v2H3z"/></svg>,
    title: "Business Structuring",
    description: "Optimizing your company structure for growth and compliance.",
  },
  {
    icon: <svg className="w-12 h-12 text-indigo-400" fill="currentColor" viewBox="0 0 24 24"><path d="M19 4H5a2 2 0 00-2 2v12a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2zm-7 12l-4-4h3V8h2v4h3z"/></svg>,
    title: "ESOP Planning",
    description: "Design employee stock ownership plans to attract and retain talent.",
  },
  {
    icon: <svg className="w-12 h-12 text-indigo-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12l8-5H4z"/></svg>,
    title: "Expert Support",
    description: "Dedicated advisory throughout your startup journey.",
  },
];

export default function StartupAdvisory() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-900 to-blue-900 pt-24 text-gray-200">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.15),_transparent_50%)]" />
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.span
              variants={fadeIn("up", "tween", 0.1, 1)}
              className="inline-block text-indigo-400 font-semibold mb-4"
            >
              Strategic Advisory for Growing Startups
            </motion.span>
            <motion.h1
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-indigo-400 to-blue-500 bg-clip-text text-transparent mb-6"
            >
              Startup Advisory (Funding, Structuring, ESOPs)
            </motion.h1>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-xl text-gray-200 mb-8 leading-relaxed"
            >
              Comprehensive support to help startups secure funding, optimize structure, and implement ESOPs effectively.
            </motion.p>
            <motion.div
              variants={fadeIn("up", "tween", 0.4, 1)}
              className="flex gap-4 justify-center"
            >
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-lg px-8">
                Get Started <ArrowRight className="ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-indigo-600 text-indigo-600 hover:bg-indigo-600/10 text-lg px-8"
              >
                Book Consultation <Phone className="ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zinc-800/40">
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
              Why Choose Our Startup Advisory?
            </motion.h2>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-gray-300 max-w-2xl mx-auto"
            >
              Get expert guidance tailored to your startup's unique needs for funding, structuring, and ESOP implementation.
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
                className="bg-zinc-900/30 backdrop-blur-sm rounded-xl border border-indigo-600/20 p-8 text-center hover:border-indigo-600/50 transition-all duration-300"
              >
                <div className="flex justify-center mb-6">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-indigo-400 mb-4">
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
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <motion.h2
            variants={fadeIn("up", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-6"
          >
            Pricing Plans
          </motion.h2>
          <motion.p
            variants={fadeIn("up", "tween", 0.3, 1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-gray-300 mb-12"
          >
            Flexible advisory packages to fit startups at every stage.
          </motion.p>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div
              variants={fadeIn("up", "spring", 0.1, 0.75)}
              className="bg-zinc-900/40 border border-indigo-600 rounded-xl p-8"
            >
              <h3 className="text-2xl font-semibold text-indigo-400 mb-4">Starter</h3>
              <p className="text-gray-300 mb-6">Basic funding consultation & structure review.</p>
              <p className="text-indigo-400 text-3xl font-bold mb-4">$499</p>
              <Button variant="outline" className="w-full text-indigo-400 border-indigo-400 hover:bg-indigo-600/20">
                Choose Plan
              </Button>
            </motion.div>

            <motion.div
              variants={fadeIn("up", "spring", 0.3, 0.75)}
              className="bg-indigo-600 rounded-xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">Growth</h3>
              <p className="text-indigo-200 mb-6">Comprehensive funding, structuring & ESOP planning.</p>
              <p className="text-white text-3xl font-bold mb-4">$1499</p>
              <Button className="w-full text-white" size="lg">
                Choose Plan
              </Button>
            </motion.div>

            <motion.div
              variants={fadeIn("up", "spring", 0.5, 0.75)}
              className="bg-zinc-900/40 border border-indigo-600 rounded-xl p-8"
            >
              <h3 className="text-2xl font-semibold text-indigo-400 mb-4">Premium</h3>
              <p className="text-gray-300 mb-6">Dedicated advisor & custom ESOP setup support.</p>
              <p className="text-indigo-400 text-3xl font-bold mb-4">$2999</p>
              <Button variant="outline" className="w-full text-indigo-400 border-indigo-400 hover:bg-indigo-600/20">
                Choose Plan
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 bg-zinc-800/40">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.h2
            variants={fadeIn("up", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-8 text-center"
          >
            What We Need From You
          </motion.h2>
          <motion.ul
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="list-disc list-inside space-y-4 text-gray-300 text-lg"
          >
            <motion.li variants={fadeIn("up", "tween", 0.25, 0.7)}>
              Brief on your startup vision, current structure, and funding needs.
            </motion.li>
            <motion.li variants={fadeIn("up", "tween", 0.35, 0.7)}>
              Existing company documents and cap table.
            </motion.li>
            <motion.li variants={fadeIn("up", "tween", 0.45, 0.7)}>
              Details on employee stock options or planned ESOP schemes.
            </motion.li>
            <motion.li variants={fadeIn("up", "tween", 0.55, 0.7)}>
              Financial projections and investment plans (if available).
            </motion.li>
          </motion.ul>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.h2
            variants={fadeIn("up", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-12 text-center"
          >
            Typical Advisory Timeline
          </motion.h2>
          <motion.ol
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="border-l border-indigo-600"
          >
            <motion.li
              variants={fadeIn("up", "spring", 0.25, 0.7)}
              className="mb-10 ml-6"
            >
              <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 ring-8 ring-zinc-900">
                1
              </span>
              <h3 className="mb-1 text-lg font-semibold text-indigo-400">
                Initial Consultation
              </h3>
              <p className="text-gray-300">
                Understand your startup goals and challenges.
              </p>
            </motion.li>

            <motion.li
              variants={fadeIn("up", "spring", 0.4, 0.7)}
              className="mb-10 ml-6"
            >
              <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 ring-8 ring-zinc-900">
                2
              </span>
              <h3 className="mb-1 text-lg font-semibold text-indigo-400">
                Funding & Structuring Plan
              </h3>
              <p className="text-gray-300">
                Develop a tailored funding strategy and optimal business structure.
              </p>
            </motion.li>

            <motion.li
              variants={fadeIn("up", "spring", 0.55, 0.7)}
              className="mb-10 ml-6"
            >
              <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 ring-8 ring-zinc-900">
                3
              </span>
              <h3 className="mb-1 text-lg font-semibold text-indigo-400">
                ESOP Design & Implementation
              </h3>
              <p className="text-gray-300">
                Create and roll out employee stock option plans.
              </p>
            </motion.li>

            <motion.li
              variants={fadeIn("up", "spring", 0.7, 0.7)}
              className="ml-6"
            >
              <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 ring-8 ring-zinc-900">
                4
              </span>
              <h3 className="mb-1 text-lg font-semibold text-indigo-400">
                Ongoing Advisory Support
              </h3>
              <p className="text-gray-300">
                Continuous guidance throughout your growth journey.
              </p>
            </motion.li>
          </motion.ol>
        </div>
      </section>
    </main>
  );
}
