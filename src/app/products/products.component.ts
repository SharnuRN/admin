import { Component, OnInit } from '@angular/core';
import { ViewproductService } from '../viewproduct.service';
import { Router } from '@angular/router';
declare var $;

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
public productlist;
public image;
  constructor(private view:ViewproductService,private router:Router) { 
    this.view.getproduct().subscribe(data =>{
      let res:any=data;
      let response=JSON.parse(res._body);
      this.productlist=response.data;
      console.log(this.productlist);
     })
  }

add(data){
console.log(data)
}
  ngOnInit() {
    $(document).ready(function() {
      $('#products').DataTable();
  } );
  }
  editproduct(list){

    let categoryName = list.categoryName;
    localStorage.setItem("categoryName", categoryName)
    let sku = list.sku;
   localStorage.setItem("sku", sku)
   let productId = list.productId;
   localStorage.setItem("productId", productId)
   let inStock = list.inStock;
    localStorage.setItem("inStock", inStock)
    let price = list.price;
   localStorage.setItem("price", price)
   let discount = list.discount;
   localStorage.setItem("discount", discount)
   let blouseColor = list.blouseColor;
    localStorage.setItem("blouseColor", blouseColor)
    let blouseLength = list.blouseLength;
   localStorage.setItem("blouseLength", blouseLength)
   let border = list.border;
   localStorage.setItem("border", border)
   let borderType = list.borderType;
    localStorage.setItem("borderType", borderType)
    let collectionDesc = list.collectionDesc;
   localStorage.setItem("collectionDesc", collectionDesc)
   let colors = list.colors;
   localStorage.setItem("colors", colors)
   let fabricPurity = list.fabricPurity;
   localStorage.setItem("fabricPurity", fabricPurity)
   let headerDesc = list.headerDesc;
   localStorage.setItem("headerDesc", headerDesc)
   let materialType = list.materialType;
   localStorage.setItem("materialType", materialType)
   let occassion = list.occassion;
   localStorage.setItem("occassion", occassion)
   let pattern = list.pattern;
   localStorage.setItem("pattern", pattern)
   let imagePath = list.imagePath;
   localStorage.setItem("imagePath", imagePath)
   let mainImageUrl = list.mainImageUrl;
   localStorage.setItem("mainImageUrl", mainImageUrl)
   let length = list.length;
   localStorage.setItem("length", length)
   this.router.navigate(['/upadateproduct'])
  }
  delete(id){
    alert("are you sure")
this.view.delete(id).subscribe((data)=>{
  this.view.getproduct().subscribe(data =>{
    let res:any=data;
    let response=JSON.parse(res._body);
    this.productlist=response.data;
    console.log(this.productlist);
   })
})


  }
}
