const app = require('./app');
const { monitorTransactions } = require('./utils/monitoring');

const PORT = process.env.PORT || 5000;

// Monitor transactions periodically
setInterval(monitorTransactions, 60000); // Every 60 seconds

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
