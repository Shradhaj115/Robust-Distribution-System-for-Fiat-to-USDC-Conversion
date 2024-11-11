import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Function to initiate a fiat-to-USDC conversion
export const initiateTransaction = async (fiatAmount) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/transaction`, { fiatAmount });
    return response.data;
  } catch (error) {
    console.error("Failed to initiate transaction:", error);
    throw error;
  }
};

// Function to fetch transaction history
export const fetchTransactions = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/transactions`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch transactions:", error);
    throw error;
  }
};
