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
import { Category } from 'src/app/category/category';
import { CategoryService } from 'src/app/category/category.service';

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
  categories: Category[] = [];
  months: {value:number, name: string}[];
  years: {value:number, year: string}[];

  constructor(public transactionService: TransactionService,
              public categoryService: CategoryService,
              private modalService: NgbModal) { }

  ngOnInit(): void {
    this.transactionsState$ = this.loadTransactions()
    this.prepareCategories();
    this.prepareMonths();
    this.prepareYears();
  }

  goToPage(category?: number, year?: string, pageNumber?: number): void {
    console.log('cat', category)
    console.log('year', year)
    this.transactionsState$ = this.transactionService.transactions$(category, year, pageNumber).pipe(
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

  goToNextOrPreviousPage(direction?: string, category?: number, year?: string): void {
    this.goToPage(category, year,direction === 'forward' ? this.currentPageSubject.value + 1 : this.currentPageSubject.value - 1);
  }

  editTransaction(transaction: Transaction, category?: number, year?: string) {
    const modalRef = this.modalService.open(EditComponent);
    modalRef.componentInstance.transaction = transaction;
    modalRef.result.then((result) => {
      if (result) {
        this.goToPage(category, year, 0);
      }
    });
  }

  deleteTransaction(id: number, category?: number, year?: string) {
    const modalRef = this.modalService.open(ConfirmationModalComponent);
    modalRef.result.then((result) => {
      if (result === 'confirmed') {
        this.transactionService.delete(id).subscribe(() => {
          this.transactions = this.transactions.filter(item => item.tx_id !== id);
          console.log('Transaction deleted successfully!');
          this.goToPage(category, year, 0);
        });
      }
    });
  }

  private loadTransactions() {
    return this.transactionService.transactions$().pipe(
      map((response: CustomHttpResponse<Page<Transaction>>) => {
        this.responseSubject.next(response);
        this.currentPageSubject.next(response.data.page.number);
        console.log(response);
        return { appState: 'APP_LOADED', appData: response }
      }),
      startWith({appState: 'APP_LOADING'}),
      catchError((error: HttpErrorResponse) => of({ appState: 'APP_ERROR', error })),
    );
  }

  private prepareCategories() {
    this.categoryService.getAll().subscribe(data => {
      this.categories = data;
    });
  }

  private prepareMonths() {
    this.months = [
      { value: 1, name: 'januari' },
      { value: 2, name: 'februari' },
      { value: 3, name: 'maart' },
      { value: 4, name: 'april' },
      { value: 5, name: 'mei' },
      { value: 6, name: 'juni' },
      { value: 7, name: 'juli' },
      { value: 8, name: 'augustus' },
      { value: 9, name: 'september' },
      { value: 10, name: 'oktober' },
      { value: 11, name: 'november' },
      { value: 12, name: 'december' },
    ];
  }

  private prepareYears() {
    this.years = [
      { value: 0, year: 'alle'},
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
