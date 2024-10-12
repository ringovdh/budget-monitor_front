import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Transaction} from "./transaction";
import {Observable} from "rxjs";
import {CustomHttpResponse} from "../../entity/customHttpResponse";
import {Page} from "../../entity/page";
import {BudgetPerCategory} from "../../entity/BudgetPerCategory";
import { BudgetHttpResponse } from '../../entity/budgetHttpResponse';

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

  create(transaction: Transaction): Observable<Transaction> {
    return this.httpClient.post<Transaction>(this.apiURL, JSON.stringify(transaction), this.httpOptions)
  }

  update(id: number, transaction: Transaction): Observable<Transaction> {
    return this.httpClient.put<Transaction>(this.apiURL + "/" + id, JSON.stringify(transaction), this.httpOptions);
  }

  delete(id: number) {
    return this.httpClient.delete<Transaction>(this.apiURL + "/" + id, this.httpOptions)
  }

}
