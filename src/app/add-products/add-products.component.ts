import { AddsingleService } from './../addsingle.service';
import { AddproductService } from './../addproduct.service';
import { Component, OnInit } from '@angular/core';
import { ViewcategoryService } from '../viewcategory.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {
public categorylist;
public userdata;
public productmessage;
  constructor(private add:AddproductService,private view:ViewcategoryService,private router:Router,private single:AddsingleService) {
    this.view.getcategory().subscribe((data)=>{
      let res:any=data;
      let response=JSON.parse(res._body);
      this.categorylist=response.data;
      console.log(this.categorylist)
    })
   }

 addproduct= {
  
  
    "blouseColor": "",
    "blouseLength": 0,
    "border": "",
    "borderType": "",
    "categoryName": "",
    "collectionDesc": "",
    "colors": "",
    "discount": 0,
    "fabricPurity": "",
    "headerDesc": "",
    "inStock": 0,
    "length": 0,
    "mainImageUrl": "",
    "materialType": "",
    "modifiedDate": "",
    "occassion": "",
    "pattern": "",
    "price": 0,
    "quantity": 0,
    "sku": "",
    "subImageList": [
      {
        "imagePath": ""
      }
    ],
    "zariType": "string"
  }
  validation(data){
   
    this.addproduct.blouseColor=data.blouseColor;;
    this.addproduct.blouseLength=data.blouseLength;
    this.addproduct.border=data.border;
    this.addproduct.borderType=data.borderType;
    this.addproduct.collectionDesc=data.collectionDesc;
    this.addproduct.colors=data.colors;
    this.addproduct.discount=data.discount;
    this.addproduct.fabricPurity=data.fabricPurity;
    this.addproduct.headerDesc=data.headerDesc;
    this.addproduct.inStock=data.inStock;
    this.addproduct.blouseLength=data.blouseLength;
    this.addproduct.mainImageUrl=data.mainImageUrl;
    this.addproduct.materialType=data.materialType;
    this.addproduct.occassion=data.occassion;
    this.addproduct.pattern=data.pattern;
    this.addproduct.price=data.price;
    this.addproduct.sku=data.sku;
    this.addproduct.zariType=data.zariType;
    this.addproduct.categoryName=data.categoryName;
    this.addproduct.subImageList[0].imagePath=data.imagePath;
    console.log()
    this.addproduct.categoryName=data.categoryName;
    this.single.addsingle(this.addproduct).subscribe((data)=>{
this.userdata=data.json();
console.log(this.userdata)
      if(this.userdata['status'] == "SUCCESS")  
      {
        // this.router.navigate(['/products'])
       
      }
      else
      {     
       console.log(this.productmessage=this.userdata['message']) 
        
      }
    })





  }
  files: any[];
  public fileEvent($event) {
    const fileSelected: File = $event.target.files[0];
    this.add.uploadFile(fileSelected)
    .subscribe((response) => {
       alert("file upload suceessfully")
       console.log(response)
       return response;
     },
      (error) => {
        alert('error while uploading file');
      });
 }
  ngOnInit() {

  }

}
