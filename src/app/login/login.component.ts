import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {JwtResponse} from '../model/auth/jwtResponse';
import {AuthenticationService} from '../service/auth/authentication.service';
import {NotificationService} from '../service/notification/notification.service';
import {resolve} from '@angular/compiler-cli/src/ngtsc/file_system';
import {ActivatedRoute, ParamMap, Router, RouterLinkActive} from '@angular/router';
import {Product} from '../model/product';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 redirect: string;

  loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    }
  );
  emailNotExist: boolean;

  constructor(private authenticationService: AuthenticationService,
              private notificationService: NotificationService,
              private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit() {
  }

  doLogin() {
    if (this.loginForm.valid) {
      const username = this.loginForm.value.username;
      const password = this.loginForm.value.password;
      const user = {
        username,
        password
      };
      this.authenticationService.login(user);
    }
  }

}
