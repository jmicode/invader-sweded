import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { InvadersService } from 'src/app/services/invaders.service';
import { Invader } from 'src/app/models/invaders.model';
import { City } from 'src/app/models/cities.model';
import { Subscription } from 'rxjs';
import { CitiesService } from 'src/app/services/cities.service';

@Component({
  selector: 'app-invader-form',
  templateUrl: './invader-form.component.html',
  styleUrls: ['./invader-form.component.scss']
})
export class InvaderFormComponent implements OnInit, OnDestroy {

  invaderForm: FormGroup;
  invader: Invader;
  cities: City[];
  citiesSubscription: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder,
              private invadersService: InvadersService,
              private citiesService: CitiesService) { }

  ngOnInit() {
    this.initCities();
    this.initForm();
  }

  initCities() {
    this.citiesSubscription = this.citiesService.citiesSubject.subscribe(
      (cities: City[]) => {
        this.cities = cities;
      }
    );
    this.citiesService.getCities();
    this.citiesService.emitCities();
  }

  initForm() {
    this.invaderForm = this.formBuilder.group({
      city: ['', Validators.required],
      code: ['', [Validators.required, Validators.pattern('[A-Z]{2,4}_[0-9]{2,4}')]],
    });
  }

  onCityChange(event) {
    let selectedCity = event.value;

    let mask = (+selectedCity.nbInvader + 1) + '';
    if (mask.length === 1) {
      mask = '0' + mask;
    }
    this.invaderForm.setValue({code: selectedCity.code + '_' + mask, city: selectedCity});
  }

  onSaveInvader() {
    const code = this.invaderForm.get('code').value;
    const city = this.invaderForm.get('city').value;

    const invader = new Invader(code, city.code);
    this.invadersService.createNewInvader(invader);
    this.router.navigate(['/invaders']);
  }

  ngOnDestroy() {
    this.citiesSubscription.unsubscribe();
  }
}
