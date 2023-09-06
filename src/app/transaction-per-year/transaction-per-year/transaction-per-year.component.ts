import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup } from '@angular/forms';
import { BudgetService } from 'src/app/budget/budget.service';
import { BudgetOverviewPerYear } from 'src/app/entity/BudgetOverviewPerYear';
import { TransactionService } from 'src/app/transaction/transaction.service';

@Component({
  selector: 'app-transaction-per-year',
  templateUrl: './transaction-per-year.component.html',
  styleUrls: ['./transaction-per-year.component.css',
    '../../../assets/panel_layout.css']
})
export class TransactionPerYearComponent implements OnInit {

  budgetOverview: BudgetOverviewPerYear[] = [];
  searchForm!: FormGroup;
  year: number;
  title: string = "Overzicht transacties per jaar";

  constructor(public budgetService: BudgetService) { }

  ngOnInit(): void {
    this.createSearchForm();
  }

  submit() {
    this.year = this.searchForm.get("year").value;
    this.title = "Overzicht transacties jaar " + this.year
    this.budgetService.getBudgetOverviewByYear(this.year).subscribe(data => {
      this.budgetOverview = data;
    });

  }
  private createSearchForm() {
    this.searchForm = new FormGroup({
      year: new FormControl('')
    })
  }

}
