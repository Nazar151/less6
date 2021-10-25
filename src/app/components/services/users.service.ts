import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { User } from '../interfaces/IUser';
import {map, tap} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private url = 'https://jsonplaceholder.typicode.com/users'

  constructor(private httpclient : HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.httpclient.get<User[]>(this.url)
  }

  getUsersByName(name: string): Observable<User[]> {
    return this.httpclient.get<User[]>(this.url).pipe(
      map(users => users.filter(user => user.name.toLowerCase().includes(name.toLowerCase()))),
      tap(x => console.log(x))
      )
  }

}
