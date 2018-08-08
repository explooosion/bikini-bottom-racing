import { Component, OnInit } from '@angular/core';

import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public isLogin: Boolean = false;

  constructor(
    private loginService: LoginService,
  ) { }

  ngOnInit() {
    const user = this.loginService.getUser();
    if (typeof user.name !== 'undefined') this.isLogin = true;
  }

  public logout() {
    this.loginService.deleteUser();
    window.location.reload();
  }
}
