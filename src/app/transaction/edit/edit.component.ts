import { Component, OnInit } from '@angular/core';
import {Transaction} from "../transaction";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Category} from "../../category/category";
import {TransactionService} from "../transaction.service";
import {CategoryService} from "../../category/category.service";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css',
    '../../../assets/modal_form_layout.css']
})
export class EditComponent implements OnInit {

  transaction!: Transaction;
  categories!: Category[];
  editTransactionForm!: FormGroup;
  constructor(public transactionService: TransactionService,
              public categoryService: CategoryService,
              public ngbActiveModal: NgbActiveModal) { }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(data => {
      this.categories = data;
    });
    this.editTransactionForm = new FormGroup({
      number: new FormControl(this.transaction.number),
      date: new FormControl(this.transaction.date, Validators.required),
      sign: new FormControl(this.transaction.sign, Validators.required),
      amount: new FormControl(this.transaction.amount, Validators.required),
      comment: new FormControl(this.transaction.comment, Validators.required),
      category: new FormControl(this.transaction.category, Validators.required)
    });
  }

  get f(){
    return this.editTransactionForm.controls;
  }

  submit() {
    this.transactionService.update(this.transaction.tx_id, this.editTransactionForm.value)
      .subscribe((res:any) => {
        this.ngbActiveModal.close('closed');
        console.log('Transaction updated successfully!');
    });
  }

  close() {
    this.ngbActiveModal.close('closed');
  }

}
