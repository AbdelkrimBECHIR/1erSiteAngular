import { Component, inject } from '@angular/core';
import { WeatherService, WeatherData } from '../../services/weather.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-meteo',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule
  ],
  providers: [WeatherService],
  templateUrl: './meteo.component.html',
  styleUrl: './meteo.component.css'
})
export class MeteoComponent {
  private weatherService = inject(WeatherService);
  weatherData: WeatherData | null = null;
  city: string = '';
  currentDate: string = '';
  errorMessage: string = '';
  loading: boolean = false;

  ngOnInit() {
    this.searchWeather('Paris');
  }

  searchWeather(cityName: string) {
    if (cityName.trim()) {
      this.loading = true;
      this.errorMessage = '';

      this.weatherService.getWeatherByCity(cityName).subscribe({
        next: (data) => {
          this.weatherData = data;
          this.loading = false;
        },
        error: (error) => {
          console.error('Erreur lors de la recherche:', error);
          this.errorMessage = 'Ville non trouvée ou erreur de recherche';
          this.loading = false;
          this.weatherData = null;
        }
      });
    }
  }

  getWeatherIconUrl(icon: string): string {
    return `http://openweathermap.org/img/w/${icon}.png`;
  }

  constructor() {
    const date = new Date();
    const joursSemaine = [
      'dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'
    ];
    const mois = [
      'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
      'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'
    ];

    const jour = joursSemaine[date.getDay()];
    const numeroJour = date.getDate();
    const nomMois = mois[date.getMonth()];
    const annee = date.getFullYear();

    this.currentDate = `${jour} ${numeroJour} ${nomMois} ${annee}`;
  }
}
