
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Code, Smartphone, Cloud, ArrowRight, CheckCircle2, AppWindow, Blocks, Globe, BarChart2, Server } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ITServices = () => {
  const categories = [
    {
      title: "SaaS & Installables",
      icon: <AppWindow className="w-8 h-8 text-primary" />,
      products: [
        "CRM Software",
        "ERP Software",
        "HRM Software",
        "Inventory Management & Billing",
        "POS Software",
        "School Management ERP",
        "Hospital Management ERP",
        "Hotel Booking System",
        "Restaurant POS",
        "Accounting Software",
        "Salon Management",
        "Gym Management",
        "Law Firm Management",
        "Real Estate CRM",
        "Property Management"
      ]
    },
    {
      title: "Web Development & CMS",
      icon: <Globe className="w-8 h-8 text-blue-500" />,
      products: [
        "Website Builder Platform",
        "eCommerce Store Platform",
        "Blog/News CMS",
        "Classified Ads Portal",
        "Matrimony Portal",
        "Job Recruitment Portal",
        "Event Management Portal"
      ]
    },
    {
      title: "Mobile Applications",
      icon: <Smartphone className="w-8 h-8 text-purple-500" />,
      products: [
        "Grocery Delivery App",
        "Medicine Delivery App",
        "Taxi Booking App",
        "Food Delivery App",
        "Online Learning App",
        "Dating & Social App",
        "Fitness Tracking App",
        "Laundry Service App",
        "Property Rental App"
      ]
    },
    {
      title: "Cloud & SaaS Services",
      icon: <Cloud className="w-8 h-8 text-green-500" />,
      products: [
        "Web Hosting Services",
        "Cloud Storage Services",
        "VPN Services",
        "Email Hosting",
        "Blockchain Node Hosting",
        "Remote Desktop Services"
      ]
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Delivered" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "50+", label: "Expert Developers" },
    { number: "24/7", label: "Support Available" }
  ];

  const faqs = [
    {
      question: "What types of businesses can benefit from your SaaS solutions?",
      answer: "Our SaaS solutions are designed to cater to businesses of all sizes, from startups to enterprises, across various industries including retail, healthcare, education, and hospitality."
    },
    {
      question: "Do you provide customization for your software solutions?",
      answer: "Yes, we offer customization services for all our software solutions to meet your specific business requirements and workflows."
    },
    {
      question: "What kind of support do you provide after deployment?",
      answer: "We provide 24/7 technical support, regular maintenance updates, security patches, and training for your team to ensure smooth operations."
    },
    {
      question: "How secure are your cloud services?",
      answer: "Our cloud services implement industry-standard security protocols, regular backups, encryption, and comply with relevant data protection regulations."
    }
  ];

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-zinc-900 to-black overflow-hidden pt-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,_rgba(0,128,255,0.1)_0%,_transparent_50%)] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,_rgba(0,0,255,0.1)_0%,_transparent_50%)] pointer-events-none"></div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        {/* Hero Section */}
        <motion.div variants={fadeIn("up", "tween", 0.2, 1)} className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-6">
            Complete IT & Software Solutions
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg mb-8">
            Empowering businesses with cutting-edge technology solutions. From custom software development to cloud services, 
            we deliver scalable and reliable solutions tailored to your needs.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
            Schedule Consultation <ArrowRight className="ml-2" />
          </Button>
        </motion.div>

        {/* Stats Section */}
        <motion.div variants={fadeIn("up", "tween", 0.3, 1)} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-zinc-900/50 rounded-xl border border-blue-500/10">
              <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Categories Section */}
        <motion.div variants={fadeIn("up", "tween", 0.4, 1)} className="mb-20">
          {categories.map((category, index) => (
            <div key={index} className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                {category.icon}
                <h2 className="text-2xl font-bold text-white">{category.title}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {category.products.map((product, idx) => (
                  <div key={idx} className="p-4 bg-zinc-900/50 rounded-lg border border-blue-500/10 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                    <span className="text-gray-300">{product}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Why Choose Us */}
        <motion.div variants={fadeIn("up", "tween", 0.5, 1)} className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-zinc-900/50 rounded-xl border border-blue-500/10">
              <Server className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Cutting-edge Technology</h3>
              <p className="text-gray-400">We use the latest technologies and best practices to deliver robust solutions.</p>
            </div>
            <div className="p-6 bg-zinc-900/50 rounded-xl border border-blue-500/10">
              <Blocks className="w-10 h-10 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Scalable Solutions</h3>
              <p className="text-gray-400">Our solutions grow with your business, ensuring long-term sustainability.</p>
            </div>
            <div className="p-6 bg-zinc-900/50 rounded-xl border border-blue-500/10">
              <BarChart2 className="w-10 h-10 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Proven Results</h3>
              <p className="text-gray-400">Track record of delivering successful projects across industries.</p>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div variants={fadeIn("up", "tween", 0.6, 1)} className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-400">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA Section */}
        <motion.div variants={fadeIn("up", "tween", 0.7, 1)} className="text-center mb-20">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our IT solutions can help you achieve your business goals.
          </p>
          <Link to="/schedule">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
              Get Started <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default ITServices;
