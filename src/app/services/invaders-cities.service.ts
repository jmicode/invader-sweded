import { Injectable } from '@angular/core';
import { Invader } from '../models/invaders.model';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';
import { resolve } from 'url';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class InvadersCitiesService {

  invadersCities: [] = [];

  invadersCitiesSubject = new Subject<[]>();

  constructor() { }

  emitInvadersCities() {
    this.invadersCitiesSubject.next(this.invadersCities);
  }

  getInvadersAndCities() {
    const rootRef = firebase.database().ref();
    const invadersRef = rootRef.child('invaders42/1');
    const citiesRef = rootRef.child('cities');

    invadersRef.on('child_added', snap => {
      if (snap.key === 'city') {
        console.log(snap.val());
      }


    });
   }

}
