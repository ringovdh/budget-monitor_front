import { Transaction } from "../admin/transaction/transaction";
import {BudgetOverviewPerCategory} from "../entity/BudgetOverviewPerCategory";

export interface ImportResponse {
  newTransactions: Transaction[];
  existingTransactions: BudgetOverviewPerCategory[];



}
