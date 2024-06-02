import React from "react";
import { motion } from "framer-motion";
import { pageAnimation } from "./PageAnimations";
import { ContactStyle ,Title, Hide ,Circle ,Social ,SocialLinks } from "../pages/style";


// JSX PART

const ContactUS = () => {
  return (
    <ContactStyle
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Title>
        <motion.h2>Get In touch.</motion.h2>
      </Title>
      <Hide>
        <Circle />
        <Social>
          <h2>Quick Message On </h2>
          <small>+923479761XYZ</small>
        </Social>
      </Hide>
      <Hide>
        <Circle />
        <Social>
          <h2>Send an Email to </h2>
          <small>muhammadharoonawaan@gmail.com</small>
        </Social>
      </Hide>
      <Hide>
        <Social>
        <Circle />
          <h2>Follow US on Social Media </h2>
          <SocialLinks>
            <h3>Link1</h3>
            <h3>Link2</h3>
            <h3>Link3</h3>
          </SocialLinks>
        </Social>
      </Hide>
    </ContactStyle>
  );
};


export default ContactUS;
