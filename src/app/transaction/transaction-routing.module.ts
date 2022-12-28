import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from "./index/index.component";

const routes: Routes = [
  { path: 'transaction', redirectTo:'transaction/index', pathMatch: 'full' },
  { path: 'transaction/index', component: IndexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }
