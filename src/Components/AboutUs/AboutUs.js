import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../Assets/TopBannerImages/BanImg1.png";
import img2 from "../../Assets/TopBannerImages/BanImg2.png";
import img3 from "../../Assets/TopBannerImages/BanImg3.png";
import "./About.css";

function AboutUs() {
  return (
    <>
      <div></div>
      <div className="about-us-section">
        <div className="image-carousel">
          <Carousel
            showArrows={true}
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
          >
            <div>
              <img src={img1} alt="First slide" />
              <p className="legend">Gold Hallmarking Setup and Registration</p>
            </div>
            <div>
              <img src={img2} alt="Second slide" />
              <p className="legend">BIS Registration Services</p>
            </div>
            <div>
              <img src={img3} alt="Third slide" />
              <p className="legend">MSME NSIC Registration Services</p>
            </div>
          </Carousel>
        </div>
        <div className="about-us-info">
          <h2>About Us</h2>
          <p>
            <b>MSP Consultancy</b> is leading consulting firm, a reliable
            service provider occupied in offering PRODUCT CERTIFICATION,
            TESTING, REGULATORY COMPLIANCES, INDIAN STANDARD ASSESSMENT like ISI
            Certification Services, Foreign Manufacturer Certification, Indian
            BIS and CRS Scheme for Electronics & IT Goods, BIS Hallmarking
            scheme for Gold and Silver Jewelry and many more
          </p>
          <p>
            OUR Team comprise of experts from various fields – Engineering,
            Charted Accountant, and Ex BIS officials etc.
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
