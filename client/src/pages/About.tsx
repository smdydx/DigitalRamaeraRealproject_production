import { motion, LazyMotion, domAnimation } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { lazy, Suspense } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="min-h-screen bg-background about-page">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-8 md:pt-10 [margin-top:-6rem]">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        {/* Animated Background Gradient */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-orange-500/20"
        />

        {/* Floating Elements */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: -100, y: 0, opacity: 0 }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute w-12 h-12 rounded-full bg-primary/10 backdrop-blur-lg"
          />
        ))}

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center px-4 sm:px-6 md:px-8 mt-8 md:mt-0">
            {/* Text Content */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              className="space-y-8"
            >
              <motion.div
                variants={fadeIn("up", "tween", 0.2, 1)}
                className="space-y-4"
              >
                <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full">
                  <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                  <span className="text-sm font-medium text-primary">
                    About Softbeem
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-primary to-orange-500 text-transparent bg-clip-text">
                    Bridging Technology
                  </span>
                  <br />
                  with Legal Expertise
                </h1>
              </motion.div>

              <motion.p
                variants={fadeIn("up", "tween", 0.3, 1)}
                className="text-lg text-muted-foreground max-w-xl"
              >
                Softbeem is a premier provider of integrated technology and
                legal solutions, committed to empowering businesses in a
                digitally driven world.
              </motion.p>

              <motion.div
                variants={fadeIn("up", "tween", 0.4, 1)}
                className="flex flex-wrap gap-4"
              >
                <button className="px-6 py-3 bg-primary text-white rounded-lg flex items-center gap-2 hover:scale-105 transition-transform">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </button>
              </motion.div>
            </motion.div>

            {/* Image/Stats Section */}
            <motion.div
              variants={fadeIn("left", "tween", 0.5, 1)}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              className="relative mt-8 md:mt-0"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                  alt="Team Collaboration"
                  className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* Stats Cards */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute -bottom-6 md:-bottom-10 left-0 md:-left-10 bg-background/80 backdrop-blur-lg p-4 md:p-6 rounded-xl border border-primary/20 shadow-xl"
              >
                <div className="flex gap-8">
                  <div>
                    <h3 className="text-3xl font-bold text-primary">10+</h3>
                    <p className="text-sm text-muted-foreground">
                      Years Experience
                    </p>
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-primary">500+</h3>
                    <p className="text-sm text-muted-foreground">
                      Projects Completed
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      {/* Reduced padding */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          {/* Reduced margin bottom */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-10"
          >
            <motion.div variants={fadeIn("right", "tween", 0.3, 1)}>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Team Collaboration"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
            <motion.div
              variants={fadeIn("left", "tween", 0.3, 1)}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold mb-6">Company Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                Softbeem is a premier provider of integrated technology and
                legal solutions, committed to empowering businesses in a
                digitally driven world. Our firm specializes in delivering
                innovative, secure, and compliant services that address both
                technical and regulatory challenges.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary h-5 w-5" />
                  <span>Innovative Solutions</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary h-5 w-5" />
                  <span>Expert Team</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary h-5 w-5" />
                  <span>Global Reach</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary h-5 w-5" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Vision & Mission */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            // Reduced padding and margin
            className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-zinc-900 rounded-2xl p-6 mb-10"
          >
            <motion.div
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
              <p className="text-white/80">
                To deliver cutting-edge technology and legal services that drive
                business innovation, ensure regulatory compliance, and foster
                long-term growth for our clients.
              </p>
            </motion.div>
            <motion.div
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-primary">Our Vision</h3>
              <p className="text-white/80">
                To be a globally recognized leader in technology and legal
                consulting, known for delivering integrated, reliable, and
                transformative solutions.
              </p>
            </motion.div>
          </motion.div>

          {/* Core Values */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            <motion.h2
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-3xl font-bold text-center"
            >
              Our Core Values
            </motion.h2>
            <motion.div
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
            >
              {[
                {
                  title: "Innovation",
                  desc: "Embracing emerging technologies",
                },
                {
                  title: "Integrity",
                  desc: "Operating with honesty and transparency",
                },
                {
                  title: "Excellence",
                  desc: "Delivering high-quality solutions",
                },
                {
                  title: "Client-Centricity",
                  desc: "Prioritizing client success",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-zinc-900/50 p-6 rounded-lg hover:bg-zinc-900/70 transition-colors"
                >
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.desc}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/*  Showcase Section */}
      <section className="py-10 bg-zinc-900"> {/*Reduced padding */}
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            // Reduced margin bottom
            className="text-center mb-10"
          >
            <motion.h2
              variants={fadeIn("up", "tween", 0.2, 1)}
              className="text-3xl font-bold mb-4"
            >
              Our Team
            </motion.h2>
            <motion.p
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-muted-foreground"
            >
              Meet our dedicated experts committed to your success
            </motion.p>
          </motion.div>

          <motion.div
            variants={fadeIn("up", "tween", 0.4, 1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full max-w-4xl mx-auto"
          >
            <div className="overflow-hidden rounded-xl">
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {[
                  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                  "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                  "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
                ].map((url, index) => (
                  <div key={index} className="min-w-full">
                    <img
                      src={url}
                      alt={`IT Team ${index + 1}`}
                      className="w-full h-[400px] object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center gap-2 mt-4">
              {[0, 1, 2, 3].map((dot) => (
                <button
                  key={dot}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    currentSlide === dot ? "bg-primary" : "bg-zinc-600"
                  }`}
                  onClick={() => setCurrentSlide(dot)}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default About;