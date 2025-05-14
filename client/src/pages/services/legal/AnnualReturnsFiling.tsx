
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, FileText, AlertCircle, FileCheck, Clock } from "lucide-react";

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
              Companies Incorporated in India must file annual returns to the Registrar of Companies (ROC). We help you file the annual compliance of your company within its due date.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-zinc-900/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Director KYC",
                description: "All directors are required to update their contact details and file a KYC annually.",
                dueDate: "30 September",
                price: "₹500",
                icon: <FileText className="h-8 w-8" />
              },
              {
                title: "Filing of AOC-4",
                description: "Filing of the audited financial statement of the company to ROC after the AGM.",
                dueDate: "30 Days After AGM",
                price: "₹3,500",
                icon: <FileCheck className="h-8 w-8" />
              },
              {
                title: "Filing of MGT 7A",
                description: "A mandatory filing of the company annual return with details of shareholding.",
                dueDate: "60 Days After AGM",
                price: "₹3,000",
                icon: <Calendar className="h-8 w-8" />
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", "spring", index * 0.1, 0.75)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-zinc-800/50 rounded-lg p-8 border border-green-500/10 hover:border-green-500/30 transition-all"
              >
                <div className="text-green-500 mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <div className="flex items-center gap-2 text-yellow-500 mb-4">
                  <Clock className="h-5 w-5" />
                  <span>Due Date: {service.dueDate}</span>
                </div>
                <div className="text-2xl font-bold text-green-400">{service.price}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AGM Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-3xl font-bold text-white mb-6"
            >
              Annual General Meeting (AGM)
            </motion.h2>
            <motion.div
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="prose prose-invert max-w-none"
            >
              <p className="text-gray-400 mb-6">
                The annual general meeting of a company is the meeting of the shareholders to adopt the audited financial statements, re-elect the board members, declare dividends, and appoint the statutory auditor of the company. The AGM is a statutory meeting under section 96 of the Companies Act 2013.
              </p>
              <div className="bg-zinc-800/50 rounded-lg p-6 border border-green-500/10 mb-6">
                <h3 className="text-xl font-bold text-green-400 mb-4">Key AGM Requirements</h3>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  <li>First AGM must be held within nine months of incorporation</li>
                  <li>Subsequent AGMs within six months of the financial year end</li>
                  <li>21-clear-day Notice required for shareholders</li>
                  <li>Must be held on a working day within city limits of registered office</li>
                  <li>Video Conferencing options available</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Due Dates Table */}
      <section className="py-20 bg-zinc-900/30">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-3xl font-bold text-white mb-6"
            >
              Due Dates for FY 2023-24
            </motion.h2>
            <motion.div
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="overflow-x-auto"
            >
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-zinc-800">
                    <th className="p-4 text-left text-green-400 border border-zinc-700">Particulars</th>
                    <th className="p-4 text-left text-green-400 border border-zinc-700">First AGM</th>
                    <th className="p-4 text-left text-green-400 border border-zinc-700">Subsequent AGM</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 border border-zinc-700 text-white">AGM Due Date</td>
                    <td className="p-4 border border-zinc-700 text-gray-400">31 December 2024</td>
                    <td className="p-4 border border-zinc-700 text-gray-400">30 September 2024</td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-zinc-700 text-white">ADT-1 Due Date</td>
                    <td className="p-4 border border-zinc-700 text-gray-400">15 January 2025</td>
                    <td className="p-4 border border-zinc-700 text-gray-400">15 October 2024</td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-zinc-700 text-white">AOC-4 Due Date</td>
                    <td className="p-4 border border-zinc-700 text-gray-400">29 January 2025</td>
                    <td className="p-4 border border-zinc-700 text-gray-400">29 October 2024</td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-zinc-700 text-white">MGT-7A Due Date</td>
                    <td className="p-4 border border-zinc-700 text-gray-400">28 February 2025</td>
                    <td className="p-4 border border-zinc-700 text-gray-400">28 November 2024</td>
                  </tr>
                </tbody>
              </table>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ROC Fees */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <motion.h2
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-3xl font-bold text-white mb-6"
            >
              ROC Filing Fees
            </motion.h2>
            <motion.div
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="overflow-x-auto"
            >
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-zinc-800">
                    <th className="p-4 text-left text-green-400 border border-zinc-700">Authorised Capital</th>
                    <th className="p-4 text-left text-green-400 border border-zinc-700">Normal ROC Fee (Rs)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 border border-zinc-700 text-white">Less than 1,00,000</td>
                    <td className="p-4 border border-zinc-700 text-gray-400">200/-</td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-zinc-700 text-white">1,00,000 to 4,99,999</td>
                    <td className="p-4 border border-zinc-700 text-gray-400">300/-</td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-zinc-700 text-white">5,00,000 to 24,99,999</td>
                    <td className="p-4 border border-zinc-700 text-gray-400">400/-</td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-zinc-700 text-white">25,00,000 to 99,99,999</td>
                    <td className="p-4 border border-zinc-700 text-gray-400">500/-</td>
                  </tr>
                  <tr>
                    <td className="p-4 border border-zinc-700 text-white">1,00,00,000 or more</td>
                    <td className="p-4 border border-zinc-700 text-gray-400">600/-</td>
                  </tr>
                </tbody>
              </table>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-zinc-900/30">
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
              Ready to File Your Annual Returns?
            </motion.h2>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-gray-400 mb-8"
            >
              Let us help you stay compliant with all your annual filing requirements
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
    </main>
  );
}
