import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; 
import * as sha1 from 'sha1'; 
import { AuthService } from '../auth.service'; 

@Component({
  selector:     'app-login',
  templateUrl:  './login.component.html',
  styleUrls:    ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private successMessage: string  = ""
  private errorMessage: string    = ""
  private _model: any = {};  

  constructor(private http: HttpClient,
              private authService: AuthService) { }

  ngOnInit() {
  }

  private submit(): void {  
      
    if (this.validate()) {  
        let self = this;  
        let headers = new HttpHeaders();  
        headers.append('Content-Type', 'multipart/form-data; charset=utf-8');

        this.http.post("http://localhost:3000/api/v0.0.1/login", {
          username: this._model.username,
          password: sha1(this._model.password)
        }, {
          headers: headers
        }).subscribe((res:any) => { 
            if(res.status === 0){
              this.successMessage = "Successful login";
              this.errorMessage   = "";
              this.authService.setCurrentUser({
                username: res.userId,
                name:     res.name,
                id:       res.id
              });              
            }
            else{
                this.successMessage = "";
                this.errorMessage   = "Wrong username or password";
            }
          });  
          
    }  
  }    

  private validate(): boolean {  
    let status: boolean = true;  
    if (this._model.username == null || this._model.username == "") {  
        this.errorMessage = "Please fill the user id."  
        status = false;  
    }  
    if (this._model.password == null || this._model.password == "") {  
        this.errorMessage = "Please fill the password."  
        status = false;  
    }  

    return status;
  }

}
