import React from "react";
import "./contact.css";
import map from "../../Assets/Map/Map.png";

function ContactUs() {
  return (
    <>
      <div className="main-heading">
        <h1>Contact Us</h1>
      </div>

      <div className="contact-us-page">
        <div className="contact-form-container">
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="contact-info-container">
          <div>
            <p>
              <i className="fas fa-map-marker-alt"></i>
              <strong>Address:</strong> Office No. 600, Level 5, Shopprix Mall,
              Sector-5, Vaishali, Ghaziabad, Uttar Pradesh - 201010
            </p>
            <p>
              <strong>Phone:</strong> +918294778366
            </p>
            <p>
              <strong>Email:</strong> mspconsultancy23@gmail.com
            </p>
          </div>
          <div className="google-map-code">
            <a href="https://www.google.com/maps/place/Shopprix+Mall/@28.6430553,77.3323563,15z/data=!3m1!5s0x390cfad1a875e803:0x8485b43fb1cf9a70!4m14!1m7!3m6!1s0x390cfad1a161f385:0x18c10d7a34a6cb90!2sShopprix+Mall!8m2!3d28.6430556!4d77.3411111!16s%2Fg%2F1vxz7_fh!3m5!1s0x390cfad1a161f385:0x18c10d7a34a6cb90!8m2!3d28.6430556!4d77.3411111!16s%2Fg%2F1vxz7_fh?authuser=0">
              <img src={map} style={{ width: 300, height: 200 }} alt="map" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
