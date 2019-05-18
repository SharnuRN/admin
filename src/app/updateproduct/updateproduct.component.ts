import { ViewproductService } from './../viewproduct.service';
import { UpdateproductService } from './../updateproduct.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrls: ['./updateproduct.component.css']
})
export class UpdateproductComponent implements OnInit {
  public blouseColor=localStorage.getItem("blouseColor");
  public blouseLength=localStorage.getItem("blouseLength");
  public border=localStorage.getItem("border");
  public borderType=localStorage.getItem("borderType");
  public collectionDesc=localStorage.getItem("collectionDesc");
  public colors=localStorage.getItem("colors");
  public discount=localStorage.getItem("discount");
  public fabricPurity=localStorage.getItem("fabricPurity");
  public headerDesc=localStorage.getItem("headerDesc");
  public inStock=localStorage.getItem("inStock");
  public length=localStorage.getItem("length");
  public mainImageUrl=localStorage.getItem("mainImageUrl");
  public materialType=localStorage.getItem("materialType");
  public occassion=localStorage.getItem("occassion");
  public pattern=localStorage.getItem("pattern");
  public price=localStorage.getItem("price");
  public sku=localStorage.getItem("sku");
  public imagePath=localStorage.getItem("imagePath");
  public productId=localStorage.getItem("productId");

  constructor(private update:ViewproductService) { }
  validation(info){
    // alert("hai")
    console.log(info)
    info.productId = this.productId;
   this.update.updateproduct(info)
  }
  ngOnInit() {
  }

}
