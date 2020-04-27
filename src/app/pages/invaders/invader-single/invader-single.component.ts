import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { InvadersService } from 'src/app/services/invaders.service';
import { Invader } from 'src/app/models/invaders.model';
import { CitiesService } from 'src/app/services/cities.service';
import { City } from 'src/app/models/cities.model';
import { Subscription } from 'rxjs';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-invader-single',
  templateUrl: './invader-single.component.html',
  styleUrls: ['./invader-single.component.scss']
})
export class InvaderSingleComponent implements OnInit {

  invader: Invader;
  cities: City[];
  url: string;
  citiesSubscription: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private invadersService: InvadersService,
              private citiesService: CitiesService,
              private sanitizer: DomSanitizer) { }

  ngOnInit() {

    this.initCities();
    this.invader = new Invader('', '');
    const id = this.route.snapshot.params['id'];

    this.invadersService.getSingleInvader(+id).then(
      (invader: Invader) => {
        invader.fullCity = this.cities[invader.city];
        this.url = 'http://localhost:4200/assets/images/flag/' + invader.fullCity.flag + '.svg';

        //this.secureUrl = 'http://localhost:4200/assets/images/flag/FR.svg';
        console.log('la::', this.url);
        this.invader = invader;
      }
    );
  }

  // getFlagUrl() {
  //   console.log('ici::', this.secureUrl);
  //   const tmp = this.sanitizer.bypassSecurityTrustResourceUrl(this.secureUrl);
  //   console.log(tmp);
  //   this.secureUrl = 'http://localhost:4200/assets/images/flag/FR.svg';
  //   return this.secureUrl;
  // }

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
