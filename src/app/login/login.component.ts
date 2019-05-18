import { AuthenticationGuard } from './../authentication.guard';
import { LoginService } from './../login.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, CanActivate } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
declare var $;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
 public isLoggedIn=false;
 public isLoggedInerror=false;
 public result;
  constructor(private login:LoginService,private router:Router) { }
post(data){
this.login.addadmin(data).subscribe((data)=>{
  console.log(data)
let result= data.json()
this.result=data
let r=result.status;
if( r=="ERROR"){
  this.isLoggedInerror=true
}
else{
this.router.navigate(['/customerlist'])
sessionStorage.setItem('loggedAdmin',this.result)
this.login.setloggedIn(true)

   
}
})
}

  ngOnInit() {
    //  $(".sidebar").css('opacity', '0.6');

    // $('.header').hide();
  }

}
