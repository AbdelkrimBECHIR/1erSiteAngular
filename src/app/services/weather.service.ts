import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface WeatherData {
  weather: [{
    main: string;
    description: string;
    icon: string;
  }];
  main: {
    temp: number;
    humidity: number;
    feels_like: number;
    pressure: number;
  };
  wind: {
    speed: number;
  };
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private readonly API_URL = 'https://api.openweathermap.org/data/2.5';
  private readonly API_KEY = 'e507a5017dfa47ad72775663a0aa1c76';

  private http = inject(HttpClient);

  constructor() {}

  getWeatherByCity(city: string): Observable<WeatherData> {
    return this.http.get<WeatherData>(
      `${this.API_URL}/weather?q=${city}&units=metric&lang=fr&appid=${this.API_KEY}`
    );
  }
}
