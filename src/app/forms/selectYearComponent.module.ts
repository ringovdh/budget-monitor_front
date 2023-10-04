import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import { CommonModule } from '@angular/common';
import { SelectYearComponent } from "./select-year/select-year.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MultiSelectYearComponent } from './multi-select-year/multi-select-year.component';
import {NgMultiSelectDropDownModule} from "ng-multiselect-dropdown";

@NgModule({
  declarations: [
    SelectYearComponent,
    MultiSelectYearComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule,
  ],
  exports: [
    SelectYearComponent,
    MultiSelectYearComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})

export class SelectYearComponentModule {}
