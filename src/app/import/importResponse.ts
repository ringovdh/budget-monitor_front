import { Transaction } from "../transaction/transaction";
import {BudgetOverviewPerCategory} from "../entity/BudgetOverviewPerCategory";

export interface ImportResponse {
  newTransactions: Transaction[] ;
  existingTransactions: BudgetOverviewPerCategory[] ;



}
