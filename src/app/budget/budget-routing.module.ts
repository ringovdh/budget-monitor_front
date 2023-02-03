import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from "./index/index.component";
import { OverviewComponent } from "./overview/overview.component";
import {BudgetComponent} from "./budget/budget.component";

const routes: Routes = [
  { path: 'budget', redirectTo: 'budget/budget', pathMatch: 'full'},
  { path: 'budget/budget', component: BudgetComponent },
  { path: 'budget/overview', component: OverviewComponent },
  { path: 'budget/index', component: IndexComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudgetRoutingModule { }
