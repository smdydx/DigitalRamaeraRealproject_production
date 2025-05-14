import { motion } from 'framer-motion'; // Make sure you have this import
import { Card} from '@/components/ui/card'; // Replace with your actual component imports if necessary
import { CheckCircle2 } from 'lucide-react'; // Example icon import for the check circle

const AnnualReturnsFiling = () => {
  const keyFeatures = [
    { title: "Quick Service", description: "Fast and efficient processing" },
    { title: "Reliable Support", description: "Expert assistance throughout" },
    { title: "Transparent Pricing", description: "Clear and competitive rates" }
  ];

  const pricingPlans = [
    {
      title: "Director KYC",
      description: "All directors are required to update their contact details and file a KYC annually.",
      dueDate: "30 September",
      price: "₹500/-",
      type: "Online Order"
    },
    {
      title: "Filing of AOC-4",
      description: "Filing of the audited financial statement of the company to ROC after the AGM.",
      dueDate: "30 Days After AGM",
      price: "₹3500/-",
      type: "File"
    },
    {
      title: "Filing of MGT 7A",
      description: "A mandatory filing of the company annual return with details of shareholding.",
      dueDate: "60 Days After AGM",
      price: "₹3000/-",
      type: "File"
    }
  ];

  const filingTypes = [
    "Director KYC",
    "Filing of AOC-4",
    "Company ITR",
    "Filing of ADT-1",
    "Filing of MGT-7/7A"
  ];

  const faqs = [
    {
      question: "What is the punishment for not maintaining the books of account?",
      answer: "Failing to maintain proper books of accounts can result in significant penalties under the Companies Act."
    },
    {
      question: "Can I file a belated Income Tax Return for the Company?",
      answer: "Yes, companies can file belated returns with additional fees and penalties."
    },
    {
      question: "My company has no transaction, do I still have to file ROC Returns and ITR?",
      answer: "Yes, filing annual returns is mandatory regardless of transaction status."
    }
  ];

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
      className="container mx-auto px-4 py-16"
    >
      {/* Hero Section */}
      <motion.section variants={fadeIn("up", "tween", 0.1, 1)} className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Company Annual Return Filing</h1>
        <p className="text-xl text-gray-400 mb-8">Filing of AOC-4 & MGT-7</p>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Companies Incorporated in India must file annual returns to the Registrar of Companies (ROC).
        </p>
      </motion.section>

      {/* Key Features */}
      <motion.section variants={fadeIn("up", "tween", 0.2, 1)} className="grid md:grid-cols-3 gap-8 mb-16">
        {keyFeatures.map((feature, index) => (
          <Card key={index} className="p-6 bg-zinc-900/50 border-blue-500/10">
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-400">{feature.description}</p>
          </Card>
        ))}
      </motion.section>

      {/* Pricing Plans */}
      <motion.section variants={fadeIn("up", "tween", 0.3, 1)} className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Pricing For Annual Filing</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className="p-6 bg-zinc-900/50 border-blue-500/10">
              <Badge className="mb-4">{plan.type}</Badge>
              <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
              <p className="text-gray-400 mb-4">{plan.description}</p>
              <p className="text-sm text-gray-500 mb-4">Due Date: {plan.dueDate}</p>
              <p className="text-2xl font-bold text-primary">{plan.price}</p>
            </Card>
          ))}
        </div>
      </motion.section>

      {/* Filing Types */}
      <motion.section variants={fadeIn("up", "tween", 0.4, 1)} className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Annual Return Filings</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {filingTypes.map((type, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle2 className="text-primary w-5 h-5" />
              <span>{type}</span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* FAQs */}
      <motion.section variants={fadeIn("up", "tween", 0.5, 1)} className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="p-6 bg-zinc-900/50 border-blue-500/10">
              <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
              <p className="text-gray-400">{faq.answer}</p>
            </Card>
          ))}
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section variants={fadeIn("up", "tween", 0.6, 1)} className="text-center">
        <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600">
          Get Started <ArrowRight className="ml-2" />
        </Button>
      </motion.section>
    </motion.div>
  );
};

export default AnnualReturnsFiling;