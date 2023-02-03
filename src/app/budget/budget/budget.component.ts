import { Component, OnInit } from '@angular/core';
import {BudgetOverviewPerCategory} from "../../entity/BudgetOverviewPerCategory";
import {BudgetService} from "../budget.service";

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css',
    '../../../assets/panel_layout.css']
})
export class BudgetComponent implements OnInit {

  budgetOverview: BudgetOverviewPerCategory[] = [];
  months: {value:number, name: string}[];
  years: number[];

  constructor(public budgetService: BudgetService) { }

  ngOnInit(): void {
    this.prepareMonths();
    this.prepareYears();
  }

  submit(periode: any) {
    this.budgetService.getBudgetOverviewByPeriod(periode.month, periode.year).subscribe((data) => {
      this.budgetOverview = data;
      console.log('data: ', data)
    });
  }

  private prepareMonths() {
    this.months = [
      { value: 1, name: 'januari' },
      { value: 2, name: 'februari' },
      { value: 3, name: 'maart' },
      { value: 4, name: 'april' },
      { value: 5, name: 'mei' },
      { value: 6, name: 'juni' },
      { value: 7, name: 'juli' },
      { value: 8, name: 'augustus' },
      { value: 9, name: 'september' },
      { value: 10, name: 'oktober' },
      { value: 11, name: 'november' },
      { value: 12, name: 'december' },
    ];
  }

  private prepareYears() {
    this.years = [
      2016,
      2017,
      2018,
      2019,
      2020,
      2021,
      2022,
      2023,
      2024,
      2025
    ];
  }

}
