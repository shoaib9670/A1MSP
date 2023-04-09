import React, { useState } from "react";
import "./Contact.css";
import map from "../../Assets/Map/Map.png";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact-us-container">
      <div className="contact-details">
        <h2>Contact Us</h2>
        <p>
          <strong>Address:</strong> 123 Main St, Anytown USA
        </p>
        <p>
          <strong>Phone:</strong> 555-555-1234
        </p>
        <p>
          <strong>Email:</strong> info@example.com
        </p>
        <div className="google-map-code">
          <a href="https://www.google.com/maps/place/Shopprix+Mall/@28.6430553,77.3323563,15z/data=!3m1!5s0x390cfad1a875e803:0x8485b43fb1cf9a70!4m14!1m7!3m6!1s0x390cfad1a161f385:0x18c10d7a34a6cb90!2sShopprix+Mall!8m2!3d28.6430556!4d77.3411111!16s%2Fg%2F1vxz7_fh!3m5!1s0x390cfad1a161f385:0x18c10d7a34a6cb90!8m2!3d28.6430556!4d77.3411111!16s%2Fg%2F1vxz7_fh?authuser=0">
            <img src={map} style={{ width: 300, height: 200 }} alt="map" />
          </a>
        </div>
      </div>
      <div className="contact-form">
        <h2>Send us a message</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
