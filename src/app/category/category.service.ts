import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Category} from "./category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private apiURL = 'http://localhost:8080/categories/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(this.apiURL)
  }

  delete(id: number) {
    return this.httpClient.delete<Category>(this.apiURL + id, this.httpOptions)
  }

  create(category: Category): Observable<Category> {
    return this.httpClient.post<Category>(this.apiURL, JSON.stringify(category), this.httpOptions)
  }

  update(id: number, category: Category): Observable<Category> {
    return this.httpClient.put<Category>(this.apiURL + id, JSON.stringify(category), this.httpOptions)
  }
}
