
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { Smartphone, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Mobile = () => {
  const services = [
    {
      title: "Grocery Delivery App",
      description: "User-friendly grocery shopping and delivery platform with real-time tracking",
      image: "/images/services/grocery-app.jpg",
      features: ["Multiple Store Integration", "Real-time Order Tracking", "Secure Payment Gateway", "Smart Cart Management"]
    },
    {
      title: "Medicine Delivery App",
      description: "HIPAA-compliant healthcare and medicine delivery solution",
      image: "/images/services/medicine-app.jpg",
      features: ["Prescription Upload", "Medicine Reminders", "Pharmacy Network", "Secure Health Data"]
    },
    {
      title: "Taxi Booking App",
      description: "Advanced ride-hailing platform with driver-passenger matching",
      image: "/images/services/taxi-app.jpg",
      features: ["Real-time Tracking", "Fare Calculator", "Driver Verification", "Route Optimization"]
    },
    {
      title: "Food Delivery App",
      description: "Complete restaurant marketplace and delivery management system",
      image: "/images/services/food-app.jpg",
      features: ["Restaurant Dashboard", "Order Management", "Live Tracking", "Rating System"]
    },
    {
      title: "Online Learning App",
      description: "Interactive EdTech platform for seamless learning experience",
      image: "/images/services/edtech-app.jpg",
      features: ["Video Lectures", "Progress Tracking", "Quiz System", "Live Sessions"]
    },
    {
      title: "Dating & Social App",
      description: "Feature-rich social connection platform with advanced matching",
      image: "/images/services/dating-app.jpg",
      features: ["Smart Matching", "Real-time Chat", "Profile Verification", "Privacy Controls"]
    },
    {
      title: "Fitness Tracking App",
      description: "Comprehensive health and fitness monitoring solution",
      image: "/images/services/fitness-app.jpg",
      features: ["Workout Plans", "Progress Analytics", "Diet Tracking", "Community Features"]
    },
    {
      title: "Laundry Service App",
      description: "On-demand laundry service booking and management platform",
      image: "/images/services/laundry-app.jpg",
      features: ["Service Scheduling", "Price Calculator", "Status Updates", "Delivery Tracking"]
    },
    {
      title: "Property Rental App",
      description: "Advanced real estate listing and rental management system",
      image: "/images/services/property-app.jpg",
      features: ["Property Listings", "Virtual Tours", "Booking System", "Payment Integration"]
    }
  ];

  const faqs = [
    {
      question: "What platforms do you develop for?",
      answer: "We develop native apps for iOS and Android, as well as cross-platform solutions using React Native and Flutter."
    },
    {
      question: "How long does it take to develop a mobile app?",
      answer: "Development time varies based on complexity - simple apps take 2-3 months, while complex applications may take 4-6 months."
    },
    {
      question: "Do you provide app maintenance services?",
      answer: "Yes, we offer comprehensive maintenance packages including updates, bug fixes, and performance optimization."
    },
    {
      question: "What about app store submission?",
      answer: "We handle the complete app store submission process for both Apple App Store and Google Play Store."
    },
    {
      question: "Can you integrate third-party services?",
      answer: "Yes, we can integrate various third-party APIs, payment gateways, analytics, and other services based on your requirements."
    }
  ];

  return (
    <div className="bg-background py-20">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        {/* Hero Section */}
        <motion.div variants={fadeIn("up", "tween", 0.2, 1)} className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
            <Smartphone className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-6">
            Mobile App Development
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg mb-8">
            Transform your business with cutting-edge mobile applications. We create robust, scalable, and user-friendly 
            apps that deliver exceptional user experiences across all platforms.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
              Start Your Project <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </motion.div>

        {/* Services Grid */}
        <motion.div variants={fadeIn("up", "tween", 0.3, 1)} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="bg-zinc-900/50 rounded-xl border border-blue-500/10 hover:border-blue-500/30 transition-all overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = '/images/services/app-placeholder.jpg';
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </motion.div>

        {/* FAQ Section */}
        <motion.div variants={fadeIn("up", "tween", 0.4, 1)} className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-zinc-900/50 rounded-lg p-6 border border-blue-500/10">
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Mobile;
