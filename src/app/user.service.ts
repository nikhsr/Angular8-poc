import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';
import { Property } from './property';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:8080/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.url + 'users');  
  }

  
  getPropertyofUser(aadhar: string): Observable<Property>{
    return this.httpClient.get<Property>(this.url + "property-of-user" + aadhar);
  }

  addUser(data): Observable<User>{
    return this.httpClient.post<User>(this.url+"add-user", JSON.stringify(data), this.httpOptions);
  }

  updateUser(data): Observable<User>{
    return this.httpClient.post<User>(this.url+"update-user", JSON.stringify(data), this.httpOptions);
  }

 deleteUser(aadhar:string): Observable<User>{
    return this.httpClient.post<User>(this.url+"delete-user-byAadhar/"+aadhar, this.httpOptions);
  }






}
