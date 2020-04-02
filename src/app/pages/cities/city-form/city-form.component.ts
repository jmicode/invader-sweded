import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { City } from 'src/app/models/cities.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CitiesService } from 'src/app/services/cities.service';

@Component({
  selector: 'app-city-form',
  templateUrl: './city-form.component.html',
  styleUrls: ['./city-form.component.scss']
})
export class CityFormComponent implements OnInit {

  cityForm: FormGroup;
  city: City;


  constructor(private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder,
              private citiesService: CitiesService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.cityForm = this.formBuilder.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      country: ['', Validators.required],
      continent: ['', Validators.required],
      firstInvader: ['1', Validators.pattern('[0|1]')],
      nbInvader: ['', Validators.required],
      nbLivingInvader: ['', Validators.required],
      nbWaves: ['1', Validators.required],
      scoreInvader: ['', Validators.required],
      scoreLivingInvader: ['', Validators.required],
      yearFirstInvasion: ['', Validators.required],
    });
  }

  onSaveCity() {
    const code = this.cityForm.get('code').value;
    const name = this.cityForm.get('name').value;
    const country = this.cityForm.get('country').value;
    const continent = this.cityForm.get('continent').value;

    const firstInvader = this.cityForm.get('firstInvader').value;
    const nbInvader = this.cityForm.get('nbInvader').value;
    const nbLivingInvader = this.cityForm.get('nbLivingInvader').value;

    const nbWaves = this.cityForm.get('nbWaves').value;
    const scoreInvader = this.cityForm.get('scoreInvader').value;
    const scoreLivingInvader = this.cityForm.get('scoreLivingInvader').value;
    const yearFirstInvasion = this.cityForm.get('yearFirstInvasion').value;

    const city = new City(code, name, country, continent);

    city.firstInvader = firstInvader;
    city.nbInvader = nbInvader;
    city.nbLivingInvader = nbLivingInvader;
    city.nbWaves = nbWaves;
    city.scoreInvader = scoreInvader;
    city.scoreLivingInvader = scoreLivingInvader;
    city.yearFirstInvasion = yearFirstInvasion;

    this.citiesService.createNewCity(city);
    this.router.navigate(['/cities']);
  }


}
