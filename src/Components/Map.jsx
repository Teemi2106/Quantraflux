import React, { useEffect, useState } from "react";
import "../loader.css";
import GoogleMapApp from "./GoogleMap";

const Map = () => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const mapFrame = document.getElementById("mapFrame");

    const handleLoad = () => {
      setLoading(false);
    };

    if (mapFrame) {
      mapFrame.addEventListener("load", handleLoad);
      return () => {
        mapFrame.removeEventListener("load", handleLoad);
      };
    }
  }, [isLoading]);

  return (
    <div style={{ height: "100%" }}>
      <h2 className="map-title">Logistics Map</h2>
      <div className="mapFrame">
        {isLoading ? (
          <div>
            <div className="boxes">
              <div className="box">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className="box">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className="box">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <div className="box">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
            <p style={{ color: "white", textAlign: "center" }}>Loading</p>
          </div>
        ) : (
          <GoogleMapApp />
        )}
      </div>
    </div>
  );
};

export default Map;
