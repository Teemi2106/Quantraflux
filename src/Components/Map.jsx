import React from "react";

const Map = () => {
  return (
    <div style={{ height: "100%" }}>
      <h2
        style={{
          textAlign: "center",
          fontFamily: "arial",
          color: "white",
          padding: "2vmin",
          height: "20%",
        }}
      >
        Logistics Map
      </h2>
      <div className="mapFrame">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Bowen%20University+(My%20Business%20Name)&amp;t=h&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps trackers</a>
        </iframe>
      </div>
    </div>
  );
};
export default Map;
