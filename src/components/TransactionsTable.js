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
  console.log("tst", transactions);
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
          {transactions.august.map((transaction) => (
            <tr>
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
          {transactions.september.map((transaction) => (
            <tr>
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
          {transactions.october.map((transaction) => (
            <tr>
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
