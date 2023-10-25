import {Category} from "../admin/category/category";
import {Transaction} from "../admin/transaction/transaction";
import { BudgetOverviewPerMonth } from "./BudgetOverviewPerMonth";

export interface BudgetOverviewPerYear {
  month: number;
  transactionsPerMonth: BudgetOverviewPerMonth[];
}
