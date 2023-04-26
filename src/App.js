import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/Home/HomePage";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Gallery from "./Pages/Gallery/gallery";
import ContactUs from "./Pages/ContactUs/contact";
import Services from "./Pages/OurServices/ourServices";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/footer/foot";
import RecentUpdates from "./Pages/Recent/Recent";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/about" element={<AboutUs />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/recent" element={<RecentUpdates />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
