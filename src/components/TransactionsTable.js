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
  console.log(transactions);
  useEffect(() => {
    const fetchDataOnLoad = async () => {
      const { data } = await getTransactions();
      setTransactions(data);
    };
    fetchDataOnLoad();
  }, []);

  return (
    <div className="container">
      <table>
        <thead>
          <tr className="month-row">
            <th colSpan="3">August</th>
          </tr>
          <tr className="header-row">
            <th>Customer Name</th>
            <th>Purchases</th>
            <th>Total Spent</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Anom</td>
            <td>19</td>
            <td>Male</td>
          </tr>
          <tr>
            <td>Megha</td>
            <td>19</td>
            <td>Female</td>
          </tr>
          <tr>
            <td>Subham</td>
            <td>25</td>
            <td>Male</td>
          </tr>
        </tbody>
      </table>
      <table>
        <thead>
          <tr className="month-row">
            <th colSpan="3">August</th>
          </tr>
          <tr className="header-row">
            <th>Customer Name</th>
            <th>Purchases</th>
            <th>Total Spent</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Anom</td>
            <td>19</td>
            <td>Male</td>
          </tr>
          <tr>
            <td>Megha</td>
            <td>19</td>
            <td>Female</td>
          </tr>
          <tr>
            <td>Subham</td>
            <td>25</td>
            <td>Male</td>
          </tr>
        </tbody>
      </table>

      <table>
        <thead>
          <tr className="month-row">
            <th colSpan="3">August</th>
          </tr>
          <tr className="header-row">
            <th>Customer Name</th>
            <th>Purchases</th>
            <th>Total Spent</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Anom</td>
            <td>19</td>
            <td>Male</td>
          </tr>
          <tr>
            <td>Megha</td>
            <td>19</td>
            <td>Female</td>
          </tr>
          <tr>
            <td>Subham</td>
            <td>25</td>
            <td>Male</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;
