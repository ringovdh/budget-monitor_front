import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators } from '@angular/forms';
import { MonthlyBudgetOverview } from 'src/app/entity/MonthlyBudgetOverview';
import {BudgetOverviewPerMonth} from "../../entity/BudgetOverviewPerMonth";
import {BudgetService} from "../budget.service";

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css',
    '../../../assets/panel_layout.css']
})
export class BudgetComponent implements OnInit {

  budgetOverview: BudgetOverviewPerMonth[] = [];
  monthlyBudgetOverview: MonthlyBudgetOverview;
  months: {value:number, name: string}[];
  searchForm!: FormGroup;

  constructor(public budgetService: BudgetService) { }

  ngOnInit(): void {
    this.prepareMonths();
    this.createSearchForm();
  }

  submit() {
    this.budgetService.getBudgetOverviewByPeriod(this.searchForm.get("month").value, this.searchForm.get("year").value).subscribe((data) => {
      console.log('dd', data)
      this.monthlyBudgetOverview = data;
    });
  }

  private createSearchForm() {
    this.searchForm = new FormGroup({
      month: new FormControl('', Validators.required),
      year: new FormControl('')
    })
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

}
