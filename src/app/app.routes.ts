import { Routes } from '@angular/router';
import { MeteoComponent } from './components/meteo/meteo.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
  { path: 'meteo', component: MeteoComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent }
  // Ajoutez d'autres routes ici si nécessaire
];
