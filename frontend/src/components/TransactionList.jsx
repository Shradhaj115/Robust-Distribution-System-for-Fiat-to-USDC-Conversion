import React, { useEffect, useState } from 'react';
import { fetchTransactions } from '../utils/api';

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTransactions = async () => {
      try {
        const data = await fetchTransactions();
        setTransactions(data);
      } catch (error) {
        alert("Failed to load transactions.");
      } finally {
        setLoading(false);
      }
    };
    loadTransactions();
  }, []);

  return (
    <div className="mt-4">
      <h2 className="text-xl font-semibold mb-4">Transaction History</h2>
      {loading ? (
        <p>Loading...</p>
      ) : transactions.length > 0 ? (
        <ul>
          {transactions.map((transaction) => (
            <li key={transaction._id} className="border p-2 mb-2">
              Amount: ${transaction.fiatAmount} - Status: {transaction.status}
            </li>
          ))}
        </ul>
      ) : (
        <p>No transactions available.</p>
      )}
    </div>
  );
};

export default TransactionList;
