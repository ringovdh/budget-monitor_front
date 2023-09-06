import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Chart } from 'chart.js/auto';
import { Category } from 'src/app/admin/category/category';
import { BudgetOverviewPerMonth } from 'src/app/entity/BudgetOverviewPerMonth';
import { BudgetPerMonth } from 'src/app/entity/BudgetPerMonth';
import { Transaction } from 'src/app/transaction/transaction';

@Component({
  selector: 'app-overview-graph',
  templateUrl: './overview-graph.component.html',
  styleUrls: ['./overview-graph.component.css',
    '../../../../assets/panel_layout.css',
    '../../../../assets/graph_layout.css']
})
export class OverviewGraphComponent implements OnChanges {

  overviewBudgetCharts: any;
  @Input() budgetOverviewPerMonth: BudgetOverviewPerMonth[];
  totalIncomming: number = 0;
  totalFixedCost: number = 0;
  totalOutgoing: number = 0;
  totalSavings: number = 0;
  graphLabels: string[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.createOverviewBudgetGraphs();
  }

  createOverviewBudgetGraphs() {
    this.resetAmounts();
    this.graphLabels = [];
    if (this.overviewBudgetCharts != null) {
      this.overviewBudgetCharts.destroy();
    }
    var ctx = document.getElementById('chartsOverviewBudget');
    this.overviewBudgetCharts = new Chart('chartsOverviewBudget', {
      data: {
        labels: this.graphLabels,
        datasets: [
          {
            type: 'line',
            label: 'Inkomsten deze maand',
            data: this.calculateIncommingAmounts(),
            borderColor: '#738FD4',
            tension: 0.2
          },
          {
            type: 'line',
            label: 'Sparen deze maand',
            data: this.calculateSavingAmounts(),
            borderColor: '#d473aa',
            tension: 0.2
          }
        ]
      },
      options: {
        responsive: true
      }
    });
  }

  calculateIncommingAmounts = () => {
    let incommingAmounts: number[] = [];
    let myDataset = this.calculateIncomingBudgetThisMonth();
    myDataset.forEach((value: number, key: Date) => {
      this.graphLabels.push(key + '');
      incommingAmounts.push(value)
    });
    return incommingAmounts;
  }

  private calculateIncomingBudgetThisMonth = () => {
    let groups: Map<Date, number> = new Map<Date, number>();
    this.budgetOverviewPerMonth
      .filter(overviewPerMonth => {
        return overviewPerMonth.category.revenue}
      )
      .flatMap(value => {
        return value.transactions}
      )
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .forEach(t => {
          let _period = t.date;
          groups.set(_period, this.calculateTotalAmount(t));
        });
    return groups
  }

  calculateSavingAmounts = () => {
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
  }

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
