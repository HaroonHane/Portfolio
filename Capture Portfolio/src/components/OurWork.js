import React, { useEffect } from "react";
import AthleteSmall from '../img/athlete-small.png';
import GoodTimesSmall from '../img/goodtimes-small.png';
import TheRacerSmall from '../img/theracer-small.png';
import { Link } from "react-router-dom";
import { MoviesWholeWrapper ,EachMovieWrapper} from "../pages/style";
import { fadeOut, fadeOut2, fadeOut3, imageAnimation, pageAnimation, titleAnim } from "./PageAnimations";
import {motion } from "framer-motion"
import { useScroll } from "./useScrollAnim";


const OurWork=()=>{
const [element , controls] =useScroll();
const [element1 , controls1] =useScroll();
    return(
        <>
          <MoviesWholeWrapper  variants={pageAnimation} initial="hidden" animate="show" exit="exit">
          <EachMovieWrapper>
             <div className="each-movie-wrapper">
                <motion.h4 variants={titleAnim} className="movie-title">The Athlete</motion.h4>
             </div>
             <motion.div animate={{width:"100%",transition:{duration:0.75}}} initial={{width:"0%"}} className="line"></motion.div>
             <div className="movie-img-wrapper">
             <Link to="the-athlete">
             <motion.img variants={imageAnimation} src={AthleteSmall} alt="AthleteSmall" />
             </Link>
             </div>
            </EachMovieWrapper>
            <EachMovieWrapper ref={element1} variants={fadeOut3} animate={controls1} initial="hidden">
             <div className="each-movie-wrapper">
                <motion.h4 variants={titleAnim} className="movie-title">Good times Never End.</motion.h4>
             </div>
             <motion.div animate={{width:"100%",transition:{duration:0.75}}} initial={{width:"0%"}} className="line"></motion.div>
             <div className="movie-img-wrapper">
             <Link to='good-times'>
             <img src={GoodTimesSmall} alt="AthleteSmall" />
             </Link>
             </div>
            </EachMovieWrapper>
            <EachMovieWrapper ref={element} variants={fadeOut2} animate={controls} initial="hidden">
             <div className="each-movie-wrapper">
                <motion.h4 variants={titleAnim}className="movie-title">The Racer</motion.h4>
             </div>
             <motion.div animate={{width:"100%",transition:{duration:0.75}}} initial={{width:"0%"}} className="line"></motion.div>
             <div className="movie-img-wrapper">
             <Link to="the-racer"><img src={TheRacerSmall} alt="AthleteSmall" /></Link>
             </div>
            </EachMovieWrapper>
          </MoviesWholeWrapper>
        </>
    )
}



export default OurWork;