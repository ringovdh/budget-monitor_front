import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxPaginationModule } from "ngx-pagination";
import { OverviewComponent } from './overview/overview.component';
import { CommonModule } from '@angular/common';
import { ProjectsRoutingModule } from "./projects-routing.module";
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    OverviewComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ]
})
export class ProjectsModule { }
