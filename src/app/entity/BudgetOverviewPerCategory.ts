import {Category} from "../category/category";
import {Transaction} from "../transaction/transaction";

export interface BudgetOverviewPerCategory {
  year: number;
  categoryLabel: string;
  transactions: Transaction[];
  total: number;
}
