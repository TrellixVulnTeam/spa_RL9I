import {Injectable} from '@angular/core';
import { UserIndexService } from "../WebService/user-index.service";
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../Entities/User';


@Injectable({
  providedIn: 'root'
})
export class IndexService {
  users: User[] =[];
  private jsonServerUrl = "http://localhost:3000/users"
  // httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  // };

  constructor(private service:UserIndexService, private http:HttpClient) {
  }

  getUserIndex(): Observable<User[]> {
    return this.http.get<User[]>(this.jsonServerUrl);
  }

  test() {
    return "この値は、indexServiceのtest()の返り値です。";
  }
  serviceValue() {
    return this.service.webservice()
  }
}
