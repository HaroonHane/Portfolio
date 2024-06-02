import React from "react";
import home2 from "../img/home2.png";
import clock from "../img/clock.svg";
import teamwork from "../img/teamwork.svg";
import money from "../img/money.svg";
import diaphragm from "../img/diaphragm.svg";
import { motion } from "framer-motion";
import { StyleServices, StyleServiceTitle, Cards, Card } from "../pages/style";
import { imageAnimation2 } from "./PageAnimations";
import { useScroll } from "./useScrollAnim";





const ServicesSection = () => {
  const [imgElement, controls] = useScroll();
  return (
    <StyleServices>
  <div className="ServicesSection-img-wrapper">
  <motion.img
        ref={imgElement}
        variants={imageAnimation2}
        animate={controls}
        initial="hidden"
        src={home2}
        alt="Home"
      />
  </div>

      <div className="services-text-section">
        <StyleServiceTitle>
          <h4>
            High <span>Quality</span>
          </h4>
          <h4>Service</h4>
        </StyleServiceTitle>
        <Cards>
          <Card>
            <div className="icon">
              <img src={clock} alt="effic" />
              <h3>Efficient</h3>
            </div>
            <p>Lorem ipsum dolor sit amet ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={money} alt="afor" />
              <h3>Affordable</h3>
            </div>
            <p>Lorem ipsum dolor sit amet ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={diaphragm} alt="Post" />
              <h3>Post Grade Gear</h3>
            </div>
            <p>Lorem ipsum dolor sit amet ipsum dolor sit amet.</p>
          </Card>
          <Card>
            <div className="icon">
              <img src={teamwork} alt="TeamWork" />
              <h3>Team Work</h3>
            </div>
            <p>Lorem ipsum dolor sit amet ipsum dolor sit amet.</p>
          </Card>
        </Cards>
      </div>
    </StyleServices>
  );
};

export default ServicesSection;
