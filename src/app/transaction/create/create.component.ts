import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {TransactionService} from "../transaction.service";
import {Category} from "../../category/category";
import {CategoryService} from "../../category/category.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css',
    '../../../assets/modal_form_layout.css']
})
export class CreateComponent implements OnInit {

  createTransactionForm!: FormGroup;
  categories!: Category[];

  constructor(public transactionService: TransactionService,
              public categoryService: CategoryService,
              public ngbActiveModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(data => {
      this.categories = data;
    });
    this.createTransactionForm = new FormGroup({
      number: new FormControl(''),
      date: new FormControl(new Date()),
      sign: new FormControl('+', Validators.required),
      amount: new FormControl('', Validators.required),
      comment: new FormControl('', Validators.required),
      category: new FormControl('',Validators.required)
    });
  }

  get f() {
    return this.createTransactionForm.controls
  }

  submit() {
    this.transactionService.create(this.createTransactionForm.value).subscribe((res:any) => {
      this.ngbActiveModal.close('closed');
      console.log('Transaction created successfully!');
    });
  }

  close() {
    this.ngbActiveModal.close('closed');
  }
}
