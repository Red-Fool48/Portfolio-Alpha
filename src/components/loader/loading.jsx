import React from "react";
import { motion } from "framer-motion";
import "../../styles.css";
const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 }
      }
    };
  }
};
const Loader = () => {
  return (
    <motion.div className="loader">
      <motion.svg
        viewBox="0 0 200 200"
        initial="hidden"
        animate="visible"
        className="loaderSvg"
      >
        <motion.circle
          cx="100"
          cy="100"
          r="80"
          stroke="#003249"
          variants={draw}
          custom={0}
        />
        <motion.line
          x1="100"
          y1="30"
          x2="35"
          y2="130"
          stroke="#007ea7"
          variants={draw}
          custom={0.3}
        />
        <motion.line
          x1="100"
          y1="30"
          x2="100"
          y2="170"
          stroke="#007ea7"
          variants={draw}
          custom={0.6}
        />
        <motion.line
          x1="55"
          y1="105"
          x2="100"
          y2="105"
          stroke="#007ea7"
          variants={draw}
          custom={0.9}
        />
        <motion.line
          x1="107"
          y1="30"
          x2="107"
          y2="170"
          stroke="#007ea7"
          variants={draw}
          custom={0.6}
        />
        <motion.line
          x1="107"
          y1="105"
          x2="150"
          y2="50"
          stroke="#007ea7"
          variants={draw}
          custom={0.6}
        />
        <motion.line
          x1="107"
          y1="105"
          x2="150"
          y2="150"
          stroke="#007ea7"
          variants={draw}
          custom={0.6}
        />
      </motion.svg>
    </motion.div>
  );
};

export default Loader;
// color for lines : #00cc88
// color for lines: fill: rgb(22, 18, 18);
// Few links: https://coolors.co/ccdbdc-9ad1d4-80ced7-007ea7-003249
