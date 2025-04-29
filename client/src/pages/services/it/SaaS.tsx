
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Shield, Server, Globe, Database, Settings, Users } from "lucide-react";
import { Link } from "react-router-dom";

const SaaS = () => {
  const categories = [
    {
      title: "Business Management",
      items: [
        {
          name: "CRM Software",
          description: "Complete customer relationship management solution",
          image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
          features: ["Lead Management", "Sales Pipeline", "Customer Support", "Analytics"]
        },
        {
          name: "ERP Software",
          description: "Enterprise resource planning system",
          image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg",
          features: ["Finance Management", "Supply Chain", "HR Management", "Project Planning"]
        }
      ]
    },
    {
      title: "Industry Specific",
      items: [
        {
          name: "School Management ERP",
          description: "Complete education institution management",
          image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg",
          features: ["Student Management", "Attendance System", "Fee Management", "Academic Planning"]
        },
        {
          name: "Hospital Management ERP",
          description: "Healthcare facility management system",
          image: "https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg",
          features: ["Patient Records", "Appointment System", "Billing", "Pharmacy Management"]
        },
        {
          name: "Hotel & Property Management",
          description: "Complete hospitality management solution",
          image: "https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg",
          features: ["Booking System", "Room Management", "Guest Services", "Revenue Management"]
        }
      ]
    },
    {
      title: "Retail & Services",
      items: [
        {
          name: "POS Software",
          description: "Point of sale system for retail businesses",
          image: "https://images.pexels.com/photos/1602726/pexels-photo-1602726.jpeg",
          features: ["Sales Management", "Inventory Control", "Customer Database", "Reports"]
        },
        {
          name: "Restaurant POS",
          description: "Restaurant management and billing system",
          image: "https://images.pexels.com/photos/687824/pexels-photo-687824.jpeg",
          features: ["Order Management", "Kitchen Display", "Table Management", "Menu Control"]
        },
        {
          name: "Salon Management",
          description: "Complete salon and spa management",
          image: "https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg",
          features: ["Appointment Booking", "Staff Management", "Service Menu", "Customer Database"]
        }
      ]
    }
  ];

  return (
    <main className="relative min-h-screen bg-gradient-to-b from-zinc-900 to-black overflow-hidden pt-24">
      {/* Background Elements */}
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
            SaaS & Installable Solutions
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg mb-8">
            Transform your business with our comprehensive suite of software solutions. 
            From CRM to industry-specific ERPs, we deliver scalable and customizable applications.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600">
              Schedule Demo <ArrowRight className="ml-2" />
            </Button>
          </div>
        </motion.div>

        {/* Categories */}
        {categories.map((category, index) => (
          <motion.section
            key={index}
            variants={fadeIn("up", "tween", 0.3 + index * 0.1, 1)}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold mb-10 text-center">{category.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="bg-zinc-900/50 rounded-xl border border-blue-500/10 hover:border-blue-500/30 transition-all overflow-hidden group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                    <p className="text-gray-400 mb-4">{item.description}</p>
                    <ul className="space-y-2">
                      {item.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle2 className="w-4 h-4 text-primary mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        ))}

        {/* CTA Section */}
        <motion.div
          variants={fadeIn("up", "tween", 0.6, 1)}
          className="text-center bg-zinc-900/50 rounded-xl border border-blue-500/10 p-12 mb-20"
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Get in touch with us to discuss your requirements and let us help you choose the perfect solution for your business needs.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
              Contact Us Today <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
};

export default SaaS;
