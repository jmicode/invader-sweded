import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SigninComponent } from './pages/auth/signin/signin.component';
import { SignupComponent } from './pages/auth/signup/signup.component';
import { HeaderComponent } from './pages/header/header.component';
import { InvadersComponent } from './pages/invaders/invaders.component';
import { InvaderFormComponent } from './pages/invaders/invader-form/invader-form.component';
import { InvaderSingleComponent } from './pages/invaders/invader-single/invader-single.component';
import { CitiesComponent } from './pages/cities/cities.component';
import { CityFormComponent } from './pages/cities/city-form/city-form.component';
import { CitySingleComponent } from './pages/cities/city-single/city-single.component';
import { LoadersComponent } from './pages/loaders/loaders.component';

import { InvadersPipe } from './pipes/invaders.pipe';
import { CitiesPipe } from './pipes/cities.pipe';
import { FlagsPipe } from './pipes/flags.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    HeaderComponent,
    InvadersComponent,
    InvaderFormComponent,
    InvaderSingleComponent,
    CitiesComponent,
    CityFormComponent,
    CitySingleComponent,
    LoadersComponent,
    InvadersPipe,
    CitiesPipe,
    FlagsPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
