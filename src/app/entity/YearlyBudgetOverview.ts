import {BudgetPerMonth} from "./BudgetPerMonth";
import {GraphData} from "./GraphData";
import {ProjectData} from "./Projectdata";

export interface YearlyBudgetOverview {
  budgetsPerMonth: BudgetPerMonth[],
  graphData: GraphData,
  projectsData: ProjectData[]
}
