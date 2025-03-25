export interface WeatherData {
  name: string;
  sys: {
    country: string;
  };
  weather: Array<{
    description: string;
    icon: string;
  }>;
  main: {
    temp: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
}

export interface LoginCredentials {
  username: string;
  password: string;
} 