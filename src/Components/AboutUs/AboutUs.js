import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
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
              <img
                src="https://wallpapercave.com/wp/wp3203375.jpg"
                alt="First slide"
              />
              <p className="legend">First slide label</p>
            </div>
            <div>
              <img
                src="https://wallpapercave.com/wp/wp3203375.jpg"
                alt="Second slide"
              />
              <p className="legend">Second slide label</p>
            </div>
            <div>
              <img
                src="https://wallpapercave.com/wp/wp3203375.jpg"
                alt="Third slide"
              />
              <p className="legend">Third slide label</p>
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
