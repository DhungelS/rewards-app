import data from "../data/transactions.json";
import React, { useEffect, useState } from "react";
import "./transactions-table.css";

const TransactionsTable = () => {
  const [transactions, setTransactions] = useState({
    august: [],
    september: [],
    october: [],
  });

  async function getTransactions() {
    return new Promise((resolve) =>
      setTimeout(
        () =>
          resolve({
            data: data,
          }),
        750
      )
    );
  }

  const calculatePoints = (month, person) => {
    return (
      (transactions[month]
        .filter((transaction) => transaction.customerName === person)
        .reduce((total, transaction) => {
          total += transaction.total;
          return Math.round(total);
        }, 0) -
        100) *
        2 +
      50
    );
  };

  useEffect(() => {
    const fetchDataOnLoad = async () => {
      const { data } = await getTransactions();
      const augustTransactions = data.transactions
        .filter(
          (a) =>
            new Date(a.date) - new Date("8/01/2022") > 0 &&
            new Date(a.date) - new Date("9/01/2022") < 0
        )
        .sort((a, b) => {
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        });
      const septTransactions = data.transactions
        .filter(
          (a) =>
            new Date(a.date) - new Date("9/01/2022") > 0 &&
            new Date(a.date) - new Date("10/01/2022") < 0
        )
        .sort((a, b) => {
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        });

      const octTransactions = data.transactions
        .filter(
          (a) =>
            new Date(a.date) - new Date("10/01/2022") > 0 &&
            new Date(a.date) - new Date("11/01/2022") < 0
        )
        .sort((a, b) => {
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        });
      setTransactions({
        ...transactions,
        august: augustTransactions,
        september: septTransactions,
        october: octTransactions,
      });
    };
    fetchDataOnLoad();
  }, []);

  return (
    <div className="container">
      <div>
        <h3>Nathanil Laurence Points:</h3>

        <ul>
          <li>
            August:
            {calculatePoints("august", "Nathanil Laurence")}
          </li>
          <li>
            September:
            {calculatePoints("september", "Nathanil Laurence")}
          </li>
          <li>
            October:
            {calculatePoints("october", "Nathanil Laurence")}
          </li>
          <ul>
            <li>
              Total:
              {calculatePoints("august", "Nathanil Laurence") +
                calculatePoints("september", "Nathanil Laurence") +
                calculatePoints("october", "Nathanil Laurence")}
            </li>
          </ul>
        </ul>

        <h3>Evangelina Jerred Points:</h3>
        <ul>
          <li>
            August:
            {calculatePoints("august", "Evangelina Jerred")}
          </li>
          <li>
            September:
            {calculatePoints("september", "Evangelina Jerred")}
          </li>
          <li>
            October:
            {calculatePoints("october", "Evangelina Jerred")}
          </li>
          <ul>
            <li>
              Total:{" "}
              {calculatePoints("august", "Evangelina Jerred") +
                calculatePoints("september", "Evangelina Jerred") +
                calculatePoints("october", "Evangelina Jerred")}
            </li>
          </ul>
        </ul>

        <h3>Cameron Smith Points:</h3>
        <ul>
          <li>
            August:
            {calculatePoints("august", "Cameron Smith") > 0
              ? calculatePoints("august", "Cameron Smith")
              : 0}
          </li>
          <li>
            September:
            {calculatePoints("september", "Cameron Smith") > 0
              ? calculatePoints("september", "Cameron Smith")
              : 0}
          </li>
          <li>
            October:
            {calculatePoints("october", "Cameron Smith") > 0
              ? calculatePoints("october", "Cameron Smith")
              : 0}
          </li>
          <ul>
            <li>
              Total:
              {calculatePoints("august", "Cameron Smith") > 0
                ? calculatePoints("august", "Cameron Smith")
                : 0 + calculatePoints("september", "Cameron Smith") > 0
                ? calculatePoints("september", "Cameron Smith")
                : 0 + calculatePoints("october", "Cameron Smith") > 0
                ? calculatePoints("october", "Cameron Smith")
                : 0}
            </li>
          </ul>
        </ul>
      </div>
      <table>
        <thead>
          <tr className="month-row">
            <th colSpan="3">August Transactions</th>
          </tr>
          <tr className="header-row">
            <th>Customer Name</th>
            <th>Transaction Date</th>
            <th>Total Spent</th>
          </tr>
        </thead>
        <tbody>
          {transactions.august.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.customerName}</td>
              <td>{transaction.date}</td>
              <td>{transaction.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <table>
        <thead>
          <tr className="month-row">
            <th colSpan="3">September Transactions</th>
          </tr>
          <tr className="header-row">
            <th>Customer Name</th>
            <th>Transaction Date</th>
            <th>Total Spent</th>
          </tr>
        </thead>
        <tbody>
          {transactions.september.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.customerName}</td>
              <td>{transaction.date}</td>
              <td>{transaction.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <table>
        <thead>
          <tr className="month-row">
            <th colSpan="3">October Transactions</th>
          </tr>
          <tr className="header-row">
            <th>Customer Name</th>
            <th>Transaction Date</th>
            <th>Total Spent</th>
          </tr>
        </thead>
        <tbody>
          {transactions.october.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.customerName}</td>
              <td>{transaction.date}</td>
              <td>{transaction.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;
