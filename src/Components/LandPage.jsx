import React from "react";
import image1 from "../images/pexels-google-deepmind-17485657-removebg-preview.png";

const LandPage = () => {
  return (
    <main style={{ minHeight: "100vh" }}>
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "steelblue",
            fontSize: "7vmin",
            fontFamily: "sans-serif",
          }}
        >
          Welcome To Quantraflux
        </h1>
        <img
          style={{
            borderRadius: "50%",
            objectPosition: "center",
            objectFit: "cover",
          }}
          src={image1}
          alt=""
        />
      </section>
      <section>
        <div></div>
      </section>
    </main>
  );
};

export default LandPage;
