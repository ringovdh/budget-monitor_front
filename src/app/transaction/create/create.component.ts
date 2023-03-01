import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {TransactionService} from "../transaction.service";
import {Category} from "../../category/category";
import {CategoryService} from "../../category/category.service";
import {Transaction} from "../transaction";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css',
    '../../../assets/modal_form_layout.css']
})
export class CreateComponent implements OnInit {

  createTransactionForm!: FormGroup;
  categories!: Category[];
  transactions!: Transaction[];
  transaction!: Transaction;

  constructor(public transactionService: TransactionService,
              public categoryService: CategoryService,
              public ngbActiveModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(data => {
      this.categories = data;
    });
    this.createTransactionForm = new FormGroup({
      number: new FormControl(this.transaction ? this.transaction.number : ''),
      date: new FormControl(this.transaction ? this.transaction.date : new Date(), Validators.required),
      sign: new FormControl(this.transaction ? this.transaction.sign : '-', Validators.required),
      amount: new FormControl(this.transaction ? this.transaction.amount : 0, Validators.required),
      comment: new FormControl(this.transaction ? this.transaction.comment : '', Validators.required),
      category: new FormControl(this.transaction ? this.transaction.category : '', Validators.required)
    });
  }

  compare(cat1: Category, cat2: Category) {
    return cat1.id === cat2.id;
  }

  get f() {
    return this.createTransactionForm.controls
  }

  submit() {
    this.transactionService.create(this.createTransactionForm.value).subscribe(data => {
      this.transaction = data;
      this.transaction.date = new Date(data.date);
      this.ngbActiveModal.close(this.transaction);
      console.log('Transaction created successfully!', this.transaction);
    });

    return this.transaction;
  }

  close() {
    this.ngbActiveModal.close('closed');
  }
}
