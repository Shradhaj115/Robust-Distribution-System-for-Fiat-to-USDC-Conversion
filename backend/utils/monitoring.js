const Transaction = require('../models/Transaction');
const { transferUSDC } = require('./web3');

async function monitorTransactions() {
  const pendingTransactions = await Transaction.find({ status: 'pending' });

  for (let transaction of pendingTransactions) {
    try {
      const receipt = await transferUSDC(transaction.userId.walletAddress, transaction.usdcAmount);
      transaction.status = 'completed';
      transaction.receipt = receipt;
      await transaction.save();
    } catch (error) {
      transaction.status = 'failed';
      transaction.error = error.message;
      await transaction.save();
      console.error('Transaction failed:', error);
    }
  }
}

module.exports = { monitorTransactions };
