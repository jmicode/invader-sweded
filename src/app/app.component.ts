import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'invader-sweded';

  constructor() {
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyAsU6R5NJVUAajt5JfTUx0z2ztpp9HjCy0",
      authDomain: "invader-db-478fa.firebaseapp.com",
      databaseURL: "https://invader-db-478fa.firebaseio.com",
      projectId: "invader-db-478fa",
      storageBucket: "invader-db-478fa.appspot.com",
      messagingSenderId: "1067476945658",
      appId: "1:1067476945658:web:d57ef34fc254978a6a1743",
      measurementId: "G-06NBDBS2RW"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }

}
