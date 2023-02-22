import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionsPerCategoryComponent } from './transactions-per-category/transactions-per-category.component';

const routes: Routes = [
  { path: 'transaction/category', component: TransactionsPerCategoryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TransactionsPerCategoryRoutingModule { }
