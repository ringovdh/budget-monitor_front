import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from "./index/index.component";
import { OverviewComponent } from "./overview/overview.component";

const routes: Routes = [
  { path: 'budget', redirectTo: 'budget/overview', pathMatch: 'full'},
  { path: 'budget/overview', component: OverviewComponent },
  { path: 'budget/index', component: IndexComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudgetRoutingModule { }
