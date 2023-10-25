import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { Category } from 'src/app/admin/category/category';
import { BudgetOverviewPerMonth } from 'src/app/entity/BudgetOverviewPerMonth';
import { BudgetPerMonth } from 'src/app/entity/BudgetPerMonth';
import { MonthlyBudgetOverview } from 'src/app/entity/MonthlyBudgetOverview';
import { Transaction } from 'src/app/admin/transaction/transaction';

@Component({
  selector: 'app-overview-graph',
  templateUrl: './overview-graph.component.html',
  styleUrls: ['./overview-graph.component.css',
    '../../../../assets/panel_layout.css',
    '../../../../assets/graph_layout.css']
})
export class OverviewGraphComponent implements OnChanges {

  overviewBudgetCharts: any;
  @Input() monthlyBudgetOverview: MonthlyBudgetOverview;
  totalIncomming: number = 0;
  totalFixedCost: number = 0;
  totalOutgoing: number = 0;
  totalSavings: number = 0;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.createOverviewBudgetGraphs();
  }

  createOverviewBudgetGraphs() {
    this.resetAmounts();
    if (this.overviewBudgetCharts != null) {
      this.overviewBudgetCharts.destroy();
    }
    var ctx = document.getElementById('chartsOverviewBudget');
    this.overviewBudgetCharts = new Chart('chartsOverviewBudget', {
      type: 'bar',
      data: {
        datasets: [
          {
            label: 'Vaste kosten',
            data: this.monthlyBudgetOverview.monthGraphData.fixedCostAmounts,
            backgroundColor: '#b4d9ec',
            stack: 'combined'
          },
          {
            label: 'Algemene kosten',
            data: this.monthlyBudgetOverview.monthGraphData.otherCostAmounts,
            backgroundColor: '#0d97dc',
            stack: 'combined'
          },
          {
            type: 'line',
            label: 'Inkomsten',
            data: this.monthlyBudgetOverview.monthGraphData.incomingAmounts,
            borderColor: '#d473aa',
            tension: 0.2,
            order: 1
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          }
        },
        scales: {
          y: {
            stacked: true
          }
        }
      }
    });
  }

  calculateIncommingAmounts = () => {
    const groups = this.monthlyBudgetOverview.monthGraphData.incomingAmounts
    return groups;
  }

  /**calculateSavingAmounts = () => {
    let savingAmounts: number[] = [];
    let myDataset = this.calculateSavingBudgetThisMonth();
    myDataset.forEach((value: number, key: Date) => {
      this.graphLabels.push(key + '');
      savingAmounts.push(value)
    });
    return savingAmounts;
  }

  private calculateSavingBudgetThisMonth = () => {
    let groups: Map<Date, number> = new Map<Date, number>();
    this.budgetOverviewPerMonth
      .filter(overviewPerMonth => {
        return overviewPerMonth.category.saving}
      )
      .flatMap(value => {
        return value.transactions}
      )
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .forEach(t => {
        let _period = t.date;
        groups.set(_period, this.calculateTotalSavingAmount(t));
      });
    return groups
  }**/

  private calculateTotalSavingAmount = (t: Transaction) => {
    let result = this.totalSavings + t.amount;
    this.totalSavings = result;
    return result;
  }

  private calculateTotalAmount = (t: Transaction) => {
    let result = this.totalIncomming + t.amount;
    this.totalIncomming = result;
    return result;
  }

  private resetAmounts() {
    this.totalIncomming = 0;
  }

}
