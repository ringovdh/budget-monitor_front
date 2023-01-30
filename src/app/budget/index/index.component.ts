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
  @Input() budgetOverview: BudgetOverviewPerCategory[] = [];
  incomingBudget: BudgetOverviewPerCategory[] = [];
  outgoingBudget: BudgetOverviewPerCategory[] = [];
  fixedOutgoingBudget: BudgetOverviewPerCategory[] = [];
  savings: BudgetOverviewPerCategory[] = [];
  totalIncome: number = 0;
  totalFixedCost: number = 0;
  totalOutgoing: number = 0;
  totalSavings: number = 0;
  totalAmount: number = 0;


  constructor(private modalService: NgbModal) {
  }

  ngOnChanges(changes: SimpleChanges) {
    this.fixedOutgoingBudget = this.budgetOverview.filter(o => o.category.fixedcost);
    this.incomingBudget = this.budgetOverview.filter(o => o.category.revenue);
    this.savings = this.budgetOverview.filter(o => o.category.saving);
    this.outgoingBudget = this.budgetOverview.filter(o => (!o.category.fixedcost && !o.category.revenue && !o.category.saving));
    this.countTotals();
  }

  openTransactionsModal(overview: BudgetOverviewPerCategory) {
    const modalRef = this.modalService.open(BudgetTransactionsModalComponent);
    modalRef.componentInstance.overview = overview;
  }

  countTotals() {
    this.resetTotals();
    this.totalIncome = this.incomingBudget.map(o => o.total).reduce((a, c) => { return a + c }, 0);
    this.totalFixedCost = this.fixedOutgoingBudget.map(o => o.total).reduce((a, c) => { return a + c }, 0);
    this.totalOutgoing = this.outgoingBudget.map(o => o.total).reduce((a, c) => { return a + c }, 0);
    this.totalSavings = -this.savings.map(o => o.total).reduce((a, c) => { return a + c }, 0);

    this.totalAmount = this.totalIncome
      - Math.abs(this.totalFixedCost)
      - Math.abs(this.totalOutgoing);
  }

  resetTotals() {
    this.totalIncome = 0;
    this.totalOutgoing = 0;
    this.totalFixedCost = 0;
    this.totalSavings = 0;
    this.totalAmount = 0;
  }
}
