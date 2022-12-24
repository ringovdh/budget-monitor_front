import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent} from "@angular/common/http";
import {Observable} from "rxjs";
import {CustomHttpResponse} from "../entity/customHttpResponse";
import {ImportResponse} from "./importResponse";

@Injectable({
  providedIn: 'root'
})
export class ImportService {

  private readonly importURL: string = 'http://localhost:8080/importTransactions';

  constructor(private httpClient: HttpClient) { }

  uploadTransactions(formData: FormData): Observable<HttpEvent<CustomHttpResponse<ImportResponse>>> {
    return this.httpClient.post<CustomHttpResponse<ImportResponse>>(this.importURL, formData, {
      reportProgress: true,
      observe: 'events'
    });
  }
}
