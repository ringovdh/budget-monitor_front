import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BudgetRoutingModule } from './budget-routing.module';
import { IndexComponent } from "./index/index.component";
import { OverviewComponent } from './overview/overview.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BudgetComponent } from './budget/budget.component';
import { GraphsComponent } from './graphs/graphs.component';


@NgModule({
  declarations: [IndexComponent, OverviewComponent, BudgetComponent, GraphsComponent],
    exports: [
        IndexComponent,
        OverviewComponent
    ],
  imports: [
    CommonModule,
    BudgetRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BudgetModule { }
