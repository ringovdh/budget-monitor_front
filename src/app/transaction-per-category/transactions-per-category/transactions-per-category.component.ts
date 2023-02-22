import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of, startWith } from 'rxjs';
import { Category } from '../../category/category';
import { CategoryService } from '../../category/category.service';
import { BudgetHttpResponse } from '../../entity/budgetHttpResponse';
import { BudgetOverviewPerCategory } from '../../entity/BudgetOverviewPerCategory';
import { Transaction } from '../../transaction/transaction';
import { TransactionService } from '../../transaction/transaction.service';

@Component({
  selector: 'app-transactions-per-category',
  templateUrl: './transactions-per-category.component.html',
  styleUrls: ['./transactions-per-category.component.css',
    '../../../assets/panel_layout.css']
})
export class TransactionsPerCategoryComponent implements OnInit {

  budgetOverview: BudgetOverviewPerCategory[] = [];
  categories: Category[] = [];
  years: {value:number, year: string}[];
  constructor(public transactionService: TransactionService,
              public categoryService: CategoryService) { }

  ngOnInit(): void {
    this.prepareCategories();
    this.prepareYears();
  }

  submit(category?: number, year?: string) {
    this.transactionService.getBudgetOverviewByCategory(category, year).subscribe(data => {
      this.budgetOverview = data;
      console.log(data)
    });
  }

  private prepareCategories() {
    this.categoryService.getAll().subscribe(data => {
      this.categories = data;
    });
  }

  private prepareYears() {
    this.years = [
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
