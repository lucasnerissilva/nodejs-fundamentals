import Transaction from './Transaction';

export interface TransactionDetails {
  transactions: Transaction[];
  balance: {
    income: number;
    outcome: number;
    total: number;
  };
}
