import React, { useEffect } from "react";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";


export const useScroll = () => {
  const controls = useAnimation();
  const [element, view] = useInView();
useEffect(()=>{
    if (view) {
        controls.start("show");
      } else {
        controls.start("hidden");
      }
} ,[view ,element])

  return [element, controls];
};
