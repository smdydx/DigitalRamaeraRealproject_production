import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Shield, Server, Globe, Database, Settings, Users, Layers, BarChart2, Cloud, Lock, Smartphone, Monitor } from "lucide-react";
import { Link } from "react-router-dom";

const SaaS = () => {
  const categories = [
    {
      title: "Business Management",
      description: "Comprehensive solutions to streamline your business operations",
      items: [
        {
          name: "CRM Software",
          description: "Complete customer relationship management solution to grow your sales and improve customer satisfaction",
          longDescription: "Our CRM software helps businesses manage customer interactions, track sales opportunities, and automate marketing campaigns. With advanced analytics and reporting, you'll gain valuable insights to drive growth.",
          image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
          features: ["Lead Management", "Sales Pipeline", "Customer Support", "Analytics Dashboard", "Marketing Automation", "Mobile Access"],
          icon: <Users className="w-6 h-6 text-blue-500" />
        },
        {
          name: "ERP Software",
          description: "Enterprise resource planning system to integrate all your business processes",
          longDescription: "Our ERP solution connects finance, HR, manufacturing, supply chain, services, procurement, and more. Get real-time visibility across your entire organization with our modular, scalable platform.",
          image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg",
          features: ["Finance Management", "Supply Chain", "HR Management", "Project Planning", "Inventory Control", "Business Intelligence"],
          icon: <Layers className="w-6 h-6 text-blue-500" />
        }
      ]
    },
    {
      title: "Industry Specific Solutions",
      description: "Tailored software designed for your specific industry needs",
      items: [
        {
          name: "School Management ERP",
          description: "Complete education institution management system for modern schools",
          longDescription: "From student admissions to alumni management, our school ERP handles all academic and administrative processes. Automate attendance, examinations, fee collection, and communication with parents.",
          image: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg",
          features: ["Student Management", "Attendance System", "Fee Management", "Academic Planning", "Library Management", "Parent Portal"],
          icon: <BarChart2 className="w-6 h-6 text-blue-500" />
        },
        {
          name: "Hospital Management ERP",
          description: "Comprehensive healthcare facility management system",
          longDescription: "Streamline patient care, medical records, appointments, billing, and inventory management. Our HIPAA-compliant solution improves efficiency and patient outcomes while reducing administrative burdens.",
          image: "https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg",
          features: ["Patient Records", "Appointment System", "Billing & Insurance", "Pharmacy Management", "Lab Integration", "Staff Scheduling"],
          icon: <Shield className="w-6 h-6 text-blue-500" />
        },
        {
          name: "Hotel & Property Management",
          description: "Complete hospitality management solution for hotels and resorts",
          longDescription: "Manage reservations, housekeeping, front desk operations, and revenue all from one platform. Our solution integrates with OTAs, payment gateways, and restaurant POS systems for seamless operations.",
          image: "https://images.pexels.com/photos/1838554/pexels-photo-1838554.jpeg",
          features: ["Booking System", "Room Management", "Guest Services", "Revenue Management", "Housekeeping", "Multi-property Support"],
          icon: <Database className="w-6 h-6 text-blue-500" />
        }
      ]
    },
    {
      title: "Retail & Service Industry",
      description: "Specialized solutions for retail and service businesses",
      items: [
        {
          name: "POS Software",
          description: "Advanced point of sale system for retail businesses of all sizes",
          longDescription: "Our retail POS system handles sales, inventory, customer management, and reporting. With support for multiple payment methods, barcode scanning, and eCommerce integration, it's the complete solution for modern retailers.",
          image: "https://images.pexels.com/photos/1602726/pexels-photo-1602726.jpeg",
          features: ["Sales Management", "Inventory Control", "Customer Database", "Reports & Analytics", "Multi-store Support", "Mobile POS"],
          icon: <Monitor className="w-6 h-6 text-blue-500" />
        },
        {
          name: "Restaurant POS",
          description: "Comprehensive restaurant management and billing system",
          longDescription: "From quick-service to fine dining, our restaurant POS streamlines operations with table management, kitchen display, online ordering, and inventory control. Reduce wait times and improve customer experience.",
          image: "https://images.pexels.com/photos/687824/pexels-photo-687824.jpeg",
          features: ["Order Management", "Kitchen Display", "Table Management", "Menu Control", "Staff Performance", "Customer Loyalty"],
          icon: <Settings className="w-6 h-6 text-blue-500" />
        },
        {
          name: "Salon & Spa Management",
          description: "Complete solution for beauty and wellness businesses",
          longDescription: "Manage appointments, staff, services, and retail products with our specialized salon software. Clients can book online, staff can track commissions, and owners get real-time business insights.",
          image: "https://images.pexels.com/photos/3992874/pexels-photo-3992874.jpeg",
          features: ["Appointment Booking", "Staff Management", "Service Menu", "Customer Database", "Marketing Tools", "Mobile App"],
          icon: <Smartphone className="w-6 h-6 text-blue-500" />
        }
      ]
    }
  ];

  const features = [
    {
      title: "Cloud-Based Solutions",
      description: "Access your data anytime, anywhere with our secure cloud platform",
      icon: <Cloud className="w-8 h-8 text-blue-500" />,
      benefits: [
        "Automatic updates and maintenance",
        "Scalable to your growing needs",
        "Disaster recovery built-in",
        "Collaboration across locations"
      ]
    },
    {
      title: "On-Premise Installation",
      description: "For businesses requiring local hosting and data control",
      icon: <Server className="w-8 h-8 text-blue-500" />,
      benefits: [
        "Complete data control",
        "Custom security requirements",
        "Integration with existing systems",
        "One-time license options"
      ]
    },
    {
      title: "Enterprise Security",
      description: "Protect your sensitive business data with our robust security",
      icon: <Lock className="w-8 h-8 text-blue-500" />,
      benefits: [
        "Role-based access control",
        "Data encryption at rest and transit",
        "Regular security audits",
        "Compliance with industry standards"
      ]
    }
  ];

  const benefits = [
    {
      title: "Increased Efficiency",
      description: "Automate repetitive tasks and streamline workflows",
      stat: "40-60%"
    },
    {
      title: "Cost Reduction",
      description: "Lower operational costs through automation",
      stat: "30-50%"
    },
    {
      title: "Improved Accuracy",
      description: "Minimize human errors in data handling",
      stat: "90%"
    },
    {
      title: "Better Decisions",
      description: "Real-time analytics for informed decision making",
      stat: "2.5x"
    }
  ];

  const industries = [
    "Healthcare", "Education", "Retail", "Hospitality", 
    "Manufacturing", "Logistics", "Finance", "Professional Services"
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
            SaaS & Enterprise Software Solutions
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg mb-8">
            Transform your business with our comprehensive suite of cloud-based and installable software solutions. 
            From CRM to industry-specific ERPs, we deliver scalable, customizable applications tailored to your needs.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
              Schedule Demo <ArrowRight className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-gray-600 hover:bg-gray-800/50">
              View Case Studies
            </Button>
          </div>
        </motion.div>

        {/* Key Benefits Section */}
        <motion.section variants={fadeIn("up", "tween", 0.3, 1)} className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Our Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-zinc-900/50 rounded-xl border border-blue-500/10 p-6 text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-3">
                  {benefit.stat}
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Deployment Options */}
        <motion.section variants={fadeIn("up", "tween", 0.4, 1)} className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Deployment Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-zinc-900/50 rounded-xl border border-blue-500/10 p-6 flex items-start">
                <div className="mr-4">{feature.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 mb-4">{feature.description}</p>
                  <ul className="list-disc list-inside text-gray-400">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </motion.section>
        {/* Categories Section */}
        <motion.section variants={fadeIn("up", "tween", 0.5, 1)} className="mb-20"> 
          <h2 className="text-3xl font-bold mb-12 text-center">Explore Our Categories</h2>
          {categories.map((category, index) => (
            <div key={index} className="mb-16">
              <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
              <p className="text-gray-400 mb-8">{category.description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, i) => (
                  <div key={i} className="bg-zinc-900/50 rounded-xl border border-blue-500/10 p-6">
                    <div className="flex items-center mb-4">
                      {item.icon}
                      <h4 className="text-xl font-bold ml-4">{item.name}</h4>
                    </div>
                    <p className="text-gray-400 mb-4">{item.description}</p>
                    <Link to={`/services/saas/${item.name.toLowerCase().replace(/ /g, "-")}`}>
                      <Button variant="link" className="text-blue-500 hover:underline">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.section>
        {/* Industries Section */}
        <motion.section variants={fadeIn("up", "tween", 0.6, 1)} className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Industries We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-zinc-900/50 rounded-xl border border-blue-500/10 p-6 text-center">
                <h3 className="text-xl font-bold mb-4">{industry}</h3>
                <p className="text-gray-400">Tailored solutions for {industry.toLowerCase()} industry.</p>
              </div>
            ))}
          </div>
        </motion.section>
        {/* Call to Action Section */}
        <motion.section variants={fadeIn("up", "tween", 0.7, 1)} className="text-center mb-20">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-gray-400 mb-8">
            Contact us today to learn how our SaaS solutions can help you achieve your business goals.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
            Get Started <ArrowRight className="ml-2" />
          </Button>
        </motion.section>
      </motion.div>
    </main>
  );
}
export default SaaS;