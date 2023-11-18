import { BudgetPerCategory } from "./BudgetPerCategory";
import { GraphData } from "./GraphData";
import {ProjectData} from "./Projectdata";

export interface MonthlyBudgetOverview {
  budgetsPerCategory: BudgetPerCategory[];
  graphData: GraphData;
  projectsData: ProjectData[]
}
