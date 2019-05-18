import { AddcategoryService } from './../addcategory.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {
public CategoryMessage;
  constructor(private add:AddcategoryService,private router:Router) { }
  validation=function(data){
    console.log(data)
   
    this.add.addcategory(data).subscribe((data)=>{
      console.log(data)
      let categorylist = data.json();
      console.log(data)
      if(categorylist['status'] == "SUCCESS")  
      {
        this.router.navigate(['/view-category'])
       
      }
      else

      {     
     console.log(this.CategoryMessage=categorylist['message'])
     
      }

    })
    
  }

  ngOnInit() {
  }

}
