import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/models/cities.model';
import { ActivatedRoute, Router } from '@angular/router';
import { CitiesService } from 'src/app/services/cities.service';

@Component({
  selector: 'app-city-single',
  templateUrl: './city-single.component.html',
  styleUrls: ['./city-single.component.scss']
})
export class CitySingleComponent implements OnInit {

  city: City;

  constructor(private route: ActivatedRoute, private router: Router, private citiesService: CitiesService) { }

  ngOnInit() {
    this.city = new City('', '', '', '');
    const id = this.route.snapshot.params['id'];
    this.citiesService.getSingleCity(id).then(
      (city: City) => {
        this.city = city;
      }
    );
  }

  onBack() {
    this.router.navigate(['/cities']);
  }
}
