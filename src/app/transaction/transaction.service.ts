import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Transaction} from "./transaction";
import {Observable} from "rxjs";
import {CustomHttpResponse} from "../entity/customHttpResponse";
import {Page} from "../entity/page";
import {BudgetOverviewPerCategory} from "../entity/BudgetOverviewPerCategory";
import { BudgetHttpResponse } from '../entity/budgetHttpResponse';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private readonly apiURL: string = 'http://localhost:8080/transactions';

  private httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  transactions$ = (category: number = 0, year: string = '0' , page: number = 0, size: number = 10): Observable<CustomHttpResponse<Page<Transaction>>> =>
    this.httpClient.get<CustomHttpResponse<Page<Transaction>>>(`${this.apiURL}/category?categoryId=${category}&year=${year}&page=${page}&size=${size}`);

  getBudgetOverviewByPeriod(date: Date): Observable<BudgetOverviewPerCategory[]> {
    console.log('date: ', date);
    return this.httpClient.get<BudgetOverviewPerCategory[]>(`${this.apiURL}/period?period=${date}`);
  }

  getBudgetOverviewByCategory(category: number, year: string): Observable<BudgetOverviewPerCategory[]> {
    console.log('category: ', category);
    return this.httpClient.get<BudgetOverviewPerCategory[]>(`${this.apiURL}/category?categoryId=${category}&year=${year}`);
  }


  create(transaction: Transaction): Observable<Transaction> {
    this.printMe(transaction);
    return this.httpClient.post<Transaction>(this.apiURL, JSON.stringify(transaction), this.httpOptions)
  }

  update(id: number, transaction: Transaction): Observable<Transaction> {
    this.printMe(transaction);
    return this.httpClient.put<Transaction>(this.apiURL + "/" + id, JSON.stringify(transaction), this.httpOptions)
  }

  delete(id: number) {
    return this.httpClient.delete<Transaction>(this.apiURL + "/" + id, this.httpOptions)
  }

  printMe(object: any) {
    console.log('Ringo print: ', object)
  }
}
