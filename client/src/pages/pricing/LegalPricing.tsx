
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const LegalPricing = () => {
  const pricingPlans = [
    {
      name: "Startup Legal Pack",
      targetUsers: "Startups, Founders",
      priceRange: "₹24,999 – ₹29,999",
      services: [
        "Company Registration",
        "GST Registration",
        "DPIIT Registration",
        "ROC Compliance",
        "Trademark Registration"
      ],
      addOns: "Legal Drafting +₹4,999"
    },
    {
      name: "SME Compliance Pack",
      targetUsers: "SMEs, D2C Brands",
      priceRange: "₹24,999 – ₹28,999/year",
      services: [
        "Annual ROC Filing",
        "Labour Compliance",
        "Trademark Registration",
        "FEMA Support"
      ],
      addOns: "Extra GST Filing +₹2,999"
    },
    {
      name: "Corporate Legal Pack",
      targetUsers: "MNC Subsidiaries, Funded Startups",
      priceRange: "₹59,999 – ₹74,999/year",
      services: [
        "ROC Compliance",
        "Secretarial Audit",
        "FEMA Compliance",
        "Governance Structuring",
        "CSR Policy Development"
      ],
      addOns: "Dedicated Compliance Officer Option"
    }
  ];

  return (
    <section className="py-16 bg-zinc-900">
      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <motion.div variants={fadeIn("down", "tween", 0.2, 1)} className="text-center space-y-4">
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-600">
              Legal & Compliance Pricing
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose the perfect legal package tailored to your business needs
            </p>
          </motion.div>

          <motion.div variants={fadeIn("up", "tween", 0.3, 1)} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className="p-6 border border-green-500/20 bg-zinc-900/50 backdrop-blur-sm">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-green-400">{plan.name}</h3>
                    <p className="text-gray-400 mt-2">{plan.targetUsers}</p>
                  </div>
                  
                  <div>
                    <span className="text-3xl font-bold text-white">{plan.priceRange}</span>
                  </div>

                  <ul className="space-y-3">
                    {plan.services.map((service, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-green-400" />
                        <span className="text-gray-300">{service}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-green-500/20">
                    <p className="text-sm text-gray-400">
                      Add-ons: {plan.addOns}
                    </p>
                  </div>

                  <Button className="w-full bg-green-500 hover:bg-green-600">
                    Get Started
                  </Button>
                </div>
              </Card>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LegalPricing;
