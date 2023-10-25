import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { BudgetPerYearComponent } from "./budget-per-year/budget-per-year.component";
import { SelectYearComponentModule } from '../forms/selectYearComponent.module'
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BudgetPerYearRoutingModule } from "./budgetPerYear-routing.module";
import { OverviewComponent } from './overview/overview.component';
import { IndexComponent } from './index/index.component';
import { GraphsComponent } from './graphs/graphs.component';
import {MultiSelectModule} from "@syncfusion/ej2-angular-dropdowns";
import {BudgetPerMonthModule} from "../budget-per-month/budgetPerMonth.module";

@NgModule({
  declarations: [
    BudgetPerYearComponent,
    OverviewComponent,
    IndexComponent,
    GraphsComponent
  ],
    imports: [
        CommonModule,
        BudgetPerYearRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        SelectYearComponentModule,
        MultiSelectModule,
        BudgetPerMonthModule
    ]
})

export class BudgetPerYearModule { }
