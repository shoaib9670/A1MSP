import React from "react";
import Header from "../../Components/Header/Header";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AboutUs from "../../Components/AboutUs/AboutUs";
import OurServicesSection from "../../Components/OurServices/ourServices";
import Navbar from "../../Components/NavBar/NavBar";
import ContactUs from "../../Components/ContactUs/ContactUs";
import Footer from "../../Components/footer/foot";

const HomePage = () => {
  const images = [
    { src: "https://wallpapercave.com/wp/wp3203375.jpg", alt: "Image 1" },
    { src: "https://wallpapercave.com/wp/wp3203375.jpg", alt: "Image 2" },
    { src: "https://wallpapercave.com/wp/wp3203375.jpg", alt: "Image 3" },
    { src: "https://wallpapercave.com/wp/wp3203375.jpg", alt: "Image 4" },
  ];
  return (
    <div>
      <Header />
      <Navbar />
      <div
        className="ban_container"
        style={{ alignItems: "center", width: "100%" }}
      >
        <div style={{ width: "100%", alignSelf: "center" }}>
          <Carousel
            showArrows={true}
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
            transitionTime={500}
            swipeable={true}
            emulateTouch={true}
            selectedItem={0}
            // width="75%"
          >
            {images.map((image) => (
              <div key={image.src}>
                <img src={image.src} alt={image.alt} />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <AboutUs />
      <OurServicesSection />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default HomePage;
