import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-multi-select-year',
  templateUrl: './multi-select-year.component.html',
  styleUrls: ['./multi-select-year.component.css']
})
export class MultiSelectYearComponent implements OnInit {

  selectedItems: {value:number, year: string}[];
  dropdownSettings:IDropdownSettings = {};
  dropdownList: {value:number, year: string}[];

  constructor() { }

  ngOnInit(): void {
    this.prepareYears();
    this.prepareSettings();
  }

  searchYearForm = new FormGroup({
    year: new FormControl('', Validators.required)
  })

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  private prepareSettings = () => {
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Selecteer alles',
      unSelectAllText: 'Deselecteer alles',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  private prepareYears() {
    this.dropdownList = [
      { value: 2016, year: '2016' },
      { value: 2017, year: '2017' },
      { value: 2018, year: '2018' },
      { value: 2019, year: '2019' },
      { value: 2020, year: '2020' },
      { value: 2021, year: '2021' },
      { value: 2022, year: '2022' },
      { value: 2023, year: '2023' },
      { value: 2024, year: '2024' },
      { value: 2025, year: '2025' }
    ];
  }
}
