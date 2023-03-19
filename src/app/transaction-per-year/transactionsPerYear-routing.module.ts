import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionPerYearComponent } from './transaction-per-year/transaction-per-year.component';

const routes: Routes = [
  { path: 'transaction/year', component: TransactionPerYearComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TransactionsPerYearRoutingModule { }
