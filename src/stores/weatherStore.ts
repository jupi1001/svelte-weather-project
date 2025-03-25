import { writable, derived, get } from 'svelte/store';
import type { WeatherData } from '../types/weather';

export const city = writable('');
export const weatherData = writable<WeatherData | null>(null);
export const loading = writable(false);
export const error = writable<string | null>(null);

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;

export async function fetchWeather() {
  const $city = get(city);
  if (!$city) return;

  loading.set(true);
  error.set(null);

  try {
    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${$city}&appid=${API_KEY}&units=metric`
    );

    if (!res.ok) {
      throw new Error('City not found');
    }

    const data = await res.json();
    weatherData.set(data);
  } catch (err) {
    error.set(err instanceof Error ? err.message : 'Something went wrong');
    weatherData.set(null);
  } finally {
    loading.set(false);
  }
}

export const weatherSummary = derived(weatherData, ($data) => {
  if (!$data) return null;
  return `${$data.name}, ${$data.sys.country} — ${Math.round($data.main.temp)}°C, ${$data.weather[0].description}`;
});
