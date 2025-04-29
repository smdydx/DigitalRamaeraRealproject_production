import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import { testimonialsData } from "@/data/testimonials";
import { Quote } from "lucide-react";

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.div variants={fadeIn("up", "tween", 0.1, 1)} className="inline-block mb-4">
            <span className="text-primary font-medium text-sm uppercase tracking-wider relative before:content-[''] before:absolute before:w-8 before:h-[2px] before:bg-primary before:left-full before:top-1/2 before:ml-2 after:content-[''] after:absolute after:w-8 after:h-[2px] after:bg-primary after:right-full after:top-1/2 after:mr-2">
              Testimonials
            </span>
          </motion.div>
          <motion.h2
            variants={fadeIn("up", "tween", 0.2, 1)}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p variants={fadeIn("up", "tween", 0.3, 1)} className="text-muted-foreground">
            Hear from our satisfied clients about their experience working with us.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              delay={0.1 * index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  testimonial: {
    content: string;
    name: string;
    position: string;
    company: string;
    image: string;
  };
  delay: number;
}

const TestimonialCard = ({ testimonial, delay }: TestimonialCardProps) => {
  return (
    <motion.div
      variants={fadeIn("up", "tween", delay, 0.5)}
      className="bg-background p-8 rounded-lg border border-border relative"
    >
      <div className="absolute -top-5 left-8 text-4xl text-primary">
        <Quote className="h-8 w-8" />
      </div>
      <div className="pt-4">
        <p className="text-muted-foreground mb-6 italic">
          "{testimonial.content}"
        </p>
        <div className="flex items-center">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h4 className="font-semibold">{testimonial.name}</h4>
            <p className="text-sm text-primary">
              {testimonial.position}, {testimonial.company}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialsSection;
