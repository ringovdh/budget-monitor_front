import { BudgetPerCategory } from "./BudgetPerCategory";
import { GraphData } from "./GraphData";

export interface MonthlyBudgetOverview {
  budgetsPerCategory: BudgetPerCategory[];
  graphData: GraphData;
}
