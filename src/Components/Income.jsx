import React from "react";
import { useEffect } from "react";

const Value = [
  {
    income: "+13786.53",
    expense: "",
    description: "Monthly Interest",
  },
  {
    income: "",
    expense: "-1094.73",
    description: "Rent",
  },
  {
    income: "+89293.99",
    expense: "",
    description: "Months Earnings",
  },
  {
    income: "",
    expense: " -250.00",
    description: "Office Upgrades",
  },
  {
    income: "",
    expense: " -49899.00",
    description: "Workers Wages",
  },
  {
    income: "",
    expense: " -3553.49",
    description: "Product Taxes",
  },
];

const Income = () => {
  let totalIncome = 0;
  let totalExpense = 0;

  useEffect(() => {
    const tableDataElements = document.querySelectorAll(".tableData");

    tableDataElements.forEach((tableData) => {
      if (tableData.textContent.includes("-")) {
        tableData.style.color = "red";
      } else if (tableData.textContent.includes("+")) {
        tableData.style.color = "green";
      }
    });
  }, []);

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
        Last Months Income
      </h2>
      <table>
        <thead>
          <tr>
            <td>Income</td>
            <td>Expenses</td>
            <td>Description</td>
          </tr>
        </thead>

        <tbody>
          {Value.map((value) => {
            const income = value.income
              ? parseFloat(value.income.replace(",", ""))
              : 0;
            const expense = value.expense
              ? parseFloat(value.expense.replace(",", ""))
              : 0;

            totalIncome += income;
            totalExpense += expense;

            return (
              <tr key={value.description}>
                <td className="tableData">{value.income || ""}</td>
                <td className="tableData">{value.expense || ""}</td>
                <td className="tableData">{value.description}</td>
              </tr>
            );
          })}

          <tr>
            <td className="tableData">
              <strong>{totalIncome.toFixed(2)}</strong>
            </td>
            <td className="tableData">
              <strong>{totalExpense.toFixed(2)}</strong>
            </td>
            <td className="tableData">
              <strong>Total</strong>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="netWorth">
        <p id="percentIncome">
          Weeks Net Worth: $
          {(totalIncome + totalExpense).toFixed(2).toLocaleString()}
        </p>
        <p>
          Weeks Percentage Income:
          <span id="percentIncome">
            {(((totalIncome + totalExpense) / totalIncome) * 100)
              .toFixed(2)
              .toLocaleString()}
            %
          </span>
        </p>
      </div>
    </div>
  );
};
export default Income;
