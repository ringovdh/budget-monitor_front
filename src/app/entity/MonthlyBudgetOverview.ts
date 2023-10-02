import { BudgetOverviewPerCategory } from "./BudgetOverviewPerCategory";
import { MonthGraphData } from "./MonthGraphData";

export interface MonthlyBudgetOverview {
  transactionsPerCategoryList: BudgetOverviewPerCategory[];
  monthGraphData: MonthGraphData;
}
