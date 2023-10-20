import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BudgetOverviewPerMonth } from 'src/app/entity/BudgetOverviewPerMonth';
import { BudgetOverviewPerYear } from 'src/app/entity/BudgetOverviewPerYear';
import { BudgetPerMonth } from 'src/app/entity/BudgetPerMonth';

@Component({
  selector: 'app-year-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css',
    '../../../assets/panel_layout.css']
})
export class OverviewComponent implements OnChanges {

  @Input() budgetOverview: BudgetOverviewPerYear[] = [];
  @Input() year: number;
  totalIncome: number = 0;
  totalFixedCost: number = 0;
  totalOutgoing: number = 0;
  totalAmount: number = 0;

  budgetResultsPerMonth: BudgetPerMonth[];

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.budgetResultsPerMonth = [];
    this.budgetOverview.forEach(o => {
      this.budgetResultsPerMonth.push(
        {
          month: this.mapMonth(o.month),
          totalIncomingBudget: this.countTotalBudget(o.transactionsPerMonth.filter(o => o.category.revenue)),
          totalFixedOutgoingBudget: this.countTotalBudget(o.transactionsPerMonth.filter(o => o.category.fixedcost)),
          totalOutgoingBudget: this.countTotalBudget(o.transactionsPerMonth.filter(o => (!o.category.fixedcost && !o.category.revenue && !o.category.saving))),
          totalSavings: -this.countTotalBudget(o.transactionsPerMonth.filter(o => o.category.saving)),
        } as BudgetPerMonth);
    });
    this.countTotals();
  }

  mapMonth(monthNumber: number) {
    switch (monthNumber) {
      case 1: return 'januari'
      case 2: return 'februari'
      case 3: return 'maart'
      case 4: return 'april'
      case 5: return 'mei'
      case 6: return 'juni'
      case 7: return 'juli'
      case 8: return 'augustus'
      case 9: return 'september'
      case 10: return 'oktober'
      case 11: return 'november'
      case 12: return 'december'
      default: return ''
    }
  }
  countTotalBudget(transactions: BudgetOverviewPerMonth[]) {
    if (transactions != undefined && transactions.length > 0) {
      return transactions.map(o => o.total).reduce((a, c) => {
        return a + c
      }, 0);
    } else {
      return 0;
    }
  }

  countTotals() {
    this.resetTotals();
    this.totalIncome = this.budgetResultsPerMonth.map(o => o.totalIncomingBudget).reduce((a, c) => {
      return a + c
    }, 0);
    this.totalFixedCost = this.budgetResultsPerMonth.map(o => o.totalFixedOutgoingBudget).reduce((a, c) => {
      return a + c
    }, 0);
    this.totalOutgoing = this.budgetResultsPerMonth.map(o => o.totalOutgoingBudget).reduce((a, c) => {
      return a + c
    }, 0);

    this.totalAmount = this.totalIncome
      + this.totalFixedCost
      + this.totalOutgoing;
  }

  resetTotals() {
    this.totalIncome = 0;
    this.totalFixedCost = 0;
    this.totalOutgoing = 0;
    this.totalAmount = 0;
  }

}
