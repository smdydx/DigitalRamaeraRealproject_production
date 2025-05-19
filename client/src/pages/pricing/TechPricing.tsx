
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const TechPricing = () => {
  const pricingPlans = [
    {
      name: "Blockchain Starter Pack",
      targetUsers: "Crypto Entrepreneurs, NFT Creators",
      priceRange: "₹39,999 – ₹49,999",
      services: [
        "Token Development",
        "Smart Contract",
        "Basic Web3 Site"
      ],
      addOns: "Launchpad Consulting +₹9,999"
    },
    {
      name: "NFT Marketplace Pack",
      targetUsers: "Artists, Agencies",
      priceRange: "₹99,999 – ₹1,49,000",
      services: [
        "NFT Minting",
        "Marketplace",
        "Admin Panel"
      ],
      addOns: "Custom UX Design +₹14,999"
    },
    {
      name: "Crypto Exchange Launch Pack",
      targetUsers: "Crypto Startups",
      priceRange: "₹10,00,000 – ₹15,49,999",
      services: [
        "Full CEX/DEX Platform",
        "Wallet Integration",
        "KYC/AML System"
      ],
      addOns: "Token + Exchange Combo Offer"
    },
    {
      name: "Blockchain Development",
      targetUsers: "Professional",
      priceRange: "Layer 1: ₹2,99,000 - ₹4,99,000\nLayer 2: ₹10,00,000 - ₹15,00,000",
      services: [
        "Complete Layer 1/2 Development",
        "Blockchain Explorer",
        "Full Network Setup"
      ],
      addOns: "Blockchain plus Block explorer"
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
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
              Tech Services Pricing
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Choose the perfect blockchain solution package for your business needs
            </p>
          </motion.div>

          <motion.div variants={fadeIn("up", "tween", 0.3, 1)} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className="p-6 border border-purple-500/20 bg-zinc-900/50 backdrop-blur-sm">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-purple-400">{plan.name}</h3>
                    <p className="text-gray-400 mt-2">{plan.targetUsers}</p>
                  </div>
                  
                  <div>
                    <span className="text-3xl font-bold text-white whitespace-pre-line">{plan.priceRange}</span>
                  </div>

                  <ul className="space-y-3">
                    {plan.services.map((service, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-purple-400" />
                        <span className="text-gray-300">{service}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-purple-500/20">
                    <p className="text-sm text-gray-400">
                      Add-ons: {plan.addOns}
                    </p>
                  </div>

                  <Button className="w-full bg-purple-500 hover:bg-purple-600">
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

export default TechPricing;
