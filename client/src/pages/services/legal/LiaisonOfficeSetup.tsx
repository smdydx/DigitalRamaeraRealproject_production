
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const LiaisonOfficeSetup = () => {
  const faqs = [
    {
      question: "What is a Liaison Office?",
      answer: "A Liaison Office (LO) acts as a representative office of a foreign company in India, facilitating communication between the parent company and Indian businesses. It cannot engage in commercial activities."
    },
    {
      question: "What are the key compliance requirements?",
      answer: "Annual Activity Certificate from auditors, Annual filing with RBI, Maintaining proper books of accounts, and Filing with ROC under Companies Act, 2013."
    },
    {
      question: "What's the difference between LO, BO, and PO?",
      answer: "Liaison Office can only undertake liaison activities, Branch Office can engage in commercial activities, and Project Office is set up for specific projects."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Liaison/Branch/Project Office Setup Compliance | Legal Services</title>
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-white mb-8">Liaison/Branch/Project Office Setup Compliance</h1>
          
          <div className="prose prose-invert max-w-none">
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
              <ul className="list-disc pl-6 space-y-3">
                <li>Application and Registration with RBI</li>
                <li>Documentation and Compliance Support</li>
                <li>Annual Compliance Management</li>
                <li>ROC and Tax Compliance</li>
                <li>Closure and Wind-up Assistance</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">Types of Offices</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-zinc-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Liaison Office</h3>
                  <p>Representative office for promotion and networking</p>
                </div>
                <div className="bg-zinc-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Branch Office</h3>
                  <p>Extension of foreign company for business operations</p>
                </div>
                <div className="bg-zinc-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Project Office</h3>
                  <p>Temporary establishment for specific projects</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default LiaisonOfficeSetup;
