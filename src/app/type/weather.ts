interface Weather {
  name: string;
  main: {
    temp: number;
    humidity: number;
    pressure: number;
  };
  wind: {
    speed: number;
  };
  weather: [{
    description: string;
    icon: string;
  }];
}
