import { Component, OnInit } from '@angular/core';
import {CustomHttpResponse} from "../../entity/customHttpResponse";
import {Page} from "../../entity/page";
import {HttpErrorResponse} from "@angular/common/http";
import {BehaviorSubject, catchError, map, Observable, of, startWith} from "rxjs";
import {Transaction} from "../transaction";
import {TransactionService} from "../transaction.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {EditComponent} from "../edit/edit.component";
import {ConfirmationModalComponent} from "../../modal/confirmation-modal/confirmation-modal.component";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css',
    '../../../assets/modal_form_layout.css',
    '../../../assets/panel_layout.css',
    '../../../assets/table_layout.css',
    '../../../assets/pagination_layout.css']
})
export class IndexComponent implements OnInit {

  transactionsState$: Observable<{appState: string, appData?:CustomHttpResponse<Page<Transaction>>, error?:HttpErrorResponse}>;
  responseSubject = new BehaviorSubject<CustomHttpResponse<Page<Transaction>>>(null);
  private currentPageSubject = new BehaviorSubject<number>(0);
  currentPage$ = this.currentPageSubject.asObservable();
  p: number = 1;
  totalComments: number = 0;
  transactions: Transaction[] = [];

  constructor(public transactionService: TransactionService,
              private modalService: NgbModal) { }

  ngOnInit(): void {
    this.transactionsState$ = this.transactionService.transactions$().pipe(
      map((response: CustomHttpResponse<Page<Transaction>>) => {
        this.responseSubject.next(response);
        this.currentPageSubject.next(response.data.page.number);
        console.log(response);
        return { appState: 'APP_LOADED', appData: response }
      }),
      startWith({appState: 'APP_LOADING'}),
      catchError((error: HttpErrorResponse) => of({ appState: 'APP_ERROR', error })),
    )
  }

  goToPage(comment?: string, pageNumber?: number): void {
    this.transactionsState$ = this.transactionService.transactions$(comment, pageNumber).pipe(
      map((response: CustomHttpResponse<Page<Transaction>>) => {
        this.responseSubject.next(response);
        this.currentPageSubject.next(pageNumber);
        console.log('go to page: ', response);
        return { appState: 'APP_LOADED', appData: response }
      }),
      startWith({appState: 'APP_LOADED', appData: this.responseSubject.value}),
      catchError((error: HttpErrorResponse) => of({ appState: 'APP_ERROR', error })),
    )
  }

  goToNextOrPreviousPage(direction?: string, comment?: string): void {
    this.goToPage(comment, direction === 'forward' ? this.currentPageSubject.value + 1 : this.currentPageSubject.value - 1);
  }

  editTransaction(transaction: Transaction, comment?: string) {
    const modalRef = this.modalService.open(EditComponent);
    modalRef.componentInstance.transaction = transaction;
    modalRef.result.then((result) => {
      if (result) {
        this.goToPage(comment, 0);
      }
    });
  }

  deleteTransaction(id: number, comment?: string) {
    const modalRef = this.modalService.open(ConfirmationModalComponent);
    modalRef.result.then((result) => {
      if (result === 'confirmed') {
        this.transactionService.delete(id).subscribe(() => {
          this.transactions = this.transactions.filter(item => item.tx_id !== id);
          console.log('Transaction deleted successfully!');
          this.goToPage(comment, 0);
        });
      }
    });
  }
}
