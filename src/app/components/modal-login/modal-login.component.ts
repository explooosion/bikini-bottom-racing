import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss']
})
export class ModalLoginComponent implements OnInit {

  @Input() isLogin: Boolean = false;
  @Output() login: EventEmitter<any> = new EventEmitter<any>();

  private avatar: String = '';
  private email: String = '';
  private name: String = '';

  constructor() { }

  ngOnInit() { }

  public onLogin(event) {
    switch (event.type) {
      case 'keyup':
        if (event.keyCode === 13 && this.name !== '') {
          this.loginEvent();
        }
        break;
      case 'click':
        this.loginEvent();
        break;
      default:
        break;
    }
  }

  public loginEvent() {
    this.isLogin = true;
    this.login.emit({
      status: true,
      avatar: this.avatar,
      name: this.name,
      email: this.email,
    });
  }

}
