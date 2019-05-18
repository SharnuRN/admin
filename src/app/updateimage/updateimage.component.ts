import { ViewimageService } from './../viewimage.service';
import { UpdateimageService } from './../updateimage.service';
import { Component, OnInit } from '@angular/core';
import { ViewcategoryService } from '../viewcategory.service';
import { ViewbannerService } from '../viewbanner.service';

@Component({
  selector: 'app-updateimage',
  templateUrl: './updateimage.component.html',
  styleUrls: ['./updateimage.component.css']
})
export class UpdateimageComponent implements OnInit {
  public desc1=localStorage.getItem("desc1");
  public desc2=localStorage.getItem("desc2");
  public desc3=localStorage.getItem("desc3");
  public desc4=localStorage.getItem("desc4");
  public desc5=localStorage.getItem("desc5");
  public header=localStorage.getItem("header");
  public imagePath=localStorage.getItem("imagePath");
  public imageSequenceNo=localStorage.getItem("imageSequenceNo");
  public imageName=localStorage.getItem("imageName");
  public imageId=localStorage.getItem("imageId");
  public categorylist;
  public bannerlist;
  constructor(private view:ViewimageService,private view2:ViewcategoryService,private view1:ViewbannerService) { 
    this.view2.getcategory().subscribe((data)=>{
      let res:any=data;
      let response=JSON.parse(res._body);
      this.categorylist=response.data;
      console.log(this.categorylist)
    }),
    this.view1.getbanner().subscribe((data)=>{
      let res:any=data;
      let response=JSON.parse(res._body);
      this.bannerlist=response.data;
      console.log(this.bannerlist)
    })

  }
  validation=function(info){
    info.imageId = this.imageId;
    console.log(info)
   
   

    this.view.updateimage(info)
    
  }
  ngOnInit() {
  }

}
