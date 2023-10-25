import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BudgetOverviewPerCategory } from 'src/app/entity/BudgetOverviewPerCategory';
import { BudgetTransactionsModalComponent } from 'src/app/modal/budget-transactions-modal/budget-transactions-modal.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css',
    '../../../assets/panel_layout.css']
})
export class IndexComponent implements OnChanges {

  @Input() budgetOverview: BudgetOverviewPerCategory[] = [];

  constructor(private modalService: NgbModal) { }

  ngOnChanges(changes: SimpleChanges) { }

  openTransactionsModal(overview: BudgetOverviewPerCategory) {
    const modalRef = this.modalService.open(BudgetTransactionsModalComponent);
    modalRef.componentInstance.overview = overview;
  }

}
