// Shift from Outside(Fade from the current the upper or lower Viewport of the current) Animation on Y axis
export const pageAnimationYaxis = {
  hidden: {
    y: "-100%",
  },
  show: {
    y: "0%",
    transition: { duration: 0.5 },
  },
};
// Shift from Outside Animation on X axis
export const pageAnimationXaxis = {
  hidden: {
    x: "-100%",
  },
  show: {
    x: "0%",
    transition: { duration: 1 },
  },
};
// Fading Animation with Some Skew or Other Effects
export const fadeOut = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

//   Fade Out2
export const fadeOut2 = {
  hidden: {
    opacity: 0,
    x: -500,
    skew: "45deg",
  },
  show: {
    opacity: 1,
    x: 0,
    skew: "0deg",
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};
export const fadeOut3 = {
  hidden: {
    opacity: 0,
    x: 500,
    skew: "-45deg",
  },
  show: {
    opacity: 1,
    x: 0,
    skew: "0deg",
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

//   Page Animation for all
export const pageAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.75,
      when: "beforeChildren",
    },
  },
  exit: {
    y: 0,
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

// Specific Page Animation
export const pageAnimationMovieDetails = {
  hidden: {
    x: "100%",
  },
  show: {
    x: "0%",

    transition: { duration: 0.75 },
  },
  exit: {
    x: "100%",
    transition: { duration: 0.75 },
  },
};
//Scale Up Animation Up to Normal
export const imageAnimation = {
  hidden: {
    scale: 2,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1, delay: 0.2 },
  },
};
export const imageAnimation2 = {
  hidden: {
    scale: 1.2,
    opacity: 0,
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

// Shift Animation
export const AwardListAnim = {
  hidden: {
    x: 100,
  },
  show: { x: 0, transition: { duration: 1, ease: "easeOut" } },
};

// Button Animation
export const contactBtnAnim = {
  hidden: {
    y: 200,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.75, ease: "easeIn" },
  },
  exit: {
    y: 200,
    opacity: 0,
  },
};

// Title Animation
export const titleAnim = {
  hidden: {
    x: -200,
  },
  show: {
    x: 0,
    transition: { duration: 0.5 },
  },
};
