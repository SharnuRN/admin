import { BaseURL } from './../common';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
@Injectable({
  providedIn: 'root'
})

export class ViewcategoryService {
  private headers = new Headers({'Content-Type' :'application/json'})
  private options = new RequestOptions({headers: this.headers})
  private userdata=[]; 

  constructor(private http: Http, private router: Router,) { }

  updatecategory(info) {
    console.log(info)
    return this.http.put(BaseURL+ "/v1/category/", info).subscribe(result=>{
      this.router.navigate(['/view-category'])
    
     },error=>console.log('there was an error:',error));
}


delete(id){
  return this.http.delete(BaseURL+ "/v1/category/data/" + id)
     

}

  getcategory(){
    let url = BaseURL+ "/v1/category/all";
    return this.http.get(url,{ headers: this.headers}).map(data => {
      let res = data;
      
       return res;
  })
}



}
