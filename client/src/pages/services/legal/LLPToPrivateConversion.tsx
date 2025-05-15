import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Building, Clock, Users, Phone, FileText } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useEffect } from "react";

const benefits = [
  {
    icon: <Shield className="w-12 h-12 text-green-400" />,
    title: "Retain and Grow Brands",
    description: "Continue LLP's legacy and transfer IPR rights without capital gain. Brand reputation is preserved through conversion."
  },
  {
    icon: <Building className="w-12 h-12 text-green-400" />,
    title: "Carry Forward Benefits",
    description: "Transfer unabsorbed losses and depreciation under Income Tax Act to the new private limited company"
  },
  {
    icon: <Clock className="w-12 h-12 text-green-400" />,
    title: "Ease in Fund Raising",
    description: "Simplified share allotment and verifiable company details at MCA attract investors"
  },
  {
    icon: <Users className="w-12 h-12 text-green-400" />,
    title: "ESOP Benefits",
    description: "Implement registered ESOP plans to retain talent, especially beneficial for IT sector"
  },
  {
    icon: <FileText className="w-12 h-12 text-green-400" />,
    title: "No Capital Gain Tax",
    description: "Asset transfer during conversion is exempt from capital gain tax as LLP is replaced by company"
  }
];

const faqs = [
  {
    question: "Can LLP be converted into a Private Limited Company?",
    answer: "Yes, an LLP can be converted into a Private Limited Company under Section 366 of the Companies Act, 2013 following specific legal procedures and compliance requirements."
  },
  {
    question: "What is the time limit for LLP conversion into a company?",
    answer: "The process typically takes 30-45 days, with key steps including partner consent, newspaper publications, and ROC approvals."
  },
  {
    question: "What forms are filed for the conversion of LLP into a company?",
    answer: "The main forms include URC-1, URC-2 (for newspaper publication), RUN (for name reservation), Spice+ Form, and DIR-2 (director consent)."
  }
];

export default function LLPToPrivateConversion() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 to-black pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(74,222,128,0.1),_transparent_50%)]" />
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center"
          >
            <motion.span
              variants={fadeIn("up", "tween", 0.1, 1)}
              className="inline-block text-green-400 font-semibold mb-4"
            >
              Transform Your Business Structure
            </motion.span>
            <motion.h1
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent mb-6"
            >
              Convert LLP into Private Limited Company
            </motion.h1>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-xl text-gray-300 mb-8 leading-relaxed"
            >
              Expert guidance through the complete process of converting your LLP into a Private Limited Company. 100% online compliance services with reliable support.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-12 bg-zinc-800/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
              href="tel:+911169310715"
              className="flex items-center gap-3 px-8 py-4 bg-green-500 hover:bg-green-600 rounded-lg transition-colors duration-300 w-full md:w-auto justify-center"
            >
              <Phone className="h-5 w-5" />
              <span className="font-semibold">Call: +91 116 931 0715</span>
            </a>
            <a 
              href="https://wa.me/911169310715"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-[#25D366] hover:bg-[#20BD5C] rounded-lg transition-colors duration-300 w-full md:w-auto justify-center"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span className="font-semibold">WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* Eligibility Requirements Section */}
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
              className="text-3xl font-bold text-center text-white mb-12"
            >
              Eligibility Requirements
            </motion.h2>
            <div className="space-y-6">
              <div className="bg-zinc-800/50 p-6 rounded-lg border border-green-500/10">
                <h3 className="text-xl font-semibold text-green-400 mb-2">Minimum Partners</h3>
                <p className="text-gray-300">The LLP must have at least two partners for its conversion as a Private Limited Company.</p>
              </div>
              <div className="bg-zinc-800/50 p-6 rounded-lg border border-green-500/10">
                <h3 className="text-xl font-semibold text-green-400 mb-2">Partner Agreement</h3>
                <p className="text-gray-300">All Partners must agree to the conversion from LLP to Company.</p>
              </div>
              <div className="bg-zinc-800/50 p-6 rounded-lg border border-green-500/10">
                <h3 className="text-xl font-semibold text-green-400 mb-2">Statutory Compliance</h3>
                <p className="text-gray-300">The LLP must have filed all its statutory returns and LLP agreement.</p>
              </div>
              <div className="bg-zinc-800/50 p-6 rounded-lg border border-green-500/10">
                <h3 className="text-xl font-semibold text-green-400 mb-2">Name Continuation</h3>
                <p className="text-gray-300">The exact name of the LLP shall continue, and the word "LLP" shall be substituted by "Private Limited." No change of name is permitted.</p>
              </div>
              <div className="bg-zinc-800/50 p-6 rounded-lg border border-green-500/10">
                <h3 className="text-xl font-semibold text-green-400 mb-2">Capital Conversion</h3>
                <p className="text-gray-300">The Contribution in the LLP shall become the Capital for the company, and all partners of the LLP will become shareholders in the company.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Step-wise Process Section */}
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
              className="text-3xl font-bold text-center text-white mb-12"
            >
              Step-Wise Process To Convert an LLP into a Company
            </motion.h2>
            <div className="space-y-8">
              <div className="bg-zinc-800/50 p-8 rounded-lg border border-green-500/10">
                <h3 className="text-xl font-semibold text-green-400 mb-3">Step 1: Consent of all Partners of the LLP</h3>
                <p className="text-gray-300">The process starts with a meeting of Partners to secure approval of all partners to the proposed conversion of LLP into a Private Limited Company according to section 366 of the Companies Act, 2013. In the partners meeting, two partners need to be authorised to sign and execute all papers to convert LLP into a company.</p>
              </div>

              <div className="bg-zinc-800/50 p-8 rounded-lg border border-green-500/10">
                <h3 className="text-xl font-semibold text-green-400 mb-3">Step 2: Newspaper Publication</h3>
                <p className="text-gray-300">The intent to convert from an LLP to a company needs to be published in two newspapers, having circulation in the district, one in vernacular language and the other in an English daily. The public announcement in the newspaper must be made 21 clear days from the filing of URC-1.</p>
              </div>

              <div className="bg-zinc-800/50 p-8 rounded-lg border border-green-500/10">
                <h3 className="text-xl font-semibold text-green-400 mb-3">Step 3: NOC From the ROC and Creditors</h3>
                <p className="text-gray-300">The NOC from the ROC, where the LLP Registered is required, and the Creditors must give their unconditional No Objection to the conversion of the LLP. If there is no Liability in the LLP, then a statement signed from the partners that there is no liability would be required.</p>
              </div>

              <div className="bg-zinc-800/50 p-8 rounded-lg border border-green-500/10">
                <h3 className="text-xl font-semibold text-green-400 mb-3">Step 4: Apply for Name Reservation of Company in RUN</h3>
                <p className="text-gray-300">RUN is an online form in which an application for the name reservation is filed to the ROC. No change in the name of the LLP is allowed at this stage; the words LLP shall be substituted with "Private Limited."</p>
              </div>

              <div className="bg-zinc-800/50 p-8 rounded-lg border border-green-500/10">
                <h3 className="text-xl font-semibold text-green-400 mb-3">Step 5: Efile URC-1, MOA, AOA, DIR-2 Forms and Spice Plus</h3>
                <p className="text-gray-300">Finally, within 30 Days of the name reservation of the LLP, the application for conversion of the LLP into a company shall be filed in URC-1 along with the Spice Plus form, e-MOA, E-AOA and other documents. After the approval of the forms, the ROC issues a new certificate of incorporation in the company's name.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-zinc-900/30">
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
              Benefits of Converting to Private Limited
            </motion.h2>
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
                className="bg-zinc-800/50 p-6 rounded-lg border border-green-500/10"
              >
                {benefit.icon}
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <motion.h2
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-3xl font-bold text-center text-white mb-12"
            >
              Frequently Asked Questions
            </motion.h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-white">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-400">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>
    </main>
  );
}