import { Transaction } from "../transaction/transaction";

export interface ImportResponse {
  filteredTransactions: Transaction[] ;
  existingTransactions: Transaction[] ;
}
