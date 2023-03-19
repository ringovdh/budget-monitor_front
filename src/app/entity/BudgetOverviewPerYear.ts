import {Category} from "../category/category";
import {Transaction} from "../transaction/transaction";
import { BudgetOverviewPerMonth } from "./BudgetOverviewPerMonth";

export interface BudgetOverviewPerYear {
  month: number;
  transactionsPerMonth: BudgetOverviewPerMonth[];
}
