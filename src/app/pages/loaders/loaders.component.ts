import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { City } from 'src/app/models/cities.model';

import { CitiesService } from 'src/app/services/cities.service';
import { InvadersService } from 'src/app/services/invaders.service';

// import CitiesJson from 'src/assets/cities.json';
// import InvadersJson from 'src/assets/invaders.json';
import { createAotUrlResolver } from '@angular/compiler';
import { Invader } from 'src/app/models/invaders.model';

@Component({
  selector: 'app-loaders',
  templateUrl: './loaders.component.html',
  styleUrls: ['./loaders.component.scss']
})
export class LoadersComponent implements OnInit {

  cities: any;
  invaders: any;

  constructor(private citiesService: CitiesService,
              private invadersService: InvadersService,
              private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get('assets/cities.json').subscribe(data => {
      console.log(data);
      this.cities = data;
    });

    this.httpClient.get('assets/invaders.json').subscribe(data => {
      console.log(data);
      this.invaders = data;
    });
  }

  onLoadCities() {

    this.cities.forEach(jsonCity => {
      const city = new City(jsonCity.Prefixe, jsonCity.Ville, jsonCity.Pays, jsonCity.Continent);

      city.firstInvader = 1;
      city.nbInvader = jsonCity.Invaders;
      city.nbLivingInvader = jsonCity.Invaders;
      city.nbWaves = jsonCity.Waves;
      city.scoreInvader = jsonCity.Score;
      city.scoreLivingInvader = jsonCity.Score;
      city.yearFirstInvasion = jsonCity.Annee;
      city.flag = jsonCity.Flag;

      //this.citiesService.createNewCity(city);
      console.log("bonjour", city);
    });
    alert("Import Cities done !")
  }

  onLoadInvaders() {

    this.invaders.forEach(jsonInvader => {
      const city = jsonInvader.id.split('_')[0];
      const invader = new Invader(jsonInvader.id, city);

      invader.photo = jsonInvader.img;
      invader.pts = jsonInvader.pts+'';
      invader.status = jsonInvader.status;
      invader.arrondissement = jsonInvader.arrondissement+'';
      invader.lastReport = jsonInvader.lastReport;

      //this.invadersService.createNewInvader(invader);

      console.log("bonjour", invader);
    });
    alert("Import Invaders done !")
  }

}
