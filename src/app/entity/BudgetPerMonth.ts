import { Transaction } from "../transaction/transaction";

export interface BudgetPerMonth {
  month: string,
  totalIncomingBudget: number,
  totalFixedOutgoingBudget: number,
  totalOutgoingBudget: number,
  totalSavings: number,
  transactions: Transaction[];
}
