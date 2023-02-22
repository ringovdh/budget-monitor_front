import {Category} from "../category/category";
import {Transaction} from "../transaction/transaction";

export interface BudgetOverviewPerMonth {
  category: Category;
  transactions: Transaction[];
  total: number;
}
