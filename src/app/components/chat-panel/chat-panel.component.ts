import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';

import { LoginService } from '../../services/login.service';
import { FirebaseService } from '../../services/firebase.service';

import Message from '../../models/message';
import User from '../../models/user';

@Component({
  selector: 'app-chat-panel',
  templateUrl: './chat-panel.component.html',
  styleUrls: ['./chat-panel.component.scss']
})
export class ChatPanelComponent implements OnInit, AfterViewChecked {

  @ViewChild('panel') public messageGroup: ElementRef;
  @ViewChild('txtContent') public txtContent: ElementRef;

  public isLogin: Boolean = false;
  public user: User;
  public msg: Message = {
    avatar: '',
    name: '',
    content: '',
    time: '',
  };
  public msgs: [Message];

  constructor(
    public loginService: LoginService,
    public firebaseService: FirebaseService,
  ) { }

  ngOnInit() {
    this.scrollToBottom();

    // Get chat message
    this.firebaseService.connect()
      .subscribe((msg: [Message]) => this.msgs = msg);

    // Get cookies
    this.user = this.loginService.getUser();

    // Login Success
    if (typeof this.user.name !== 'undefined') {
      this.isLogin = true;
      this.msg.avatar = this.user.avatar;
      this.msg.name = this.user.name;
    }
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
    if (typeof this.user.name !== 'undefined') {
      this.txtContent.nativeElement.placeholder = `${this.user.name} 說點什麼吧...`;
    }
  }

  public scrollToBottom() {
    try {
      this.messageGroup.nativeElement.scrollTop = this.messageGroup.nativeElement.scrollHeight;
    } catch (err) { }
  }

  public sendMessage(event) {
    if (this.msg.content === '') {
      return;
    }

    switch (event.type) {
      case 'keyup':
        if (event.keyCode === 13 && this.msg.name !== '') {
          this.firebaseService.send(this.msg);
          this.msg.content = '';
        }
        break;
      case 'click':
        this.firebaseService.send(this.msg);
        break;
      default:
        break;
    }
  }

}
