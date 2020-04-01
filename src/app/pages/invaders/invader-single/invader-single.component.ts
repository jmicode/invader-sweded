import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { InvadersService } from 'src/app/services/invaders.service';
import { Invader } from 'src/app/models/invaders.model';
import { CitiesService } from 'src/app/services/cities.service';
import { City } from 'src/app/models/cities.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-invader-single',
  templateUrl: './invader-single.component.html',
  styleUrls: ['./invader-single.component.scss']
})
export class InvaderSingleComponent implements OnInit {

  invader: Invader;

  cities: City[];
  citiesSubscription: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private invadersService: InvadersService,
              private citiesService: CitiesService) { }

  ngOnInit() {
    this.initCities();
    this.invader = new Invader('', '');
    const id = this.route.snapshot.params['id'];
    this.invadersService.getSingleInvader(+id).then(
      (invader: Invader) => {
        this.invader = invader;
      }
    );
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

  onBack() {
    this.router.navigate(['/invaders']);
  }
}
