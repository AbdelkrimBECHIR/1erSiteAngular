import { Routes } from '@angular/router';
import { MeteoComponent } from './components/meteo/meteo.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminComponent } from './components/admin/admin.component';
import { TamagoshiComponent } from './components/tamagoshi/tamagoshi.component';
import { JeuxComponent } from './components/jeux/jeux.component';

export const routes: Routes = [
  { path: 'meteo', component: MeteoComponent },
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'tamagoshi', component: TamagoshiComponent },
  { path: 'jeux', component: JeuxComponent }

];
