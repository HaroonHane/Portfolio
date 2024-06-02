import React, { useState } from "react"
import { motion } from "framer-motion";

const Toggle=({title ,children})=>{
    let [toggle ,setToggle] =useState(false);
    function Toggling(){
      setToggle(!toggle)
    }

return(
    <motion.div layout className="faq-wrapper" onClick={Toggling}>
        <motion.h3  layout style={{cursor:'pointer'}}> {title}</motion.h3>
        {toggle ? children :""}
        <motion.div variants={lineAnim} animate="show" initial="hidden" className="line"></motion.div>
    </motion.div>
)
}

const lineAnim={
    hidden:{
        width:'0%',
    },
    show:{
        width:'100%',
        transition:{duration:1, delay:1}
    }
}
export default Toggle