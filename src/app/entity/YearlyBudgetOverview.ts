import {BudgetPerMonth} from "./BudgetPerMonth";
import {GraphData} from "./GraphData";

export interface YearlyBudgetOverview {
  budgetsPerMonth: BudgetPerMonth[],
  graphData: GraphData
}
