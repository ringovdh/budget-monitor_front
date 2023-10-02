import { BudgetOverviewPerCategory } from "./BudgetOverviewPerCategory";

export interface MonthGraphData {
  days: number[];
  incomingAmounts: Map<number, number>;
  fixedCostAmounts: Map<number, number>;
  otherCostAmounts: Map<number, number>;
}
