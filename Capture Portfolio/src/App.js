import React from "react";
import AboutUs from "./pages/AboutUs";
import NavBar from "./pages/NavBar";
import OurWork from "./components/OurWork";
import ContactUS from "./components/ContactUs";
import { Routes, Route } from "react-router-dom";
import MovieDetails from "./pages/ExtractMovie";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
// import EmailLink from "./components/EmailLink";


function App() {
  const location=useLocation();
  return (
    <div className="whole-app-wrapper">
      <NavBar />
      <AnimatePresence mode="wait">
      <Routes  location={location} key={location.key}>
          <Route path="/" exact Component={AboutUs}/>
          <Route path="/work" exact Component={OurWork } />
          <Route path="/contact-us"  Component={ContactUS} />
          <Route path="/work/:id"  Component={MovieDetails} />
          {/* <Route path="/email/:id" element={<EmailLink />} /> */}
      </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
