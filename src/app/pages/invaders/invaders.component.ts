import { Component, OnInit, OnDestroy } from '@angular/core';
import { Invader } from '../../models/invaders.model';
import { Subscription } from 'rxjs';
import { InvadersService } from '../../services/invaders.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-invaders',
  templateUrl: './invaders.component.html',
  styleUrls: ['./invaders.component.scss']
})
export class InvadersComponent implements OnInit, OnDestroy {

  invaders: Invader[];
  invadersSubscription: Subscription;

  constructor(private invaderService: InvadersService,
              private router: Router) { }

  ngOnInit() {
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
