import React from "react";
import image1 from "../images/pexels-google-deepmind-17485657-removebg-preview.png";
import "../CSS/LandPage.css";
import stockImage from "../images/vzx9k1la-removebg-preview.png";
import stockImage2 from "../images/jsm92363_1_-removebg-preview.png";

const LandPage = () => {
  return (
    <main style={{ minHeight: "100vh" }}>
      <section className="section1">
        <h1>Welcome To Quantraflux</h1>
        <img src={image1} alt="" />
      </section>
      <section className="section2">
        <div>
          <img src={stockImage} alt="" />
        </div>
        <div>
          <p>
            We Work with all your data , and provide you with insights to make
            better decisions.
          </p>
        </div>
      </section>
      <section className="section2">
        <div>
          <p>
            Our Fast Servers will handle even the most demanding tasks, so you
            can focus on what matters most - growing your Stock Market Analysis
            Tool
          </p>
        </div>
        <div>
          <img src={stockImage2} alt="" />
        </div>
      </section>
      <section className="testimonials">
        <h2>What Our Users Say</h2>
        <div className="testimonialDiv">
          <div className="card">
            <p className="card-title">Reabound Company</p>
            <p className="small-desc">
              "Quantraflux has been a game-changer for our team. The ability to
              easily access market analysis is invaluable."CEO & Co Founder
            </p>
            <div className="go-corner">
              <div className="go-arrow">→</div>
            </div>
          </div>
          <div className="card">
            <p className="card-title">TechCrunch</p>
            <p className="small-desc">
              “I’ve never seen anything like Quantraflux. It’s an incredibly
              powerful tool that provides real-time financial intelligence at
              every level of the market.”
            </p>
            <div className="go-corner">
              <div className="go-arrow">→</div>
            </div>
          </div>
          <div className="card">
            <p className="card-title">Forbes</p>
            <p className="small-desc">
              “The Quantraflux platform is one of the best tools I've ever used
              for analyzing stock markets and identifying trends.”
            </p>
            <div className="go-corner">
              <div className="go-arrow">→</div>
            </div>
          </div>
          <div className="card">
            <p className="card-title">Financial Times</p>
            <p className="small-desc">
              “Investors can now get instant insights into global financial
              data, which will revolutionize how they make decisions about
              investments.”
            </p>
            <div className="go-corner">
              <div className="go-arrow">→</div>
            </div>
          </div>
          <div className="card">
            <p className="card-title">BigQuery</p>
            <p className="small-desc">
              "Quantraflux has been a gamechanger in our ability to analyze
              large datasets from Google BigQuery.""Quantraflux integrates
              seamlessly "Quantraflux has been built with Google BigQuery in
              mind - it's a seamless integration that allows us to leverage
              Google's infrastructure to process large volumes of data."
            </p>
            <div className="go-corner">
              <div className="go-arrow">→</div>
            </div>
          </div>
        </div>
      </section>
      <section className="section4">
        <div className="input-group">
          <input
            type="email"
            className="input"
            id="Email"
            name="Email"
            placeholder="quantraflux@bigdata.com"
            autoComplete="off"
          />
          <input className="button--submit" value="Subscribe" type="submit" />
        </div>
        <p>Subscribe to our Free Weekly stock analysis</p>
      </section>
    </main>
  );
};

export default LandPage;
