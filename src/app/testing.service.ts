import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestingService {

  constructor(private httpClient : HttpClient) { }

  testingAPI() : Observable<any>{
    return this.httpClient.get(`${environment.apiUrl}users`);
  }
}
