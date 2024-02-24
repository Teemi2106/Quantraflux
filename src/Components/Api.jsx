import React from "react";

const Prices = [
  {
    name: "SatoshiCoin",
    symbol: "STC",
    move: "+21.34%",
    id: 1,
  },
  {
    name: "Geckoreum",
    symbol: "GKM",
    move: "+11.05%",
    id: 2,
  },
  {
    name: "Lunarcoin",
    symbol: "LNR",
    move: "+10.42%",
    id: 3,
  },
  {
    name: "Telecoin",
    symbol: "TLC",
    move: "+7.03%",
    id: 4,
  },
];

const Api = () => {
  return (
    <div>
      <h2
        style={{
          textAlign: "center",
          fontFamily: "arial",
          color: "white",
          padding: "2vmin",
        }}
      >
        Todays Movers
      </h2>
      <ul className="coinUl">
        {Prices.map((price) => (
          <li className="coinList" key={price.id}>
            <span className="name">{price.name}</span>
            <span className="symbol">{price.symbol}</span>
            <span className="moves">{price.move}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Api;
