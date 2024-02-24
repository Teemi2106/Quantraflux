import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        width: "100%",
        backgroundColor: "gray",
        color: "white",
        fontFamily: "Arial",
        textAlign: "center",
        padding: "1.5vmin",
      }}
    >
      &copy; Quantraflux {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
