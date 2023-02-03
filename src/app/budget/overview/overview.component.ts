import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {BudgetOverviewPerCategory} from "../../entity/BudgetOverviewPerCategory";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css',
    '../../../assets/panel_layout.css']
})
export class OverviewComponent implements OnChanges {

  @Input() budgetOverview: BudgetOverviewPerCategory[] = [];
  incomingBudget: BudgetOverviewPerCategory[] = [];
  outgoingBudget: BudgetOverviewPerCategory[] = [];
  fixedOutgoingBudget: BudgetOverviewPerCategory[] = [];
  savings: BudgetOverviewPerCategory[] = [];
  totalIncome: number = 0;
  totalFixedCost: number = 0;
  totalOutgoing: number = 0;
  totalSavings: number = 0;
  totalAmount: number = 0;

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    this.fixedOutgoingBudget = this.budgetOverview.filter(o => o.category.fixedcost);
    this.incomingBudget = this.budgetOverview.filter(o => o.category.revenue);
    this.savings = this.budgetOverview.filter(o => o.category.saving);
    this.outgoingBudget = this.budgetOverview.filter(o => (!o.category.fixedcost && !o.category.revenue && !o.category.saving));
    this.countTotals();
  }

  countTotals() {
    this.resetTotals();
    this.totalIncome = this.incomingBudget.map(o => o.total).reduce((a, c) => { return a + c }, 0);
    this.totalFixedCost = this.fixedOutgoingBudget.map(o => o.total).reduce((a, c) => { return a + c }, 0);
    this.totalOutgoing = this.outgoingBudget.map(o => o.total).reduce((a, c) => { return a + c }, 0);
    this.totalSavings = -this.savings.map(o => o.total).reduce((a, c) => { return a + c }, 0);

    this.totalAmount = this.totalIncome
      - Math.abs(this.totalFixedCost)
      - Math.abs(this.totalOutgoing);
  }

  resetTotals() {
    this.totalIncome = 0;
    this.totalOutgoing = 0;
    this.totalFixedCost = 0;
    this.totalSavings = 0;
    this.totalAmount = 0;
  }

}
