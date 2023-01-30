import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {BudgetOverviewPerCategory} from "../../entity/BudgetOverviewPerCategory";

@Component({
  selector: 'app-budget-transactions-modal',
  templateUrl: './budget-transactions-modal.component.html',
  styleUrls: ['./budget-transactions-modal.component.css',
    '../../../assets/modal_form_layout.css']
})
export class BudgetTransactionsModalComponent implements OnInit {

  @Input() public overview: BudgetOverviewPerCategory;
  constructor(public ngbActiveModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  close() {
    this.ngbActiveModal.close('closed');
  }
}
