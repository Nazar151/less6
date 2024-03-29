import { Injectable } from '@angular/core';
import {HttpClient,} from "@angular/common/http";
import {Observable} from "rxjs";
import { User } from '../interfaces/User';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  private url = 'https://jsonplaceholder.typicode.com/users'

  constructor(private httpclient: HttpClient) {
    }

  getUsers(): Observable<User[]>{
    return this.httpclient.get<User[]>(this.url)
  }
}
