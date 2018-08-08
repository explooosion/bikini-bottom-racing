import { Injectable } from '@angular/core';

import { AngularFireDatabase, AngularFireList, AngularFireObject } from 'angularfire2/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import Message from '../models/message';

import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private itemsRef: AngularFireList<any>;
  private items: Observable<any>;
  private dbName: any = 'chat';

  constructor(
    private db: AngularFireDatabase,
  ) { }

  public connect() {
    this.itemsRef = this.db.list(this.dbName);
    this.items = this.itemsRef.valueChanges();
    this.items = this.itemsRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
    return this.items;
  }

  public send(message: Message) {
    message.time = moment().format();
    this.itemsRef.push(message);
  }

}
