
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Smartphone, Scale, Globe, Award, CheckCircle2, Timer, Users2 } from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      title: "Blockchain Development",
      path: "/services/blockchain",
      description: "End-to-end blockchain solutions from smart contracts to decentralized applications",
      icon: <Code className="w-8 h-8" />,
      color: "from-green-400 to-emerald-600",
      features: [
        "Smart Contract Development",
        "Token Development",
        "NFT Marketplace",
        "DeFi Solutions",
        "Crypto Exchange",
        "Blockchain Consulting",
        "Node Setup & Maintenance",
        "Metaverse Development"
      ]
    },
    {
      title: "IT Services",
      path: "/services/it-services",
      description: "Comprehensive IT solutions for modern business needs",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-blue-400 to-blue-600",
      features: [
        "SaaS & Installable Solutions",
        "Web Development & CMS",
        "Mobile Applications",
        "Cloud Services",
        "Custom Software Development",
        "Digital Marketing",
        "UI/UX Design",
        "Technical Support"
      ]
    },
    {
      title: "Legal & Compliance",
      path: "/services/legal/compliance",
      description: "Complete legal and compliance services for businesses",
      icon: <Scale className="w-8 h-8" />,
      color: "from-yellow-400 to-yellow-600",
      features: [
        "Company Registration",
        "Legal Documentation",
        "Compliance Management",
        "Corporate Advisory",
        "FEMA & RBI Compliance",
        "Intellectual Property",
        "Annual Filings",
        "Legal Consultation"
      ]
    }
  ];

  const whyChooseUs = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Reach",
      description: "Serving clients across India and international markets with comprehensive solutions"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Industry Expertise",
      description: "Team of certified professionals with years of experience in their respective domains"
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "Quality Assurance",
      description: "Rigorous quality checks and compliance with international standards"
    },
    {
      icon: <Timer className="w-6 h-6" />,
      title: "Quick Turnaround",
      description: "Fast and efficient service delivery without compromising on quality"
    }
  ];

  const faqs = [
    {
      question: "How do you ensure service quality across different locations?",
      answer: "We maintain strict quality standards through our centralized quality assurance team and regular audits. Our processes are standardized across all locations to ensure consistent service delivery."
    },
    {
      question: "What makes your services stand out from competitors?",
      answer: "Our unique combination of technology and legal expertise, along with our proven track record of successful projects and satisfied clients across India and internationally, sets us apart."
    },
    {
      question: "How do you handle international clients?",
      answer: "We have dedicated teams for international clients with expertise in global compliance and regulations. We provide 24/7 support and accommodate different time zones."
    },
    {
      question: "What is your approach to client confidentiality?",
      answer: "We maintain strict confidentiality protocols and use secure systems for all client data. Our teams sign NDAs, and we follow international data protection standards."
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black pt-24">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video/herosection.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.h1
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 mb-6"
            >
              Empowering Businesses Globally
            </motion.h1>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-xl text-gray-300 mb-8"
            >
              From blockchain innovation to legal compliance, we provide end-to-end solutions for businesses across India and beyond
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">Our Global Mission</h2>
            <p className="text-gray-400">
              We aim to revolutionize business operations across India and internationally by providing cutting-edge technology solutions and comprehensive legal services. Our mission is to empower organizations with the tools and support they need to thrive in the digital age while ensuring complete regulatory compliance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-8"
          >
            {mainServices.map((service, index) => (
              <motion.div
                key={service.title}
                variants={fadeIn("up", "spring", index * 0.1, 0.75)}
                className="relative group"
              >
                <Link to={service.path}>
                  <div className="bg-zinc-900/50 rounded-2xl p-8 border border-green-500/10 hover:border-green-500/30 transition-all duration-300">
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${service.color}`}>
                        {service.icon}
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-white mb-2">{service.title}</h2>
                        <p className="text-gray-400">{service.description}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {service.features.map((feature, idx) => (
                        <div 
                          key={idx}
                          className="p-4 bg-black/20 rounded-lg border border-green-500/5 group-hover:border-green-500/20 transition-all duration-300"
                        >
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button 
                      className="mt-6 bg-gradient-to-r from-green-500 to-emerald-600"
                    >
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-zinc-900/50">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeIn("up", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Why Choose Our Services
          </motion.h2>
          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", "spring", index * 0.1, 0.75)}
                className="bg-zinc-800/50 p-6 rounded-xl border border-green-500/10 hover:border-green-500/30 transition-all duration-300"
              >
                <div className="text-green-400 mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            variants={fadeIn("up", "tween", 0.2, 1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-6"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", "tween", index * 0.1, 0.75)}
                className="bg-zinc-800/50 p-6 rounded-xl border border-green-500/10"
              >
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Services;
