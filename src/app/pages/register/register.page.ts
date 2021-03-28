import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  data: any = {};
  token: any;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.data).then(data => {
      this.token = data;
      this.router.navigate(['/login']);
    });
  }
}
