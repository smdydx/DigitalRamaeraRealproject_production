
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, Rocket, Target, BarChart, Mail, Users, Search, MessageSquare } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Marketing = () => {
  const services = [
    {
      icon: <Search className="w-8 h-8 text-primary" />,
      title: "Search Engine Optimization (SEO)",
      features: [
        "Technical SEO Audit",
        "Keyword Research & Strategy",
        "On-Page SEO Optimization",
        "Link Building Services"
      ]
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Social Media Marketing",
      features: [
        "Social Media Strategy",
        "Content Creation & Curation",
        "Community Management",
        "Paid Social Campaigns"
      ]
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-primary" />,
      title: "Content Marketing",
      features: [
        "Content Strategy Development",
        "Blog Writing & Management",
        "Infographic Creation",
        "Video Content Production"
      ]
    },
    {
      icon: <Mail className="w-8 h-8 text-primary" />,
      title: "Email Marketing",
      features: [
        "Email Campaign Strategy",
        "Newsletter Management",
        "Automation Setup",
        "Performance Analytics"
      ]
    },
    {
      icon: <BarChart className="w-8 h-8 text-primary" />,
      title: "Analytics & Reporting",
      features: [
        "Performance Tracking",
        "ROI Analysis",
        "Competitor Analysis",
        "Monthly Reports"
      ]
    },
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: "PPC Advertising",
      features: [
        "Google Ads Management",
        "Display Advertising",
        "Remarketing Campaigns",
        "Ad Performance Optimization"
      ]
    }
  ];

  const faqs = [
    {
      question: "What sets your digital marketing services apart?",
      answer: "We combine data-driven strategies with creative excellence, offering customized solutions that align with your business goals. Our team stays updated with the latest digital trends and uses advanced analytics for optimal results."
    },
    {
      question: "How long does it take to see results from SEO?",
      answer: "SEO is a long-term strategy that typically shows significant results within 4-6 months. However, this timeline can vary based on factors like competition, current website status, and target keywords."
    },
    {
      question: "Do you offer customized social media packages?",
      answer: "Yes, we create tailored social media packages based on your business size, goals, and target audience. Each package includes a mix of content creation, community management, and performance tracking."
    },
    {
      question: "How do you measure the success of digital marketing campaigns?",
      answer: "We track various KPIs including website traffic, conversion rates, engagement metrics, ROI, and more. Monthly reports provide detailed insights into campaign performance and areas for optimization."
    },
    {
      question: "What platforms do you specialize in for social media marketing?",
      answer: "We specialize in all major platforms including LinkedIn, Instagram, Facebook, Twitter, and TikTok. The platform selection is based on your target audience and business objectives."
    }
  ];

  return (
    <main className="relative min-h-screen bg-zinc-900">
      <div className="container mx-auto px-4 pt-24 sm:pt-28 md:pt-32 pb-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-20"
        >
          {/* Hero Section */}
          <motion.div variants={fadeIn("up", "tween", 0.2, 1)} className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Digital Marketing Solutions
            </h1>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              Transform your online presence with our comprehensive digital marketing services. Drive growth, engage customers, and achieve measurable results.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div variants={fadeIn("up", "tween", 0.3, 1)} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-6 rounded-2xl border border-purple-500/20 bg-zinc-900/50 backdrop-blur-sm hover:border-purple-500/40 transition-all duration-300">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-400">
                      <Check className="h-5 w-5 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          {/* Process Section */}
          <motion.div variants={fadeIn("up", "tween", 0.4, 1)} className="text-center space-y-12">
            <h2 className="text-3xl font-bold">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Analysis", desc: "In-depth market research" },
                { step: "2", title: "Strategy", desc: "Custom plan development" },
                { step: "3", title: "Execute", desc: "Implementation & optimization" },
                { step: "4", title: "Report", desc: "Track & measure results" }
              ].map((item) => (
                <div key={item.step} className="relative group">
                  <div className="p-6 rounded-2xl border border-purple-500/20 bg-zinc-900/50 backdrop-blur-sm group-hover:border-purple-500/40 transition-all duration-300">
                    <div className="text-4xl font-bold text-primary mb-4">{item.step}</div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div variants={fadeIn("up", "tween", 0.5, 1)} className="space-y-8">
            <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-purple-500/20 rounded-lg px-6">
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-gray-400">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div variants={fadeIn("up", "tween", 0.6, 1)} className="text-center space-y-6">
            <h2 className="text-3xl font-bold">Ready to Grow Your Digital Presence?</h2>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link to="/contact">Get Started</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
};

export default Marketing;
