const express = require('express');
const dotenv = require('dotenv');
const dbConnect = require('./config/db');
const transactionRoutes = require('./routes/transactionRoutes');
const reconciliationRoutes = require('./routes/reconciliationRoutes');

dotenv.config();
const app = express();
dbConnect();

app.use(express.json());

app.use('/api/transactions', transactionRoutes);
app.use('/api/reconciliation', reconciliationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
