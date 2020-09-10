import { Router } from 'express';

import TransactionsRepository from '../repositories/TransactionsRepository';
import TransactionService from '../services/CreateTransactionService';
import Transaction from '../models/Transaction';

const transactionRouter = Router();

const transactionsRepository = new TransactionsRepository();

const transactionService = new TransactionService(transactionsRepository);

transactionRouter.get('/', (request, response) => {
  try {
    // TODO
    return response.status(200).json(transactionService.getAll());
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

transactionRouter.post('/', (request, response) => {
  try {
    // TODO
    const transaction = request.body as Transaction;
    const transactionCreated = transactionService.create(transaction);
    return response.status(201).json(transactionCreated);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default transactionRouter;
