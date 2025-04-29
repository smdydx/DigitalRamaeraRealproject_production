
export const fadeIn = (direction: string, type: string, delay: number, duration: number) => {
  return {
    hidden: {
      x: direction === "left" ? 25 : direction === "right" ? -25 : 0,
      y: direction === "up" ? 25 : direction === "down" ? -25 : 0,
      opacity: 0,
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay: delay * 0.2, // Reduced delay multiplier
        duration: duration * 0.5, // Reduced duration multiplier
        ease: "easeOut",
      },
    },
  };
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.02, // Reduced stagger time
      delayChildren: 0.05, // Reduced delay
    },
  },
};

export const slideIn = (direction: string, type: string, delay: number, duration: number) => {
  return {
    hidden: {
      x: direction === "left" ? "-50%" : direction === "right" ? "50%" : 0,
      y: direction === "up" ? "50%" : direction === "down" ? "50%" : 0,
      opacity: 0,
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay: delay * 0.2,
        duration: duration * 0.5,
        ease: "easeOut",
      },
    },
  };
};

export const zoomIn = (delay: number, duration: number) => {
  return {
    hidden: {
      scale: 0.8,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        delay: delay * 0.2,
        duration: duration * 0.5,
        ease: "easeOut",
      },
    },
  };
};

export const textVariant = (delay: number) => {
  return {
    hidden: {
      y: 25,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.5,
        delay: delay * 0.2,
      },
    },
  };
};
