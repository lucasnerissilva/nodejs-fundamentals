import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';
import { TransactionDetails } from '../models/TransactionDetails';

class TransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public create(transaction: Transaction): Transaction {
    // TODO
    const balance = this.transactionsRepository.getBalance();

    if (transaction.type === 'outcome') {
      if (balance.total < transaction.value)
        throw new Error('your balande is insufficient');
    }

    return this.transactionsRepository.create(transaction);
  }

  public getAll(): TransactionDetails {
    return {
      transactions: this.transactionsRepository.all(),
      balance: this.transactionsRepository.getBalance(),
    } as TransactionDetails;
  }
}

export default TransactionService;
