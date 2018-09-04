import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
import { environment } from '@env/environment';

import { map } from 'rxjs/operators';

@Injectable()
export class DialogflowService {

  private baseURL = 'https://api.dialogflow.com/v1/query?v=20150910';
  private token: string = environment.token;

  constructor(private http: Http) {}

  public getResponse(query: string) {
    const data = {
      query : query,
      lang: 'en',
      sessionId: '12345'
    };
    return this.http
      .post(`${this.baseURL}`, data, {headers: this.getHeaders()})
      .pipe(map(res => res.json()));
      // .map(res => {
      //   return res.json();
      // });
  }

  public getHeaders() {
    const headers = new Headers();
    headers.append('Authorization', `Bearer ${this.token}`);
    return headers;
  }
}
