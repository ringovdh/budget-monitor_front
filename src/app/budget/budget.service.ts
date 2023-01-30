import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {BudgetOverviewPerCategory} from "../entity/BudgetOverviewPerCategory";

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  private apiURL = 'http://localhost:8080/budgets';

  httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getBudgetOverviewByPeriod(month: number, year: number): Observable<BudgetOverviewPerCategory[]> {
    return this.httpClient.get<BudgetOverviewPerCategory[]>(`${this.apiURL}/period?month=${month}&year=${year}`);
  }
}
