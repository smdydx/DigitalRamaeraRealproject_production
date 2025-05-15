
"use client";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";

const CodeOfConductPage = () => {
  return (
    <div className="min-h-screen bg-zinc-900">
      {/* Hero Section */}
      <section className="py-16 bg-zinc-900 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-green-400 text-center mb-8">
            Code of Conduct & Policies
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto text-center mb-12">
            Softbeem is committed to delivering professional, ethical, and legally compliant services. Our Code of Conduct outlines the values and principles we uphold while working with our clients, partners, and stakeholders.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 max-w-4xl mx-auto">
            {/* Policies */}
            <div className="space-y-8">
              {[
                {
                  title: "1. Professional Integrity",
                  content: "We work with a network of certified professionals, including Chartered Accountants, Company Secretaries, and Legal Advisors, who strictly follow industry ethics and standards. Our advice and documentation always align with Indian laws and corporate governance norms."
                },
                {
                  title: "2. Client Confidentiality",
                  content: "Your privacy is our priority. Softbeem ensures that all personal, financial, and business-related data is securely handled and never disclosed to unauthorized parties. We sign NDAs when necessary and follow strict data protection protocols."
                },
                {
                  title: "3. Transparency in Pricing & Process",
                  content: "We maintain full transparency in our pricing, processes, and timelines. All fees—including government charges and professional costs—are shared upfront. There are no hidden charges, and all transactions are documented clearly."
                },
                {
                  title: "4. Legal & Regulatory Compliance",
                  content: "Softbeem ensures full compliance with the Ministry of Corporate Affairs (MCA), Registrar of Companies (ROC), Goods and Services Tax (GST), Income Tax Department, and other applicable regulations. We also guide our clients to remain compliant post-registration."
                },
                {
                  title: "5. Zero Tolerance for Fraud",
                  content: "We do not engage in, encourage, or support any form of fraudulent activities. Submission of false information or forged documents will result in immediate service termination and may be reported to the relevant authorities."
                },
                {
                  title: "6. Platform Use Policy",
                  content: "Clients are expected to provide accurate and truthful information. Misuse of the platform—including fraudulent uploads or impersonation—will result in suspension or permanent deactivation of service access."
                },
                {
                  title: "7. Dispute Resolution",
                  content: "Softbeem prioritizes resolving disputes amicably. Clients can contact our support team for any grievances. If unresolved, disputes will be governed under Indian laws and resolved under the jurisdiction of the applicable courts."
                }
              ].map((policy, index) => (
                <div key={index} className="bg-zinc-800/50 p-6 rounded-lg border border-green-500/10">
                  <h3 className="text-xl font-semibold text-green-400 mb-3">{policy.title}</h3>
                  <p className="text-gray-300">{policy.content}</p>
                </div>
              ))}
            </div>

            {/* FAQ Section */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-green-400 mb-8 text-center">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {[
                  {
                    q: "Why does Softbeem have a Code of Conduct?",
                    a: "Our Code of Conduct ensures that we operate with integrity, transparency, and full compliance with legal standards. It helps maintain trust and protect the interests of our clients and partners."
                  },
                  {
                    q: "Is my personal and business information safe with Softbeem?",
                    a: "Absolutely. We follow strict confidentiality policies and data protection protocols. Your data is never shared without consent, except when required by law."
                  },
                  {
                    q: "What happens if someone submits fake documents?",
                    a: "We have zero tolerance for fraud. If fake or misleading documents are submitted, we will terminate the service immediately and may report the case to legal authorities."
                  },
                  {
                    q: "How can I report a policy violation or unethical behavior?",
                    a: "You can contact our support team via email or phone to report any misconduct or concerns regarding our conduct or that of our partners."
                  },
                  {
                    q: "What if there is a dispute with Softbeem's services?",
                    a: "We aim to resolve all disputes amicably. If needed, we follow legal dispute resolution as per Indian law under the jurisdiction of the appropriate courts."
                  }
                ].map((faq, index) => (
                  <div key={index} className="bg-zinc-800/50 p-6 rounded-lg border border-green-500/10">
                    <h4 className="text-lg font-semibold text-green-400 mb-2">Q: {faq.q}</h4>
                    <p className="text-gray-300">A: {faq.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CodeOfConductPage;
