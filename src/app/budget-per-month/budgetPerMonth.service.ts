import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { MonthlyBudgetOverview } from '../entity/MonthlyBudgetOverview';
import {YearlyBudgetOverview} from "../entity/YearlyBudgetOverview";

@Injectable({
  providedIn: 'root'
})
export class BudgetPerMonthService {

  private apiURL: String = 'http://localhost:8080/budgets';

  constructor(private httpClient: HttpClient) { }

  getMonthlyBudgetOverview(month: number, year: number): Observable<MonthlyBudgetOverview> {
    return this.httpClient.get<MonthlyBudgetOverview>(`${this.apiURL}/period?month=${month}&year=${year}`);
  }

  getYearlyBudgetOverview(year: number): Observable<YearlyBudgetOverview> {
    return this.httpClient.get<YearlyBudgetOverview>(`${this.apiURL}/year?year=${year}`);
  }
}
