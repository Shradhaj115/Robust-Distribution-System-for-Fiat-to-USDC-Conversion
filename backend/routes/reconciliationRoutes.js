const express = require('express');
const { reconcileTransactions } = require('../controllers/reconciliationController');
const router = express.Router();

router.get('/reconcile', reconcileTransactions);

module.exports = router;
