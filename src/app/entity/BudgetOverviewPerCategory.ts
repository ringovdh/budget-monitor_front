import {Category} from "../category/category";
import {Transaction} from "../transaction/transaction";

export interface BudgetOverviewPerCategory {
  category: Category;
  transactions: Transaction[];
  total: number;
}
