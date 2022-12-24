import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImportRoutingModule } from './import-routing.module';
import {ImportComponent} from "./import/import.component";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ImportComponent
  ],
  imports: [
    CommonModule,
    ImportRoutingModule,
    ReactiveFormsModule
  ]
})
export class ImportModule { }
