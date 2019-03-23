import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  private currentUser:any = null;
  constructor() { }
  
  setCurrentUser(user:any){
    this.currentUser = user;
  }

  getCurrentUser(){
    return this.currentUser;
  }
}
