import { BudgetPerCategory } from "./BudgetPerCategory";
import { GraphData } from "./GraphData";
import { ProjectData } from "./ProjectData";

export interface MonthlyBudgetOverview {
  budgetsPerCategory: BudgetPerCategory[];
  graphData: GraphData;
  projectsData: ProjectData[]
}
