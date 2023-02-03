import {Component, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css',
    '../../../assets/panel_layout.css']
})
export class GraphsComponent implements OnChanges {

  pieChart: Chart;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.pieChart != null) {
      this.pieChart.destroy();
    }

this.pieChart = new Chart('pieChartMonths', {
  type: 'pie', data: {
    labels: periods,
    datasets: [
      { data: amounts,
        borderColor: '#303e45',
        backgroundColor: backgroundColors,
      }
    ]
  },
  options: {
    legend: {
      display: true
    },
    scales: {
      xAxes: [{
        display: false
      }],
      yAxes: [{
        display: false
      }],
    }
  }
});
}
