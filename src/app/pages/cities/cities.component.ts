import { Component, OnInit, OnDestroy } from '@angular/core';
import { City } from 'src/app/models/cities.model';
import { CitiesService } from 'src/app/services/cities.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit, OnDestroy {

  cities: City[];
  citiesSubscription: Subscription;

  constructor(private citiesService: CitiesService,
              private router: Router) { }

  ngOnInit() {
    this.citiesSubscription = this.citiesService.citiesSubject.subscribe(
      (cities: City[]) => {
        this.cities = cities;
      }
    );
    this.citiesService.getCities();
    this.citiesService.emitCities();
  }

  onNewCity() {
    this.router.navigate(['/cities', 'new']);
  }

  onViewCity(id: string) {
    this.router.navigate(['/cities', 'view', id]);
  }

  onDeleteCity(invader: City) {
    this.citiesService.removeCity(invader);
  }

  ngOnDestroy() {
    this.citiesSubscription.unsubscribe();
  }
}
