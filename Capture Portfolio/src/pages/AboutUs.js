import React from "react";
import home1 from "../img/home1.png";
import { StyleAboutUs, StyleTitle, Description, Button , Scale  } from "../pages/style";
import ServicesSection from "../components/ServicesSection";
import FaqSection from "../components/FaqSection";
import { Link } from "react-router-dom";
import LineWave from "../components/lineWave"

// Framer Motion
import { motion} from "framer-motion";
import { contactBtnAnim, fadeOut, imageAnimation2, pageAnimation } from "../components/PageAnimations";
import { useScroll } from "../components/useScrollAnim";





const AboutUs = () => {
const [imgElementhome1 ,controlsImg]=useScroll()

  return (
    <>
      <StyleAboutUs variants={pageAnimation} initial="hidden" animate="show" exit="exit">
        <div className="text-section">
          <StyleTitle >
            <motion.h4 variants={fadeOut} >We Work to make</motion.h4>
            <motion.h4 variants={fadeOut} >
              Yours <span>dreams</span>
            </motion.h4>
            <motion.h4 variants={fadeOut}>Come true.</motion.h4>
          </StyleTitle>
          <Description>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Maxime ab
              pariatur doloribus,{" "}
            </p>
          </Description>
           <div className="contact-btn-wrapper">
           <Link to="/contact-us">
          <Button variants={contactBtnAnim}>
              Contact US
          </Button>
          </Link>
           </div>
        </div>
       <Scale>
       <motion.img  ref={imgElementhome1}
        variants={imageAnimation2}
        animate={controlsImg}
        initial="hidden" src={home1} alt="Home" />
       </Scale>
       <LineWave/> 
      </StyleAboutUs>
        <ServicesSection />
      <FaqSection />
    </>
  );
};



export default AboutUs;
