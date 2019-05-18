import { AddbannerService } from './../addbanner.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addbanner',
  templateUrl: './addbanner.component.html',
  styleUrls: ['./addbanner.component.css']
})
export class AddbannerComponent implements OnInit {
public bannerresponse;
  constructor(private add:AddbannerService,private router:Router) { }
  validation=function(data){
    console.log(data)
   
    this.add.addbanner(data).subscribe((data)=>{
     
      let bannerlist = data.json();
      console.log(bannerlist)
      if(bannerlist['status'] == "SUCCESS")  
        {
          this.router.navigate(['/viewbanner'])
         
        }
        else
        {     
        console.log(this.bannerresponse=bannerlist['message'] )
        }
    })
    
  }
  ngOnInit() {
  }

}
