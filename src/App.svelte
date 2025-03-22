<script>
  import { onMount } from 'svelte';
  import './styles.css';
  
  let city = '';
  let weatherData = null;
  let loading = false;
  let error = null;
  
  const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
  
  async function getWeather() {
    if (!city) return;
    
    loading = true;
    error = null;
    
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      
      if (!response.ok) {
        throw new Error('City not found');
      }
      
      weatherData = await response.json();
    } catch (e) {
      error = e.message;
    } finally {
      loading = false;
    }
  }
</script>

<main>
  <div class="container">
    <h1>Weather Forecast</h1>
    
    <div class="search-box">
      <input
        type="text"
        bind:value={city}
        placeholder="Enter city name"
        on:keydown={(e) => e.key === 'Enter' && getWeather()}
      />
      <button on:click={getWeather}>Search</button>
    </div>

    {#if loading}
      <div class="loading">Loading...</div>
    {:else if error}
      <div class="error">{error}</div>
    {:else if weatherData}
      <div class="weather-card">
        <h2>{weatherData.name}, {weatherData.sys.country}</h2>
        <div class="weather-info">
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt={weatherData.weather[0].description}
          />
          <div class="temperature">{Math.round(weatherData.main.temp)}°C</div>
          <div class="description">{weatherData.weather[0].description}</div>
        </div>
        <div class="details">
          <div>Humidity: {weatherData.main.humidity}%</div>
          <div>Wind: {weatherData.wind.speed} m/s</div>
        </div>
      </div>
    {/if}
  </div>
</main>
