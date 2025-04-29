import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import ScheduleMeetingForm from "@/components/ScheduleMeetingForm";

const Schedule = () => {
  return (
    <div className="min-h-screen bg-background pt-20">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 py-16"
      >
        <motion.div variants={fadeIn("up", "tween", 0.2, 1)} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-6">
            Schedule a Meeting
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Book a consultation with our experts to discuss your project requirements and explore solutions.
          </p>
        </motion.div>

        <motion.div variants={fadeIn("up", "tween", 0.3, 1)} className="max-w-2xl mx-auto">
          <ScheduleMeetingForm />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Schedule;