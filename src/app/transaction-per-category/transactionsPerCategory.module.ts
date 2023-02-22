import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { TransactionsPerCategoryRoutingModule } from './transactionsPerCategory-routing.module';
import { TransactionsPerCategoryComponent } from './transactions-per-category/transactions-per-category.component';
import { OverviewComponent } from './overview/overview.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IndexComponent } from './index/index.component';
import { GraphsComponent } from './graphs/graphs.component';


@NgModule({
  declarations: [
    TransactionsPerCategoryComponent,
    OverviewComponent,
    IndexComponent,
    GraphsComponent,
  ],
  imports: [
    CommonModule,
    TransactionsPerCategoryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})

export class TransactionsPerCategoryModule { }
