import { ViewcategoryService } from './../viewcategory.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-updatecategory',
  templateUrl: './updatecategory.component.html',
  styleUrls: ['./updatecategory.component.css']
})
export class UpdatecategoryComponent implements OnInit {
  public categoryName=localStorage.getItem("categoryName");
  public description=localStorage.getItem("description");
  public categoryId=localStorage.getItem("categoryId");
  constructor(private view:ViewcategoryService,private router:Router) { }
  validation=function(info){
    info.categoryId = this.categoryId;
    console.log(info)
    console.log("inside update")
   

    this.view.updatecategory(info)
    
  }
  ngOnInit() {
  }

}
