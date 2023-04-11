import React from "react";
import Header from "../../Components/Header/Header";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import AboutUs from "../../Components/AboutUs/AboutUs";
import OurServicesSection from "../../Components/OurServices/ourServices";
import Navbar from "../../Components/NavBar/NavBar";
import ContactUs from "../../Components/ContactUs/ContactUs";
import Footer from "../../Components/footer/foot";
import Testimonial from "../../Components/Testimonial/Testimonial";
import img1 from "../../Assets/TopBannerImages/BanImg1.png";
import img2 from "../../Assets/TopBannerImages/BanImg2.png";
import img3 from "../../Assets/TopBannerImages/BanImg3.png";
import img4 from "../../Assets/TopBannerImages/BanImg4.png";

const HomePage = () => {
  const image1 = img1;
  const images = [
    {
      src: img1,
      alt: "Image 1",
      text: "Gold Hallmarking Setup and Registration",
    },
    {
      src: img2,
      alt: "Image 2",
      text: "BIS Registration Services",
    },
    {
      src: img3,
      alt: "Image 3",
      text: "MSME NSIC Registration Services",
    },
    {
      src: img4,
      alt: "Image 4",
      text: "Trademark Registration Services",
    },
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
                <h6
                  className="inner-text"
                  style={{ fontSize: 20, marginTop: -40 }}
                >
                  {image.text}
                </h6>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <AboutUs />
      <OurServicesSection />
      <Testimonial />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default HomePage;
