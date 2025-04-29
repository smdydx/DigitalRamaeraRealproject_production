
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";
import ScheduleMeetingForm from "@/components/ScheduleMeetingForm";

const Schedule = () => {
  return (
    <div className="min-h-screen bg-background pt-24 sm:pt-28 lg:pt-32 px-4">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="container mx-auto"
      >
        <motion.div variants={fadeIn("up", "tween", 0.2, 1)} className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-4 sm:mb-6">
            Schedule a Meeting
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
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
