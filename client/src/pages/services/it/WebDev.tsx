
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Globe, ShoppingCart, Newspaper, Tag, Heart, Briefcase, Calendar } from "lucide-react";

const WebDev = () => {
  const services = [
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: "Website Builder Platform",
      description: "Create stunning websites with our drag-and-drop builder",
      image: "/images/services/website-builder.jpg",
      features: [
        "Drag & Drop Interface",
        "Responsive Templates",
        "Custom Domain Integration",
        "SEO Optimization Tools"
      ]
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-primary" />,
      title: "eCommerce Store Platform",
      description: "Launch your online store with multi-vendor support",
      image: "/images/services/ecommerce.jpg",
      features: [
        "Multi-Vendor Support",
        "Payment Gateway Integration",
        "Inventory Management",
        "Order Tracking System"
      ]
    },
    {
      icon: <Newspaper className="w-8 h-8 text-primary" />,
      title: "Blog & News Publishing CMS",
      description: "Powerful content management system for publishers",
      image: "/images/services/blog-cms.jpg",
      features: [
        "Rich Text Editor",
        "Content Scheduling",
        "Category Management",
        "User Comments System"
      ]
    },
    {
      icon: <Tag className="w-8 h-8 text-primary" />,
      title: "Classified Ads Portal",
      description: "Build your own classified marketplace",
      image: "/images/services/classified.jpg",
      features: [
        "Ad Listing Management",
        "Category Navigation",
        "Search & Filters",
        "User Dashboard"
      ]
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Matrimony Portal",
      description: "Complete matrimonial matching platform",
      image: "/images/services/matrimony.jpg",
      features: [
        "Profile Management",
        "Match Recommendations",
        "Chat Integration",
        "Privacy Controls"
      ]
    },
    {
      icon: <Briefcase className="w-8 h-8 text-primary" />,
      title: "Job Recruitment Portal",
      description: "Connect employers with job seekers",
      image: "/images/services/job-portal.jpg",
      features: [
        "Job Posting System",
        "Resume Database",
        "Application Tracking",
        "Company Profiles"
      ]
    },
    {
      icon: <Calendar className="w-8 h-8 text-primary" />,
      title: "Event Management Portal",
      description: "Complete event planning and booking system",
      image: "/images/services/event-portal.jpg",
      features: [
        "Event Creation",
        "Ticket Management",
        "Calendar Integration",
        "Attendee Management"
      ]
    }
  ];

  return (
    <div className="bg-background py-20">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="container mx-auto px-4"
      >
        {/* Hero Section */}
        <motion.div variants={fadeIn("up", "tween", 0.2, 1)} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Web Development & CMS Solutions</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Transform your business with our cutting-edge web development and content management solutions.
            We build scalable, secure, and user-friendly platforms tailored to your needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", "tween", 0.2 * index, 1)}
              className="bg-card rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-colors"
            >
              <div className="h-48 relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  {service.icon}
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default WebDev;
