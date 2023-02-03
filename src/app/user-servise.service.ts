import { User } from './models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiseService {

  constructor(private http: HttpClient) { }

  url = "../assets/userDb.json";
  getAllUsers(): Observable<User[]> {
      return this.http.get<User[]>(this.url);
  }}
