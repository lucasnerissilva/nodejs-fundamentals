import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    // TODO
    return this.transactions;
  }

  public getBalance(): Balance {
    // TODO
    const incomeTransactions = this.transactions.filter(
      t => t.type === 'income',
    );

    let income = 0;

    if (incomeTransactions && incomeTransactions.length)
      income = incomeTransactions.map(t => t.value).reduce((a, b) => a + b);

    let outcome = 0;

    const outcomeTransactions = this.transactions.filter(
      t => t.type === 'outcome',
    );

    if (outcomeTransactions && outcomeTransactions.length)
      outcome = outcomeTransactions.map(t => t.value).reduce((a, b) => a + b);

    return { income, outcome, total: income - outcome } as Balance;
  }

  public create({ title, value, type }: Transaction): Transaction {
    // TODO
    const transaction = new Transaction({ title, value, type });
    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
