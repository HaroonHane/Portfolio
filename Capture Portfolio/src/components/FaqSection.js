import React from "react";
import { FaqSectionWrapper, StyleFAQTitle } from "../pages/style";
import Toggle from "./toggleFaqSection";
import { LayoutGroup } from "framer-motion";




const FaqSection = () => {
  return (
    <>
      <FaqSectionWrapper>
        <StyleFAQTitle>
          <h4>Any Questions?</h4>
          <span>FAQ</span>
        </StyleFAQTitle>
        <LayoutGroup>
          <Toggle style={{cursor:'pointer'}} title={"How do I Start?"}>
            <div className="each-quest">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint,
                perferendis!
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint,
                perferendis!
              </p>
            </div>
          </Toggle>
          <Toggle title={"What Products do you Offer?"}>
            <div className="each-quest">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint,
                perferendis!
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint,
                perferendis!
              </p>
            </div>
          </Toggle>
          <Toggle title={"Different Payments Methods?"}>
            <div className="each-quest">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint,
                perferendis!
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint,
                perferendis!
              </p>
            </div>
          </Toggle>
          <Toggle title={"Daily Schedule?"}>
            <div className="each-quest">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint,
                perferendis!
              </p>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint,
                perferendis!
              </p>
            </div>
          </Toggle>
        </LayoutGroup>
      </FaqSectionWrapper>
    </>
  );
};


export default FaqSection;
