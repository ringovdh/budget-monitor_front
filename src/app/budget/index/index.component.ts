import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import { BudgetOverviewPerCategory } from "../../entity/BudgetOverviewPerCategory";
import { BudgetService } from "../budget.service";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { BudgetTransactionsModalComponent } from "../../modal/budget-transactions-modal/budget-transactions-modal.component";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css',
    '../../../assets/panel_layout.css']
})
export class IndexComponent implements OnChanges {
  @Input() incomingBudget: BudgetOverviewPerCategory[] = [];
  @Input() outgoingBudget: BudgetOverviewPerCategory[] = [];
  @Input() fixedOutgoingBudget: BudgetOverviewPerCategory[] = [];
  @Input() savings: BudgetOverviewPerCategory[] = [];

  constructor(private modalService: NgbModal) {

  }

  ngOnChanges(changes: SimpleChanges) {

  }

  openTransactionsModal(overview: BudgetOverviewPerCategory) {
    const modalRef = this.modalService.open(BudgetTransactionsModalComponent);
    modalRef.componentInstance.overview = overview;
  }

}
