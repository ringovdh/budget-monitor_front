import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImportRoutingModule } from './import-routing.module';
import {ImportComponent} from "./import/import.component";
import {ReactiveFormsModule} from "@angular/forms";
import {BudgetModule} from "../budget/budget.module";
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [
    ImportComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    ImportRoutingModule,
    ReactiveFormsModule,
    BudgetModule
  ]
})
export class ImportModule { }
