import { Router } from '@angular/router';
import { ViewcategoryService } from './../viewcategory.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewcategory',
  templateUrl: './viewcategory.component.html',
  styleUrls: ['./viewcategory.component.css']
})
export class ViewcategoryComponent implements OnInit {
public categorylist;
public Categorydelete;
public categorydetail;

  constructor(private view:ViewcategoryService,private router:Router) { 
this.view.getcategory().subscribe((data)=>{
  let res:any=data;
  let response=JSON.parse(res._body);
  this.categorylist=response.data;
  console.log(this.categorylist)
})


  }

  editcategory(list){
    // this.view.updatecategory(list)
   
      let categoryName = list.categoryName;
         localStorage.setItem("categoryName", categoryName)
         let description = list.description;
        localStorage.setItem("description", description)
        let categoryId = list.categoryId;
        localStorage.setItem("categoryId", categoryId)
        this.router.navigate(['/updatecategory'])
  }
  delete(id){
  
    console.log(id)
    this.view.delete(id).subscribe((data)=>{
      console.log(data)


      
      let categorylist = data.json();
      console.log(data)
      if(categorylist['status'] == "SUCCESS")  
      {
        this.view.getcategory().subscribe((data)=>{
          let res:any=data;
          let response=JSON.parse(res._body);
          this.categorylist=response.data;
          console.log(this.categorylist)
        })
        
      
       
      }
      else

      {     
     this.categorydetail=this.Categorydelete=categorylist['message']
     
      }

    




      
    })
    
  }

  ngOnInit() {
  }

}
