import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import User from '../../models/user';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss']
})
export class ModalLoginComponent implements OnInit {

  @Output() login: EventEmitter<User> = new EventEmitter<User>();

  private avatarDefault: String = 'https://i.imgur.com/qsKqlqD.png';

  private user: User = {
    avatar: 'https://i.imgur.com/qsKqlqD.png',
    email: '',
    name: '',
  }

  constructor(
  ) { }

  ngOnInit() { }

  public onLogin(event) {
    switch (event.type) {
      case 'keyup':
        if (event.keyCode === 13 && this.user.name !== '') {
          return this.loginEvent();
        } else {
          return false;
        }
      case 'click':
        return this.loginEvent();
      default:
        return false;
    }
  }

  public loginEvent() {

    if (this.user.name === '') {
      alert('請輸入暱稱');
      return false;
    }
    this.user.avatar = this.user.avatar === '' ? this.avatarDefault : this.user.avatar;

    this.loginService.saveUser(this.user);
    this.login.emit(this.user);

  }

}
