import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'invader-sweded';
  env = environment;

  constructor() {
    // Initialize Firebase
    firebase.initializeApp(this.env.firebaseConfig);
    firebase.analytics();
  }

}
