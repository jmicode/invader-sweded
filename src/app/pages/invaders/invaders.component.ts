import { Component, OnInit, OnDestroy } from '@angular/core';
import { Invader } from '../../models/invaders.model';
import { Subscription } from 'rxjs';
import { InvadersService } from '../../services/invaders.service';
import { Router } from '@angular/router';
import { City } from 'src/app/models/cities.model';
import { CitiesService } from 'src/app/services/cities.service';

@Component({
  selector: 'app-invaders',
  templateUrl: './invaders.component.html',
  styleUrls: ['./invaders.component.scss']
})
export class InvadersComponent implements OnInit, OnDestroy {

  invaders: Invader[];
  invadersSubscription: Subscription;
  cities: City[];
  citiesSubscription: Subscription;
  searchBox: string;

  constructor(private invaderService: InvadersService,
              private router: Router,
              private citiesService: CitiesService) { }

  ngOnInit() {
    this.initCities();
    this.initInvaders();
  }

  initCities() {
    this.citiesSubscription = this.citiesService.citiesSubject.subscribe(
      (datas: City[]) => {
        const associative = [];
        datas.forEach(data => {
          associative[data.code] = data;
        });
        this.cities = associative;
      }
    );
    this.citiesService.getCities();
    this.citiesService.emitCities();
  }

  initInvaders() {
    this.invadersSubscription = this.invaderService.invadersSubject.subscribe(
      (invaders: Invader[]) => {
        this.invaders = invaders;
      }
    );
    this.invaderService.getInvaders();
    this.invaderService.emitInvaders();
  }

  onNewInvader() {
    this.router.navigate(['/invaders', 'new']);
  }

  onViewInvader(id: number) {
    this.router.navigate(['/invaders', 'view', id]);
  }

  onDeleteInvader(invader: Invader) {
    this.invaderService.removeInvader(invader);
  }

  ngOnDestroy() {
    this.invadersSubscription.unsubscribe();
  }

}
