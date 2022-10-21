import data from "../data/transactions.json";
import React, { useEffect } from "react";

const TransactionsTable = () => {

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

  useEffect(() => {
    const fetchDataOnLoad = async () => {
      const {data} = await getTransactions();
      console.log(data)
    }
    fetchDataOnLoad()
  }, []);

  return (
    <div>
      <table>
        <tr>
          <th>Customer Name</th>
          <th>Purchases</th>
          <th>Gender</th>
        </tr>
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
      </table>
    </div>
  );
};

export default TransactionsTable;
