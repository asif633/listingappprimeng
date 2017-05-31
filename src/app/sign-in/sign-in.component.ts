import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  constructor(private authServ: AuthenticationService, private router: Router) {
  }

  msgs: Object[] = [];
  email: string;
  password: string;

  signin() {
    this.authServ.login({ email: this.email, password: this.password })
      .then(resolve => this.router.navigate(['cardView']))
      .catch(error => this.msgs.push({severity:'error', summary:'Sign In Error', detail:error.message}));
  }

}
