import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Client } from '../models/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  // tslint:disable-next-line:no-inferrable-types
  randomUserUrl: string =
    'https://randomuser.me/api/?results=8&nat=us&inc=name,location,email,registered,phone,picture&noinfo';
  constructor(private http: HttpClient) {}

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.randomUserUrl);
  }
}
