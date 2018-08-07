import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-login',
  templateUrl: './modal-login.component.html',
  styleUrls: ['./modal-login.component.scss']
})
export class ModalLoginComponent implements OnInit {

  private modelLogin: String = 'modelLogin';
  private name: String = '';
  private email: String = '';

  @Input() isLogin: Boolean = false;

  @Output() onLogin: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() { }

  public login() {
    this.isLogin = true;
    this.onLogin.emit({ status: true, name: this.name, email: this.email });
  }


}
