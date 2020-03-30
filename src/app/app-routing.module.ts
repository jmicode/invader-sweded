import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignupComponent } from './pages/auth/signup/signup.component';
import { SigninComponent } from './pages/auth/signin/signin.component';
import { InvadersComponent } from './pages/invaders/invaders.component';
import { InvaderSingleComponent } from './pages/invaders/invader-single/invader-single.component';
import { InvaderFormComponent } from './pages/invaders/invader-form/invader-form.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'invaders', canActivate: [AuthGuardService], component: InvadersComponent },
  { path: 'invaders/view/:id', canActivate: [AuthGuardService], component: InvaderSingleComponent },
  { path: 'invaders/new', canActivate: [AuthGuardService], component: InvaderFormComponent },
  { path: '', redirectTo: 'invaders', pathMatch: 'full' },
  { path: '**', redirectTo: 'invaders' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
