import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { BehaviorSubject, catchError, map, Observable, of, startWith } from 'rxjs';
import { Category } from '../../admin/category/category';
import { CategoryService } from '../../admin/category/category.service';
import { BudgetHttpResponse } from '../../entity/budgetHttpResponse';
import { BudgetPerCategory } from '../../entity/BudgetPerCategory';
import { Transaction } from '../../admin/transaction/transaction';
import { TransactionService } from '../../admin/transaction/transaction.service';

@Component({
  selector: 'app-transactions-per-category',
  templateUrl: './budget-per-category.component.html',
  styleUrls: ['./budget-per-category.component.css',
    '../../../assets/panel_layout.css']
})
export class BudgetPerCategoryComponent implements OnInit {

  budgetOverview: BudgetPerCategory[] = [];
  categories: Category[] = [];
  searchForm!: FormGroup;

  constructor(public transactionService: TransactionService,
              public categoryService: CategoryService) { }

  ngOnInit(): void {
    this.prepareCategories();
    this.createSearchForm();
  }

  submit() {
    this.transactionService.getBudgetOverviewByCategory(this.searchForm.get("category").value, this.searchForm.get("year").value).subscribe(data => {
      this.budgetOverview = data;
    });
  }

  private createSearchForm() {
    this.searchForm = new FormGroup({
      category: new FormControl('', Validators.required),
      year: new FormControl('')
    })
  }

  get f(){
    return this.searchForm.controls
  }

  private prepareCategories() {
    this.categoryService.getAll().subscribe(data => {
      this.categories = data;
    });
  }

}
