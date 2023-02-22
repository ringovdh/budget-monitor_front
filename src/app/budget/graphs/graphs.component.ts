import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import { Chart } from 'chart.js/auto';
import { BudgetOverviewPerMonth } from 'src/app/entity/BudgetOverviewPerMonth';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css',
    '../../../assets/panel_layout.css']
})
export class GraphsComponent implements OnChanges {

  fixedOutgoingBudgetPieChart: any;
  outgoingBudgetPieChart: any;
  @Input() fixedOutgoingBudget: BudgetOverviewPerMonth[] = [];
  @Input() outgoingBudget: BudgetOverviewPerMonth[] = [];

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.createFixedOutgoingBudgetGraph();
    this.createOutgoingBudgetGraph();
  }

  private createOutgoingBudgetGraph() {
    if (this.outgoingBudget != null) {
      let categories: string[] = [];
      let amounts: number[] = [];
      let backgroundColors: string[] = ['#BFD7ED', '#60A3D9', '#0074B7', '#003B73', '#0000FF', '#4B7BF5', '#79A9F5', '#C2E2F5'];
      this.outgoingBudget.forEach(value => {
        categories.push(value.category.label);
        amounts.push(value.total);
      });

      if (this.outgoingBudgetPieChart != null) {
        this.outgoingBudgetPieChart.destroy();
      }

      this.outgoingBudgetPieChart = new Chart('pieChartOutgoingBudget', {
        type: 'pie',
        data: {
          labels: categories,
          datasets: [
            {
              data: amounts,
              borderColor: '#303e45',
              backgroundColor: backgroundColors,
              hoverOffset: 4
            }
          ]
        },
        options: {
          responsive: true
        }
      });
    }
  }

  private createFixedOutgoingBudgetGraph() {
    if (this.fixedOutgoingBudget != null) {
      let categories: string[] = [];
      let amounts: number[] = [];
      let backgroundColors: string[] = ['#05445E', '#189AB4', '#75E6DA', '#D4F1F4', '#145DA0', '#0C2D48', '#2E8BC0', '#B1D4E0'];
      this.fixedOutgoingBudget.forEach(value => {
        categories.push(value.category.label);
        amounts.push(value.total);
      });

      if (this.fixedOutgoingBudgetPieChart != null) {
        this.fixedOutgoingBudgetPieChart.destroy();
      }

      this.fixedOutgoingBudgetPieChart = new Chart('pieChartFixedOutgoingBudget', {
        type: 'pie',
        data: {
          labels: categories,
          datasets: [
            {
              data: amounts,
              borderColor: '#303e45',
              backgroundColor: backgroundColors,
              hoverOffset: 4
            }
          ]
        },
        options: {
          responsive: true
        }
      });
    }
  }
}
