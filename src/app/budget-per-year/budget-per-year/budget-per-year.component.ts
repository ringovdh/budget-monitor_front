import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup } from '@angular/forms';
import { BudgetPerMonthService } from 'src/app/budget-per-month/budgetPerMonth.service';
import {YearlyBudgetOverview} from "../../entity/YearlyBudgetOverview";

@Component({
  selector: 'app-transaction-per-year',
  templateUrl: './budget-per-year.component.html',
  styleUrls: ['./budget-per-year.component.css',
    '../../../assets/panel_layout.css']
})
export class BudgetPerYearComponent implements OnInit {

  yearlyBudgetOverview: YearlyBudgetOverview;
  searchForm!: FormGroup;
  year: number;
  title: string = "Overzicht transacties per jaar";

  constructor(public budgetService: BudgetPerMonthService) { }

  ngOnInit(): void {
    this.createSearchForm();
  }

  submit() {
    this.year = this.searchForm.get("year").value;
    this.title = "Overzicht transacties jaar " + this.year
    this.budgetService.getYearlyBudgetOverview(this.year).subscribe(data => {
      this.yearlyBudgetOverview = data;
    });
  }

  private createSearchForm = ()=> {
    this.searchForm = new FormGroup({
      year: new FormControl('')
    })
  }

}
