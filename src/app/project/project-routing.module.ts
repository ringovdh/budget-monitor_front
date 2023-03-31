import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { IndexComponent } from "./index/index.component";

const routes: Routes = [
  { path: 'project', redirectTo: 'project/index', pathMatch: 'full'},
  { path: 'project/index', component: IndexComponent },
  //{ path: 'project/create', component: CreateComponent },
  //{ path: 'project/:projectId/edit', component: EditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class ProjectRoutingModule { }
