import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Services } from "src/app/core/services/services";
import { AuthService } from "src/app/core/auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
    private  _service: Services,
   private _auth:AuthService) {}

  ngOnInit(): void {
  }

  login(){
    this.router.navigate(['home']);
  }

  authGoogle():void{

    this._service.authGoogle().then( resp =>{
      console.log( resp );
      this._auth.setCredential(resp);
      this.router.navigate(['home']);
    }).catch( error =>{
      console.log( error );
    });
  }


}
