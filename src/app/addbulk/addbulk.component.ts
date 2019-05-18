import { AddproductService } from './../addproduct.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addbulk',
  templateUrl: './addbulk.component.html',
  styleUrls: ['./addbulk.component.css']
})
export class AddbulkComponent implements OnInit {

  constructor(private add:AddproductService,private router:Router) { }
  files: any[];

  public fileEvent(ref) {
    // debugger
    const fileSelected: File = ref.files[0];

    this.add.uploadFile(fileSelected)
    .subscribe((response) => {
       
       console.log(response)
      //  this.router.navigate(['/products'])
      let res1=response;
      let status=res1._body;
      let display=JSON.parse(status)
      let err=display.message;
      if(display.status=="SUCCESS"){
        alert("product upload successfully")
      }
      else{
        alert(err);
      }
      console.log(display.status)
       return response;
     },
      (error) => {
        alert('error while uploading file/check categoryName and sku');
      });
      
 }
  ngOnInit() {
  }

}
