import { Injectable } from '@angular/core';

declare var JSON:any;
@Injectable()
export class AuthService {

  public getToken(): string {
    return localStorage.getItem('credential');
  }
  public isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();
    return token ? true : false;
    
  }

  public setCredential( credentials: any){
    if( credentials ){
      localStorage.setItem('credential', credentials.token);
      localStorage.setItem('additionalUserInfo', JSON.stringify(credentials.additionalUserInfo));
    }
  }

}
