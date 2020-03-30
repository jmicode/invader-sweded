import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { InvadersService } from 'src/app/services/invaders.service';
import { Invader } from 'src/app/models/invaders.model';

@Component({
  selector: 'app-invader-single',
  templateUrl: './invader-single.component.html',
  styleUrls: ['./invader-single.component.scss']
})
export class InvaderSingleComponent implements OnInit {

  invader: Invader;

  constructor(private route: ActivatedRoute, private router: Router, private invadersService: InvadersService) { }

  ngOnInit() {
    this.invader = new Invader('', '');
    const id = this.route.snapshot.params['id'];
    this.invadersService.getSingleInvader(+id).then(
      (invader: Invader) => {
        this.invader = invader;
      }
    );
  }

  onBack() {
    this.router.navigate(['/invaders']);
  }


}
