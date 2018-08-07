import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';

import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import Message from '../../models/message';

import * as moment from 'moment';

@Component({
  selector: 'app-chat-panel',
  templateUrl: './chat-panel.component.html',
  styleUrls: ['./chat-panel.component.scss']
})
export class ChatPanelComponent implements OnInit, AfterViewChecked {

  @ViewChild('panel') private messageGroup: ElementRef;

  public isLogin: Boolean = false;

  public avatar: String = 'http://robby570.tw/img/avatar.png';
  public name: String = '';
  public email: String = '';
  public content: String = '';
  public message: Message;

  public itemsRef: AngularFireList<any>;
  public items: Observable<any>;
  constructor(private db: AngularFireDatabase) {
    this.itemsRef = db.list('chat');
    this.items = this.itemsRef.valueChanges();
    this.items = this.itemsRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }

  ngOnInit() {
    this.scrollToBottom();
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  public scrollToBottom(): void {
    try {
      this.messageGroup.nativeElement.scrollTop = this.messageGroup.nativeElement.scrollHeight;
    } catch (err) { }
  }

  public keypressMessage(event) {
    if (event.keyCode === 13 && this.content !== '') {
      this.sendMessage();
      this.content = '';
    }
  }

  public sendMessage() {
    this.message = {
      avatar: this.avatar,
      name: this.name,
      content: this.content,
      time: moment().format(),
    }
    this.itemsRef.push(this.message);
  }

  public login(event) {
    const { status, name, email } = event;
    if (status) {
      this.name = name;
      this.email = email;
      this.isLogin = true;
    }
  }
}
