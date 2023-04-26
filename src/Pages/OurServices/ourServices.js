import React from "react";
import "./ourServices.css";

import isi from "../../Assets/servicesLogo/isi.png";
import halmark from "../../Assets/servicesLogo/halmarK.png";
import bis from "../../Assets/servicesLogo/bis.png";
import fmcs from "../../Assets/servicesLogo/fmcs.webp";
import nsic from "../../Assets/servicesLogo/nsic.png";
import test from "../../Assets/servicesLogo/test.png";
import TradeM from "../../Assets/servicesLogo/TradeM.png";

function Services() {
  // const services = [
  //   {
  //     id: 1,
  //     title: "ISI Certification",
  //     description:
  //       "  The ISI mark is a standards-compliance mark for industrial products in India since 1950.",
  //     icon: isi,
  //   },
  //   {
  //     id: 2,
  //     title: "Gold Halmarking Setup & Registration Services",
  //     description:
  //       "It is the accurate determination & official recording of the equivalent content of precious metal (such as gold and silver) in precious metal articles.",
  //     icon: halmark,
  //   },
  //   {
  //     id: 3,
  //     title: "BIS Registration Services",
  //     description:
  //       "The Bureau of Indian Standards (BIS) is the National Standards Body of India under Department of Consumer affairs",
  //     icon: bis,
  //   },
  //   {
  //     id: 4,
  //     title: "FMCS Services",
  //     description:
  //       "Foreign manufacturers of products who intend to export to India also may obtain a BIS product certification license.",
  //     icon: fmcs,
  //   },
  //   {
  //     id: 5,
  //     title: "Trademark Registration Services",
  //     description: "We optimize your website to rank higher in search engines",
  //     icon: "fas fa-search",
  //   },
  //   {
  //     id: 6,
  //     title: "Social Media Marketing",
  //     description:
  //       "We help you connect with your audience on social media platforms",
  //     icon: "fas fa-share",
  //   },
  //   {
  //     id: 7,
  //     title: "Content Writing",
  //     description: "We create high-quality content that engages your audience",
  //     icon: "fas fa-pencil-alt",
  //   },
  // ];

  return (
    <>
      <div className="main-heading">
        <h1>Our Services</h1>
      </div>
      <div className="services-page">
        <div className="services-header">
          <p>Check out what we offer to our clients</p>
        </div>
        <div className="services-container">
          <div className="services-row">
            <div className="service-card">
              <img src={isi} alt="Service Icon 1" />
              <h3>ISI Certification</h3>
              <p>
                The ISI mark is a standards-compliance mark for industrial
                products in India since 1950.
              </p>
            </div>
            <div className="service-card">
              <img src={halmark} alt="Service Icon 2" />
              <h3>Gold Halmarking Setup & Registration Services</h3>
              <p>
                It is the accurate determination & official recording of the
                equivalent content of precious metal {"("}such as gold and
                silver
                {")"} in precious metal articles.
              </p>
            </div>
            <div className="service-card">
              <img src={bis} alt="Service Icon 3" />
              <h3>BIS Registration Services</h3>
              <p>
                The Bureau of Indian Standards {"("}BIS{")"} is the National
                Standards Body of India under Department of Consumer affairs
              </p>
            </div>
            <div className="service-card">
              <img src={fmcs} alt="Service Icon 4" />
              <h3>FMCS Services</h3>
              <p>
                Foreign manufacturers of products who intend to export to India
                also may obtain a BIS product certification license.
              </p>
            </div>
            <div className="service-card">
              <img src={TradeM} alt="Service Icon 5" />
              <h3>Trademark Registration Services</h3>
              <p>
                A trademark {"("}also written trade mark or trade-mark{")"} is a
                type of intellectual property consisting of a recognizable sign,
                design, or expression that identifies products or services from
                a particular source and distinguishes them from others.
              </p>
            </div>
            <div className="service-card">
              <img src={nsic} alt="Service Icon 6" />
              <h3>MSME NSIC Registration Services</h3>
              <p>
                National Small Industries Corporation Limited {"("}NSIC{")"} is
                a Mini Ratna government agency established by the Ministry of
                Micro, Small and Medium Enterprises , Government of India in
                1955
              </p>
            </div>
            <div className="service-card">
              <img src={test} alt="Service Icon 7" />
              <h3>Testing Equipment</h3>
              <p>
                To protect consumer’s interest , BIS operates various conformity
                assessment schemes. Under these schemes, BIS grants
                licenses/registrations to such manufacturers who are capable of
                producing goods conforming to relevant Indian Standards, on
                continuous basis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
