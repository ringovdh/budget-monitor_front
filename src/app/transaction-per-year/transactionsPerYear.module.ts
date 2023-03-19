import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { TransactionPerYearComponent } from "./transaction-per-year/transaction-per-year.component";
import { SelectYearComponentModule } from '../forms/selectYearComponent.module'
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TransactionsPerYearRoutingModule } from "./transactionsPerYear-routing.module";
import { OverviewComponent } from './overview/overview.component';
import { IndexComponent } from './index/index.component';
import { GraphsComponent } from './graphs/graphs.component';

@NgModule({
  declarations: [
    TransactionPerYearComponent,
    OverviewComponent,
    IndexComponent,
    GraphsComponent
  ],
  imports: [
    CommonModule,
    TransactionsPerYearRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SelectYearComponentModule
  ]
})

export class TransactionsPerYearModule { }
