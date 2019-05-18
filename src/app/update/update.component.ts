import { ViewbannerService } from './../viewbanner.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  public bannerArea=localStorage.getItem("bannerArea");
  public bannerName=localStorage.getItem("bannerName");
  public bannerId=localStorage.getItem("bannerId");
  constructor(private view:ViewbannerService) { }
  validation=function(info){
    info.bannerId = this.bannerId;
    console.log(info)
    console.log("inside update")
   

    this.view.updatebanner(info)
    
  }
  ngOnInit() {
  }

}
