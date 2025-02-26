import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  closePopup?: boolean;
  constructor(private router: Router) {}
  login(role: string) {
    localStorage.setItem('User', role);
    this.checkRole(role);
  }
  checkRole(role: string) {
    if (role === 'user') {
      this.router.navigate(['/dashboard']);
    } else {
      this.router.navigate(['/admin']);
    }
  }
  closeBtn() {
    console.log('clicked');
    this.closePopup = true;
  }
}
