import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../components/dashboard/users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _http:HttpClient) { }
  geturl:any = 'http://localhost:3000/Users';
  getusers(){
    return this._http.get<Users[]>(this.geturl)
  };

  

}
