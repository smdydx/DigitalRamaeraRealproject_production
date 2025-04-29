
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Cloud, Database, Shield, Mail, Network, Monitor } from "lucide-react";

const CloudServices = () => {
  const services = [
    {
      icon: <Cloud className="w-8 h-8 text-primary" />,
      title: "Web Hosting Services",
      description: "Reliable and scalable web hosting solutions for your applications",
      image: "/images/services/web-hosting.jpg",
      features: ["High Uptime", "SSD Storage", "Auto Scaling", "24/7 Support"]
    },
    {
      icon: <Database className="w-8 h-8 text-primary" />,
      title: "Cloud Storage Services",
      description: "Secure and redundant cloud storage for your data",
      image: "/images/services/cloud-storage.jpg",
      features: ["Data Encryption", "Automated Backups", "File Versioning", "Access Control"]
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "VPN Services",
      description: "Secure browsing solutions for privacy and security",
      image: "/images/services/vpn-service.jpg",
      features: ["End-to-end Encryption", "Multiple Locations", "No-logs Policy", "High Speed"]
    },
    {
      icon: <Mail className="w-8 h-8 text-primary" />,
      title: "Email Hosting Services",
      description: "Professional email hosting with advanced features",
      image: "/images/services/email-hosting.jpg",
      features: ["Custom Domain", "Spam Protection", "Large Storage", "Mobile Access"]
    },
    {
      icon: <Network className="w-8 h-8 text-primary" />,
      title: "Blockchain Node Hosting",
      description: "Dedicated node hosting for blockchain networks",
      image: "/images/services/blockchain-hosting.jpg",
      features: ["High Availability", "Performance Monitoring", "Security Measures", "Technical Support"]
    },
    {
      icon: <Monitor className="w-8 h-8 text-primary" />,
      title: "Remote Desktop Services",
      description: "Secure and reliable remote desktop solutions",
      image: "/images/services/remote-desktop.jpg",
      features: ["High Performance", "Multi-device Access", "Data Security", "Custom Configuration"]
    }
  ];

  const faqs = [
    {
      question: "What type of hosting services do you provide?",
      answer: "We offer various hosting solutions including shared hosting, VPS, dedicated servers, and cloud hosting with features like SSD storage, daily backups, and CDN integration."
    },
    {
      question: "How secure are your cloud storage services?",
      answer: "Our cloud storage implements military-grade encryption, two-factor authentication, and regular security audits to ensure your data remains protected."
    },
    {
      question: "What is the uptime guarantee for your services?",
      answer: "We maintain a 99.9% uptime guarantee for all our cloud services, backed by our service level agreement (SLA)."
    },
    {
      question: "Do you provide technical support?",
      answer: "Yes, we offer 24/7 technical support through multiple channels including live chat, email, and phone support."
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
        <motion.div variants={fadeIn("up", "tween", 0.2, 1)} className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-6">
            Cloud & SaaS Services
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Enterprise-grade cloud solutions to power your digital transformation with security, scalability, and reliability.
          </p>
        </motion.div>

        <motion.div variants={fadeIn("up", "tween", 0.3, 1)} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-zinc-900/50 rounded-xl border border-blue-500/10 hover:border-blue-500/30 transition-all overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = '/images/services/cloud-storage.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  {service.icon}
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div variants={fadeIn("up", "tween", 0.4, 1)} className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-zinc-900/50 rounded-lg p-6 border border-blue-500/10">
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default CloudServices;
