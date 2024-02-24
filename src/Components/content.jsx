import React, { useState, useEffect } from "react";

const section = document.getElementById("section1");

const Content = ({ Api, Income, Map, Calendar }) => {
  const [content, setContent] = useState(<Api />);
  const [forex, setForex] = useState(0);

  const handleForex = () => {
    setForex(() => Math.floor(Math.random() * 151 + 150));
  };

  useEffect(() => {
    handleForex();
  }, []);

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

  const handleMeet = () => {
    alert("Hello");
  };
  const [increase, setIncrease] = useState(
    localStorage.getItem("Increase") || 0
  );

  useEffect(() => {
    const numberElement = document.getElementById("number");
    if (numberElement) {
      numberElement.innerHTML = increase;
      localStorage.setItem("Increase", increase);
    }
  }, [increase]);

  useEffect(() => {
    const one = document.getElementById("one");
    if (increase <= 50) {
      one.style.background = "white";
    } else if (increase <= 100) {
      one.style.backgroundColor = "wheat";
    } else {
      one.style.backgroundColor = "gold";
    }
  }, [increase]);

  useEffect(() => {
    const amount = document.getElementById("amount");
    amount.innerHTML = increase * forex;
  }, [increase, forex]);

  useEffect(() => {
    const shares = document.getElementById("shares");
    shares.innerHTML = ((increase / 300) * 100).toFixed(2);
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
            <div id="number">{localStorage.getItem(increase)}</div>
            <h2 className="increment">
              <span
                className="minus"
                onClick={() => {
                  if (increase === 0) {
                    return;
                  } else {
                    setIncrease(parseInt(increase) - 1);
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
                  if (increase <= 300) {
                    setIncrease(parseInt(increase) + 1);
                  } else {
                    alert("No More Shares Available");
                  }
                }}
              >
                +
              </span>
            </h2>
          </div>
          <div className="twin" id="two">
            <h3>Price Per Share : ${forex}</h3>
            <h3>
              Value Of Owned Shares: $<span id="amount"></span>
            </h3>
            <h4 style={{ textAlign: "center" }}>
              Percentage of shares owned:<span id="shares"></span>%
            </h4>
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
          Current Managing Personell
        </h2>
        <section className="carousel">
          <div className="carouselChild" onClick={handleMeet}>
            <h3>Ino</h3>
            <br></br>
            <p>Product Manager</p>
            <p>Monthly Wage: $11,000</p>
          </div>
          <div className="carouselChild" onClick={handleMeet}>
            <h3>Nezuko</h3>
            <br></br>
            <p>Company Secretary</p>
            <p>Monthly Wage: $9,800</p>
          </div>
          <div className="carouselChild" onClick={handleMeet}>
            <h3>Rinn</h3>
            <br />
            <p>Hiring Manager</p>
            <p>Monthly Wage: $10,000</p>
          </div>
          <div className="carouselChild" onClick={handleMeet}>
            <h3>Nami</h3>
            <br />
            <p>Data Analyst</p>
            <p>Monthly Wage: $7,600 (part-time)</p>
          </div>
          <div className="carouselChild" onClick={handleMeet}>
            <h3>Hinata</h3>
            <br />
            <p>Software Engineer</p>
            <p>Monthly Wage: $10,500</p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Content;
