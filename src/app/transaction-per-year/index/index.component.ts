import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BudgetPerMonth } from 'src/app/entity/BudgetPerMonth';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css',
    '../../../assets/panel_layout.css']
})
export class IndexComponent implements OnChanges {

  @Input() budgetResultsPerMonth: BudgetPerMonth[];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) { }


}
