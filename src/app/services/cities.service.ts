import { Injectable } from '@angular/core';
import { City } from '../models/cities.model';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';
import { resolve } from 'url';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  cities: City[] = [];

  citiesSubject = new Subject<City[]>();

  constructor() { }

  emitCities() {
    this.citiesSubject.next(this.cities);
  }

  saveCities() {
    firebase.database().ref('/cities').set(this.cities);
  }

  getCities() {
    firebase.database().ref('/cities')
      .on('value', (data) => {
        this.cities = data.val() ? data.val() : [];
        this.emitCities();
      });
  }

  getSingleCity(id: string) {
    return new Promise(
      // tslint:disable-next-line:no-shadowed-variable
      (resolve, reject) => {
        firebase.database().ref('/cities/' + id).once('value').then(
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

  createNewCity(city: City) {
    console.log(city);
    this.cities.push(city);
    this.saveCities();
    this.emitCities();
  }

  removeCity(city: City) {
    const cityIndexToRemove = this.cities.findIndex(
      (cityElement) => {
        if (cityElement === city) {
          return true;
        }
      }
    );
    this.cities.splice(cityIndexToRemove, 1);
    this.saveCities();
    this.emitCities();
  }
}
