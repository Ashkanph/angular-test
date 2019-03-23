import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  private currentUser:any = null;
  constructor(private http:HttpClient,
              private router: Router) { }
  
  setCurrentUser(user:any){
    this.currentUser = user;
  }

  getCurrentUser(){
    return this.currentUser;
  }

  logout(){
    this.http.get("http://localhost:3000/api/v0.0.1/logout").
      subscribe((res:any) => { 
        if(res.status === 0){
          this.router.navigate(['/login']);
          return true;
        }else
          return false;
      });  
  }
}
