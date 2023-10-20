import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetRoutingModule } from './budget-routing.module';
import { IndexComponent } from "./index/index.component";
import { OverviewComponent } from './overview/overview.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BudgetComponent } from './budget/budget.component';
import { SelectYearComponent } from '../forms/select-year/select-year.component'
import { SelectYearComponentModule } from '../forms/selectYearComponent.module';
import { OverviewGraphComponent } from './graphics/overview-graph/overview-graph.component';
import { FixedCostGraphComponent } from './graphics/fixed-cost-graph/fixed-cost-graph.component';
import { OtherCostGraphComponent } from './graphics/other-cost-graph/other-cost-graph.component';
import { ResumeComponent } from './resume/resume.component'

@NgModule({
  declarations: [
    IndexComponent,
    OverviewComponent,
    BudgetComponent,
    OverviewGraphComponent,
    FixedCostGraphComponent,
    OtherCostGraphComponent,
    ResumeComponent],
  exports: [
    IndexComponent,
    OverviewComponent,
    ResumeComponent
  ],
  imports: [
    CommonModule,
    BudgetRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SelectYearComponentModule
  ]
})
export class BudgetModule { }
