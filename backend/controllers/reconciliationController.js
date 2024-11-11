const Transaction = require('../models/Transaction');

exports.reconcileTransactions = async (req, res) => {
  try {
    const pendingTransactions = await Transaction.find({ status: 'pending' });
    pendingTransactions.forEach(async (transaction) => {
      transaction.status = 'completed'; 
      await transaction.save();
    });
    res.status(200).json({ message: 'Reconciliation complete' });
  } catch (error) {
    res.status(500).json({ message: 'Reconciliation failed', error });
  }
};
