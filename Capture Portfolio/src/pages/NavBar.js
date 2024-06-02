import React from "react";
import { StyleNavbar } from "./style";
import { Link } from "react-router-dom";
import { pageAnimationYaxis } from "../components/PageAnimations";
import {useLocation} from "react-router-dom"
import { NavLine } from "./style";
const NavBar = () => {
    const {pathname}=useLocation()
  return (
    <StyleNavbar variants={pageAnimationYaxis} animate="show" initial="hidden">
      <div className="head-Nav-title-section">
        <div className="title">
          <Link className={"contact-us"} to="/">
            Capture
          </Link>
        </div>
        <div className="nav-list-menu">
          <p>
            <Link to="/">1. About US</Link>
            <NavLine  animate={{width:pathname === "/"? "100%":'0%',transition:{duration:1}}} initial={{width:"0%"}}/>
          </p>
          <p>
            <Link to="/work">2. Our Work</Link>
            <NavLine  animate={{width:pathname === "/work"||pathname.includes( "/work/")? "100%":'0%',transition:{duration:1}}} initial={{width:"0%"}}/>
          </p>
          <p>
            <Link to="/contact-us">3. Contact Us</Link>
            <NavLine  animate={{width:pathname === "/contact-us"? "100%":'0%',transition:{duration:1}}} initial={{width:"0%"}}/>
          </p>
        </div>
      </div>
    </StyleNavbar>
  );
};


export default NavBar;
