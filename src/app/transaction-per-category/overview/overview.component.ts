import { Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import { BudgetOverviewPerCategory } from 'src/app/entity/BudgetOverviewPerCategory';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css',
    '../../../assets/panel_layout.css']
})
export class OverviewComponent implements OnChanges {

  @Input() budgetOverview: BudgetOverviewPerCategory[] = [];
  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

}
