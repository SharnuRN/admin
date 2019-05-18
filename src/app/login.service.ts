import { BaseURL } from './../common';

import { Http,Headers,Response} from '@angular/http';
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class LoginService {
private userURL=BaseURL+ "/v1/signin";
private headers=new Headers({'content-type':'application/json'})
private loggedStatus;

  constructor(private http:Http, private router: Router) { }
  
  setloggedIn(value:boolean){
  this.loggedStatus=value;
}
get loggedIn(){
  return this.loggedStatus;

}

  public addadmin(data){

  return this.http.post(this.userURL,JSON.stringify(data),{headers:this.headers})
  }
  
}
