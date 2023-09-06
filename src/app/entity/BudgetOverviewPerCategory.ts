import {Category} from "../admin/category/category";
import {Transaction} from "../transaction/transaction";

export interface BudgetOverviewPerCategory {
  year: number;
  category: Category;
  transactions: Transaction[];
  total: number;
}
