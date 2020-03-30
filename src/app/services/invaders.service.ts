import { Injectable } from '@angular/core';
import { Invader } from '../models/invaders.model';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';
import { resolve } from 'url';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class InvadersService {

  invaders: Invader[] = [];

  invadersSubject = new Subject<Invader[]>();

  constructor() { }

  emitInvaders() {
    this.invadersSubject.next(this.invaders);
  }

  saveInvaders() {
    firebase.database().ref('/invaders').set(this.invaders);
  }

  getInvaders() {
    firebase.database().ref('/invaders')
      .on('value', (data) => {
        this.invaders = data.val() ? data.val() : [];
        this.emitInvaders();
      });
  }

  getSingleInvader(id: number) {
    return new Promise(
      // tslint:disable-next-line:no-shadowed-variable
      (resolve, reject) => {
        firebase.database().ref('/invaders/' + id).once('value').then(
          (data) => {
            resolve(data.val());
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  createNewInvader(invader: Invader) {
    this.invaders.push(invader);
    this.saveInvaders();
    this.emitInvaders();
  }

  removeInvader(invader: Invader) {
    const invaderIndexToRemove = this.invaders.findIndex(
      (invaderElement) => {
        if (invaderElement === invader) {
          return true;
        }
      }
    );
    this.invaders.splice(invaderIndexToRemove, 1);
    this.saveInvaders();
    this.emitInvaders();
  }
}
