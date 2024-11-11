const Transaction = require('../models/Transaction');

exports.createTransaction = async (req, res) => {
  const { userId, fiatAmount, usdcAmount } = req.body;
  
  const transaction = new Transaction({ userId, fiatAmount, usdcAmount });
  await transaction.save();
  
  res.status(201).json({ message: 'Transaction created', transaction });
};
