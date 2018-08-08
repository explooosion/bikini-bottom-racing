import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie';

import User from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private key: string = 'user';

  constructor(
    protected cookieService: CookieService,
  ) {
  }

  public getUser(): User {
    return JSON.parse(this.cookieService.get(this.key) || '{}');
  }

  public saveUser(user: User) {
    this.cookieService.putObject(this.key, user);
  }

  public deleteUser() {
    this.cookieService.remove(this.key);
  }
}
