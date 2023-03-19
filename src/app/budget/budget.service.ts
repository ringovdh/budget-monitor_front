import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {BudgetOverviewPerMonth} from "../entity/BudgetOverviewPerMonth";
import { BudgetOverviewPerYear } from '../entity/BudgetOverviewPerYear';

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

  getBudgetOverviewByPeriod(month: number, year: number): Observable<BudgetOverviewPerMonth[]> {
    return this.httpClient.get<BudgetOverviewPerMonth[]>(`${this.apiURL}/period?month=${month}&year=${year}`);
  }

  getBudgetOverviewByYear(year: number): Observable<BudgetOverviewPerYear[]> {
    return this.httpClient.get<BudgetOverviewPerYear[]>(`${this.apiURL}/year?year=${year}`);
  }
}
