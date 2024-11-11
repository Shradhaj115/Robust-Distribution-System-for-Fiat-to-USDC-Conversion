import React from 'react';
import TransactionForm from '../components/TransactionForm';

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Fiat to USDC Conversion</h1>
      <TransactionForm />
    </div>
  );
};

export default Home;
