import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; 

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  private currentUser: any = null;

  constructor(
        private authService: AuthService,
        private router: Router
    ) { }

  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
  }

}
