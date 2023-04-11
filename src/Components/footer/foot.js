import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#333",
        color: "#fff",
        padding: "2rem 1rem",
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          //   flexWrap: "wrap",
          flexDirection: "row",
        }}
      >
        <div style={{ flex: "1 1 100%", marginBottom: "1rem" }}>
          <h4 style={{ marginBottom: "0.5rem" }}>Important Links</h4>
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            <li>
              <a href="https://www.bis.gov.in/">https://www.bis.gov.in/</a>
            </li>
          </ul>
        </div>
      </div>
      <p style={{ margin: "1rem 0", fontSize: "0.8rem" }}>
        Copyright © {new Date().getFullYear()}
        <span style={{ paddingLeft: "0.5rem", paddingRight: "0.5rem" }}>|</span>
        All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
