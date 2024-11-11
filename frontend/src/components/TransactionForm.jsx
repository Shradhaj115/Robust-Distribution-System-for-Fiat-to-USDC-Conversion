import React, { useState } from 'react';
import { initiateTransaction } from '../utils/api';

const TransactionForm = () => {
  const [fiatAmount, setFiatAmount] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await initiateTransaction(fiatAmount);
      alert('Transaction initiated successfully!');
      setFiatAmount('');
    } catch (error) {
      alert('Failed to initiate transaction');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded shadow">
      <input
        type="number"
        placeholder="Enter fiat amount"
        value={fiatAmount}
        onChange={(e) => setFiatAmount(e.target.value)}
        className="border p-2 mb-4 w-full"
        required
      />
      <button
        type="submit"
        className="bg-blue-600 text-white p-2 w-full"
        disabled={loading}
      >
        {loading ? 'Processing...' : 'Convert to USDC'}
      </button>
    </form>
  );
};

export default TransactionForm;
