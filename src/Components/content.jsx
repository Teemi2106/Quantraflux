import React, { useState, useEffect } from "react";

const section = document.getElementById("section1");

const Content = ({ Api, Income, Map, Calendar }) => {
  const [content, setContent] = useState(<Api></Api>);

  const handleApiClick = () => {
    section.textContent = setContent(<Api />);
  };

  const handleIncomeClick = () => {
    setContent(<Income></Income>);
  };

  const handleMapClick = () => {
    setContent(<Map />);
  };

  const handlCalendarClick = () => {
    setContent(<Calendar />);
  };

  const meet = document.querySelector(".carouselChild");
  meet.addEventListener("click", alert("hello"));

  const [increase, setIncrease] = useState(0);

  useEffect(() => {
    const numberElement = document.getElementById("number");
    if (numberElement) {
      numberElement.innerHTML = increase;
    }
  }, [increase]);

  useEffect(() => {
    const one = document.getElementById("one");
    if (increase <= 5) {
      one.style.background = "green";
    } else if (increase <= 10) {
      one.style.backgroundColor = "orange";
    } else {
      one.style.backgroundColor = "red";
    }
  }, [increase]);

  useEffect(() => {
    const amount = document.getElementById("amount");
    amount.innerHTML = increase * 255;
  }, [increase]);

  return (
    <main>
      <div className="touchBar">
        <ul>
          <li className="icon" id="api" onClick={handleApiClick}>
            🌐
          </li>
          <li className="icon" id="income" onClick={handleIncomeClick}>
            💲
          </li>
          <li className="icon" id="map" onClick={handleMapClick}>
            🗺️
          </li>
          <li className="icon" id="calendar" onClick={handlCalendarClick}>
            📅
          </li>
        </ul>
      </div>
      <section id="section1" style={{ cursor: "pointer" }}>
        {content}
      </section>
      <section id="section2">
        <h2
          style={{
            backgroundColor: "gray",
            marginBottom: "2vmin",
            borderRadius: "20px",
            textAlign: "center",
            color: "white",
          }}
        >
          Buy Company Shares
        </h2>
        <div id="parent">
          <div className="twin" id="one">
            <div id="number"></div>
            <h2 className="increment">
              <span
                className="minus"
                onClick={() => {
                  if (increase === 0) {
                    return;
                  } else {
                    setIncrease(increase - 1);
                  }
                }}
              >
                -
              </span>
              <span className="value" aria-readonly>
                {/* {increase} */}
              </span>
              <span
                className="plus"
                onClick={() => {
                  setIncrease(increase + 1);
                }}
              >
                +
              </span>
            </h2>
          </div>
          <div className="twin" id="two">
            <h3>Price Per Share : $255.0</h3>
            <h3>
              Amount Purchased: $<span id="amount"></span>
            </h3>
          </div>
        </div>
      </section>
      <div
        style={{
          padding: "3vmin",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontFamily: "Arial",
            fontSize: "5vmin",
          }}
        >
          Meet The Team
        </h2>
        <section className="carousel">
          <div className="carouselChild">
            <p>Ino</p>
          </div>
          <div className="carouselChild">
            <p>Nezuko</p>
          </div>
          <div className="carouselChild">
            <p>Rinn</p>
          </div>
          <div className="carouselChild">
            <p>Nami</p>
          </div>
          <div className="carouselChild">
            <p>Hinata</p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Content;
