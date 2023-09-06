import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomHttpResponse } from '../entity/customHttpResponse';
import { Project } from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private readonly apiURL: string = 'http://localhost:8080/projects/';

  private httpOptions = {
    headers: new HttpHeaders({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Project[]> {
    return this.httpClient.get<Project[]>(this.apiURL)
  }

}
